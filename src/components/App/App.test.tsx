import App from "./App";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderwithProvider";
import mockUiApp from "../../mocks/mockUiModal";
import experienceMockApp from "../../mocks/experienceMockApp";
import userInitialStateMock from "../../mocks/userInitialstateMock";

describe("Given an App component", () => {
  describe("When is rendered and isOpen is true", () => {
    test("Then it should show a Feedback component", () => {
      const feedbackText = "Bienvenido a sibaritus";

      renderWithProviders(<App />, {
        preloadedState: {
          uiModal: mockUiApp,
          experiences: experienceMockApp,
          user: userInitialStateMock,
        },
      });

      const feedback = screen.queryByText(feedbackText);
      expect(feedback).toBeInTheDocument();
    });
  });
});
