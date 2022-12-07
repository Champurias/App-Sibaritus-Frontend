import { UserLoginData, UserState } from "../../types/types";
import { userLoginActionCreator, userReducer } from "./userSlice";

describe("Given the userSlice", () => {
  describe("When it receives an initial state empty and a login action with a new user as payload", () => {
    test("Then it should return a new state with the received user and isLogged 'true'", () => {
      const expectedStateUser: UserState = {
        email: "",
        isLogged: true,
        id: "",
        token: "",
      };
      const loginActionPayload: UserLoginData = {
        email: expectedStateUser.email,
        id: expectedStateUser.id,
        token: expectedStateUser.token,
      };

      const loginUserAction = userLoginActionCreator(loginActionPayload);
      const newStateUser = userReducer(expectedStateUser, loginUserAction);

      expect(newStateUser).toStrictEqual(expectedStateUser);
    });
  });
});
