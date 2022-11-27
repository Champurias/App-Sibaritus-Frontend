import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage", () => {
  describe("When its rendered", () => {
    test("Then it shouls show a component RegisterForm", () => {
      const resultText = "Sibaritus";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      const heading = screen.queryByRole("heading", {
        level: 1,
        name: resultText,
      });

      expect(heading).toHaveTextContent(resultText);
    });
  });
});
