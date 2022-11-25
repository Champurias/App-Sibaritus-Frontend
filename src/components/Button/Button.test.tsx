import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When its rendered with text 'Registrate'", () => {
    test("Then it should text 'Register'", () => {
      const expectedButtonText = "Registrate";

      render(<Button text="Registrate" type="submit" />);
      const expectedButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
  describe("When it receives a action", () => {
    test("Then it should invoke an action on click", async () => {
      const mockExpected = jest.fn();

      render(<Button text="Registrate" action={mockExpected} type="submit" />);

      const expectedButton = screen.queryByRole("button")!;

      await userEvent.click(expectedButton);

      expect(mockExpected).toHaveBeenCalled();
    });
  });
});
