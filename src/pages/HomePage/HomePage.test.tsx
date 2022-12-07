import { screen } from "@testing-library/react";
import mockCurrentState from "../../mocks/mockCurrentState";
import mockExpecienceState from "../../mocks/mockExperienceState";
import { UserState } from "../../redux/types/types";
import renderWithProviders from "../../utils/testUtils/renderwithProvider";
import Homepage from "./HomePage";

const userState: UserState = {
  id: "",
  isLogged: false,
  token: "",
  email: "",
};

describe("Given a HomePage", () => {
  describe("When its render", () => {
    test("Then it should show a list of experience", () => {
      renderWithProviders(<Homepage />, {
        preloadedState: {
          uiModal: mockCurrentState,
          experiences: mockExpecienceState,
          user: userState,
        },
      });
      const list = screen.queryByRole("list");
      expect(list).toBeInTheDocument();
    });
  });
});
