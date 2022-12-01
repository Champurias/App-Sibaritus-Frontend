import { screen } from "@testing-library/react";
import mockCurrentState from "../../mocks/mockCurrentState";
import mockExperienceList from "../../mocks/mockExperienceList";
import mockExpecienceState from "../../mocks/mockExperienceState";
import renderWithProviders from "../../utils/testUtils/renderwithProvider";
import ExperienceList from "./ExperienceList";

describe("Given a ExperienceList", () => {
  describe("When its render with a list of two experience", () => {
    test("Then it should ahow a list of experience", () => {
      renderWithProviders(<ExperienceList />, {
        preloadedState: {
          uiModal: mockCurrentState,
          experiences: mockExpecienceState,
        },
      });

      const list = screen.queryAllByRole("listitem");
      expect(list).toHaveLength(2);
    });
  });
});
