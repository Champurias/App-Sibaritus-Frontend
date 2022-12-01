import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderwithProvider";
import Header from "./Header";

describe("Given a header component", () => {
  describe("When is rendered", () => {
    test("then it should show a logo image with a text 'SIBARITUS'", () => {
      renderWithProviders(<Header />);

      const header = screen.queryByText("SIBARITUS");

      expect(header).toBeInTheDocument();
    });
  });
});
