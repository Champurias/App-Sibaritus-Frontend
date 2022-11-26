import mockCurrentState from "../../../mocks/mockCurrentState";
import { UiState } from "../../types/types";
import {
  closeModalActionCreator,
  openModalActionCreator,
  uiReducer,
} from "./Uislice";

describe("Given the function uiSlice", () => {
  describe("When it receives an empty initial state and a openModal action with text 'Something went wrong' and isError true", () => {
    test("Then it should a new state with text and isError true", () => {
      const currentState: UiState = mockCurrentState;

      const actionPayload = {
        isError: true,
        messageFeedback: "error detected",
      };

      const openModalAction = openModalActionCreator(actionPayload);
      const newUiState = uiReducer(currentState, openModalAction);
      const expectedUiState = {
        isLoading: false,
        modal: {
          isError: true,
          isOpen: true,
          messageFeedback: "error detected",
        },
      };

      expect(newUiState).toStrictEqual(expectedUiState);
    });

    describe("When it recives a current state with isopen true and is call closeModal", () => {
      test("Then it should a new state with isOpen false", () => {
        const currentState = {
          isLoading: false,
          modal: {
            isError: true,
            isOpen: true,
            messageFeedback: "error detected",
          },
        };
        const expecttedState = mockCurrentState;
        const closeModalAction = closeModalActionCreator();
        const newState = uiReducer(currentState, closeModalAction);

        expect(newState).toStrictEqual(expecttedState);
      });
    });
  });
});
