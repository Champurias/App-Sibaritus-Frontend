import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import LoginPage from "./LoginPage";

describe("Given a LoginPage", () => {
  describe("When its rendered", () => {
    test("Then it should show a component LoginForm", () => {
      const headingText = "Sibaritus";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );
      const heading = screen.queryByRole("heading", {
        level: 1,
        name: headingText,
      });
      expect(heading).toHaveTextContent(headingText);
    });
  });
});
