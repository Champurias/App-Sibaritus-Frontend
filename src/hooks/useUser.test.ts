import { renderHook } from "@testing-library/react";
import providerWrapper from "../mocks/providerWrapper";
import { store } from "../redux/store";
import useUser from "./useUser";
import { openModalActionCreator } from "../redux/features/Uislice/Uislice";
import { UserDateRegister } from "../data/types";
import {
  JwtCustomPayload,
  OpenModalActionPayload,
  UserLogin,
  UserLoginData,
} from "../redux/types/types";
import { userLoginActionCreator } from "../redux/features/userSlice/userSlice";

jest.mock("jwt-decode", () => {
  return () => ({ id: "testId", email: "james@gmail.com" } as JwtCustomPayload);
});

const dispachSpy = jest.spyOn(store, "dispatch");

describe("Given a useUser custom hook", () => {
  const {
    result: {
      current: { registerUser, userLogin },
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
  describe("When the method userLogin is called with email 'james@gmail.com' and password: '1234'", () => {
    test("Then it should call the dispatch with userLoginActionCreator", async () => {
      const loginData: UserLogin = {
        username: "paca@gmail.com",
        password: "1234",
      };

      const loginActionPayload: UserLoginData = {
        id: "testId",
        token: "tokenTest",
        email: "james@gmail.com",
      };

      await userLogin(loginData);

      expect(dispachSpy).toHaveBeenCalledWith(
        userLoginActionCreator(loginActionPayload)
      );
    });
  });

  describe("When the method userLogin is invoked with email: 'paca@gmail.com' and the incorrect password: '12345'", () => {
    test("Then it should dispatch the OpenModalActionPayload and text 'No te pudiste logear'", async () => {
      const newUser: UserLogin = {
        username: "paca@gmail.com",
        password: "wrongPassword",
      };

      const modalPayload: OpenModalActionPayload = {
        isError: true,
        messageFeedback: "No te pudiste logear",
      };

      await userLogin(newUser);

      expect(dispachSpy).toHaveBeenCalledWith(
        openModalActionCreator(modalPayload)
      );
    });
  });
});
