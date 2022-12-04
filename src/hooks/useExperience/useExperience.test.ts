import { act, renderHook, waitFor } from "@testing-library/react";
import mockExperience from "../../mocks/mockExperience";
import mockExperienceCreation from "../../mocks/mockExperienceCreation";
import ProviderWrapper from "../../mocks/providerWrapper";
import {
  deleteExperienceActionCreator,
  getExperienceActionCreator,
} from "../../redux/features/experienceSlice/experienceSlice";
import { openModalActionCreator } from "../../redux/features/Uislice/Uislice";
import { store } from "../../redux/store";
import { OpenModalActionPayload } from "../../redux/types/types";
import useExperience from "./useExperience";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given the Experience custom hook", () => {
  const {
    result: {
      current: { loadAllExperiences },
    },
  } = renderHook(() => useExperience(), {
    wrapper: ProviderWrapper,
  });

  describe("When its loadExperinces is invoked and axios rejects it", () => {
    test("Then it should invoke dispatch with openModalActionCreator with text 'no hay experiencias disponibles' and isError true", async () => {
      const modalPayload: OpenModalActionPayload = {
        isError: true,
        messageFeedback: "no hay experiencias disponibles",
      };
      await act(async () => loadAllExperiences());
      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          openModalActionCreator(modalPayload)
        )
      );
    });
  });

  describe("When it's method loadExperiences is invoked", () => {
    test("Then it should invoke dispatch with ExperienceActionCreator and a list of experience", async () => {
      const {
        result: {
          current: { loadAllExperiences },
        },
      } = renderHook(() => useExperience(), {
        wrapper: ProviderWrapper,
      });

      await act(async () => await loadAllExperiences());
      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          getExperienceActionCreator(mockExperience)
        )
      );
    });
  });
  describe("When it's method deleteExperience is invoked with experienceId", () => {
    test("Then it should invoke dispatch with deleteExperienceActionCreator", async () => {
      const {
        result: {
          current: { deleteExperience },
        },
      } = renderHook(() => useExperience(), {
        wrapper: ProviderWrapper,
      });

      const { id: experienceIdExpected } = mockExperience[0];

      await deleteExperience(experienceIdExpected as string);

      expect(dispatchSpy).toHaveBeenCalledWith(
        deleteExperienceActionCreator(experienceIdExpected)
      );
    });
  });

  describe("When it's method deleteExperience is invoked and request not delete expereince", () => {
    test("Then it should invoke dispatch with openModalActionCreator with error", async () => {
      const {
        result: {
          current: { deleteExperience },
        },
      } = renderHook(() => useExperience(), {
        wrapper: ProviderWrapper,
      });

      const { id: experienceIdExpecte } = mockExperience[0];
      await deleteExperience(experienceIdExpecte as string);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator({
          isError: true,
          messageFeedback: "hemos tenido un error",
        })
      );
    });
  });

  describe("When it's method createExperience is invoked a correct experience creation", () => {
    test("then it should dispach with openModal creator with text 'Has creado una experiencia'", async () => {
      const {
        result: {
          current: { createExperience },
        },
      } = renderHook(() => useExperience(), {
        wrapper: ProviderWrapper,
      });
      const newExperience = mockExperienceCreation;
      const modalPayload: OpenModalActionPayload = {
        isError: false,
        messageFeedback: "Has creado una experiencia",
      };
      await createExperience(newExperience);
      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(modalPayload)
      );
    });
  });
  describe("When it's method createExperience is invoked and rejects is", () => {
    test("then it should dispach with openModal creator with text 'hemos tenido un error'", async () => {
      const {
        result: {
          current: { createExperience },
        },
      } = renderHook(() => useExperience(), {
        wrapper: ProviderWrapper,
      });
      const newExperience = mockExperienceCreation;
      const modalPayload: OpenModalActionPayload = {
        isError: true,
        messageFeedback: "hemos tenido un error",
      };
      await createExperience(newExperience);
      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(modalPayload)
      );
    });
  });
});
