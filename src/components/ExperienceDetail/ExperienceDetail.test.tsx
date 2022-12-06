import { screen } from "@testing-library/react";
import mockExperience from "../../mocks/mockExperience";
import renderWithProviders from "../../utils/testUtils/renderwithProvider";
import ExperienceDetail from "./ExperienceDetail";

describe("Given the experience user interface component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an article with test 'cata de quesos'", () => {
      const experienceTitle = "cata de quesos";

      renderWithProviders(<ExperienceDetail experience={mockExperience[0]} />);

      const experienceDetail = screen.queryByRole("heading", {
        level: 2,
        name: experienceTitle,
      });

      expect(experienceDetail).toHaveTextContent(experienceTitle);
    });
  });
});
