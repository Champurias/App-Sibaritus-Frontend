import { screen } from "@testing-library/react";
import mockCurrentState from "../../mocks/mockCurrentState";
import mockExpecienceState from "../../mocks/mockExperienceState";
import { UserState } from "../../redux/types/types";
import renderWithProviders from "../../utils/testUtils/renderwithProvider";
import ExperienceList from "./ExperienceList";

const userState: UserState = {
  id: "",
  isLogged: false,
  token: "",
  email: "",
};
describe("Given a ExperienceList", () => {
  describe("When its render with a list of two experience", () => {
    test("Then it should ahow a list of experience", () => {
      renderWithProviders(<ExperienceList />, {
        preloadedState: {
          uiModal: mockCurrentState,
          experiences: mockExpecienceState,
          user: userState,
        },
      });

      const list = screen.queryAllByRole("listitem");
      expect(list).toHaveLength(2);
    });
  });
});
