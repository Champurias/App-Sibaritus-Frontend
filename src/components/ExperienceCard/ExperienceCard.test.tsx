import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockExperience from "../../mocks/mockExperience";
import renderWithProviders from "../../utils/testUtils/renderwithProvider";
import ExperienceCard from "./ExperienceCard";

const mockDeleteExperience = jest.fn();
jest.mock("../../hooks/useExperience/useExperience", () => {
  return () => ({
    deleteExperience: mockDeleteExperience,
  });
});

describe("Given a Experience Card component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an article with text 'cata de quesos'", () => {
      const experienceTitle = "cata de quesos";
      renderWithProviders(<ExperienceCard experience={mockExperience[0]} />);
      const experienceCard = screen.queryByRole("heading", {
        level: 2,
        name: experienceTitle,
      });
      expect(experienceCard).toHaveTextContent(experienceTitle);
    });
    test("And it should show a button with text 'BORRAR'", async () => {
      const textButton = "BORRAR";

      renderWithProviders(<ExperienceCard experience={mockExperience[0]} />);

      const button = screen.queryByRole("button", { name: textButton })!;
      await userEvent.click(button!);

      expect(button).toBeInTheDocument();
      expect(mockDeleteExperience).toHaveBeenCalled();
    });
  });
});
