import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderwithProvider";
import DetailPage from "./DetailPage";

describe("Given a Detail page", () => {
  describe("When it's rendered", () => {
    test("Then should a DetailExperiencecomponent with htmt article tag", () => {
      renderWithProviders(<DetailPage />);
      const tagExpectedDetailPge = screen.queryByRole("article");

      expect(tagExpectedDetailPge).toBeInTheDocument();
    });
  });
});
