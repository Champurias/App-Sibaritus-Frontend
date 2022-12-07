import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProviderWrapper from "../../mocks/providerWrapper";
import renderWithProviders from "../../utils/testUtils/renderwithProvider";
import LoginForm from "./LoginForm";

const mockLoginAction = jest.fn();

jest.mock("../../hooks/useUser", () => {
  return () => ({
    userLogin: mockLoginAction,
  });
});

describe("Given a LoginForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show input and password with aria-label", () => {
      const expectedInputs = 1;

      renderWithProviders(<LoginForm />);
      const formInputs = screen.queryAllByRole("textbox");
      const passwordInput = screen.queryByLabelText("password-input");

      expect(formInputs).toHaveLength(expectedInputs);
      expect(passwordInput).toBeInTheDocument();
    });
  });
  describe("When its button 'Inicia sesion' is clicked", () => {
    test("Then the form should be submitted", async () => {
      const buttonText = "Inicia sesion";

      render(<LoginForm />, { wrapper: ProviderWrapper });

      const usernameInput = screen.queryByLabelText("username-input")!;
      await userEvent.type(usernameInput, "hulio");

      const passwordInput = screen.queryByLabelText("password-input")!;
      await userEvent.type(passwordInput, "1234567");

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(button).toHaveTextContent(buttonText);
      expect(mockLoginAction).toHaveBeenCalled();
    });
  });
});
