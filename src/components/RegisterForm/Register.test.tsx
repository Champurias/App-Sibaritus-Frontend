import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import providerWrapper from "../../mocks/providerWrapper";
import ProviderWrapper from "../../mocks/providerWrapper";
import RegisterForm from "./RegisterForm";

const mockRegisterAction = jest.fn();
jest.mock("../../hooks/useUser", () => {
  return () => ({
    registerUser: mockRegisterAction,
  });
});

describe("Given a registerForm component", () => {
  describe("When it´s rendered", () => {
    test("Then it should show 3 input elements", () => {
      const expectedInputs = 2;

      render(<RegisterForm />, { wrapper: ProviderWrapper });

      const formInputs = screen.queryAllByRole("textbox");
      const passwordInput = screen.queryByLabelText("password-input");

      expect(formInputs).toHaveLength(expectedInputs);
      expect(passwordInput).toBeInTheDocument();
    });
  });
  describe("when its button 'Registrate' is clicked", () => {
    test("Then the form should be submitted", async () => {
      const buttonText = "Registrate";

      render(<RegisterForm />, { wrapper: providerWrapper });

      const usernameInput = screen.queryByLabelText("username-input")!;
      await userEvent.type(usernameInput, "hulio");

      const passwordInput = screen.queryByLabelText("password-input")!;
      await userEvent.type(passwordInput, "1234567");

      const emailInput = screen.queryByLabelText("email-input")!;
      await userEvent.type(emailInput, "hulio@gmial.com");

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(button).toHaveTextContent(buttonText);
      expect(mockRegisterAction).toHaveBeenCalled();
    });
  });
});
