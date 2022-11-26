import { renderHook } from "@testing-library/react";
import providerWrapper from "../mocks/providerWrapper";
import { store } from "../redux/store";
import useUser from "./useUser";
import { openModalActionCreator } from "../redux/features/Uislice/Uislice";
import { UserDateRegister } from "../data/types";
import { OpenModalActionPayload } from "../redux/types/types";

const dispachSpy = jest.spyOn(store, "dispatch");

describe("Given a useUser custom hook", () => {
  const {
    result: {
      current: { registerUser },
    },
  } = renderHook(() => useUser(), {
    wrapper: providerWrapper,
  });

  describe("When its method registerUser is invoked with username 'hulio' password '1234567' and email hulio@gmail.com", () => {
    test("Then it should invoke openModalActiocreator with test: 'A la web de sibaritus'", async () => {
      const registerNewUser: UserDateRegister = {
        username: "hulio",
        password: "1234567",
        email: "hulio@gmail.com",
      };
      const modalUser: OpenModalActionPayload = {
        isError: false,
        messageFeedback: "A la web de sibaritus",
      };
      await registerUser(registerNewUser);

      expect(dispachSpy).toHaveBeenCalledWith(
        openModalActionCreator(modalUser)
      );
    });

    describe("When its method registerUser is invoked with username 'registerUser'", () => {
      test("Then it should invoke dispatch with openModalAction creator with text 'invalid name, choose another name'", async () => {
        const registerNewUser: UserDateRegister = {
          username: "registerUser",
          password: "1234567",
          email: "hulio@gmail.com",
        };
        const modalUser: OpenModalActionPayload = {
          isError: true,
          messageFeedback: "No te has podido registrar",
        };
        await registerUser(registerNewUser);

        expect(dispachSpy).toHaveBeenCalledWith(
          openModalActionCreator(modalUser)
        );
      });
    });
  });
});
