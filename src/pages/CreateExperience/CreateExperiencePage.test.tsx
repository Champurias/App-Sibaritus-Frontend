import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderwithProvider";
import CreateExperiencePage from "./CreateExperiencePage";

describe("Given a   ExperiencePage", () => {
  describe("When its rendered", () => {
    test("Then it should show a ExperienceForm with an 'title' input", () => {
      const expectedText = "Title:";

      renderWithProviders(<CreateExperiencePage />);

      const title = screen.queryByLabelText(expectedText);

      expect(title).toBeInTheDocument();
    });
  });
});
