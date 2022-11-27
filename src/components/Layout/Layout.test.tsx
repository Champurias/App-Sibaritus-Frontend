import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";

import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When its rendered", () => {
    test("Then it should show a RegisterForm component with three inputs username, password, email and the button to register", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Layout />
          </Provider>
        </BrowserRouter>
      );

      const nameInput = screen.queryByRole("textbox", {
        name: "username-input",
      });
      const emailInput = screen.queryByRole("textbox", {
        name: "email-input",
      });
      const passwordInput = screen.queryByLabelText("password-input");

      const button = screen.queryByRole("button", {
        name: "Registrate",
      });

      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
