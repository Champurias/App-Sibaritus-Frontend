import { screen } from "@testing-library/react";
import mockCurrentState from "../../mocks/mockCurrentState";
import mockExpecienceState from "../../mocks/mockExperienceState";
import renderWithProviders from "../../utils/testUtils/renderwithProvider";
import Homepage from "./HomePage";

describe("Given a HomePage", () => {
  describe("When its render", () => {
    test("Then it should show a list of experience", () => {
      renderWithProviders(<Homepage />, {
        preloadedState: {
          uiModal: mockCurrentState,
          experiences: mockExpecienceState,
        },
      });
      const list = screen.queryByRole("list");
      expect(list).toBeInTheDocument();
    });
  });
});
