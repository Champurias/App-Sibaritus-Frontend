import { renderHook } from "@testing-library/react";
import mockExperience from "../../mocks/mockExperience";
import ProviderWrapper from "../../mocks/providerWrapper";
import { getExperienceActionCreator } from "../../redux/features/experienceSlice/experienceSlice";
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

  describe("When its method loadAllGraffitis is invoked and axios rejects it", () => {
    test("Then it should invoke dispatch with openModalActionCreator with text 'no hay experiencias disponibles' and isError true", async () => {
      const modalPayload: OpenModalActionPayload = {
        isError: true,
        messageFeedback: "no hay experiencias disponibles",
      };
      await loadAllExperiences();

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(modalPayload)
      );
    });
  });

  describe("When it's method loadAllGraffitis is invoked", () => {
    test("Then it should invoke dispatch with loadGraffitisActionCreator and a list of graffitis", async () => {
      await loadAllExperiences();

      expect(dispatchSpy).toHaveBeenCalledWith(
        getExperienceActionCreator(mockExperience)
      );
    });
  });
});
