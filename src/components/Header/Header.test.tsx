import { screen } from "@testing-library/react";
import { ExperienceState } from "../../redux/features/experienceSlice/types";
import { UiState } from "../../redux/types/types";
import renderWithProviders from "../../utils/testUtils/renderwithProvider";
import Header from "./Header";

describe("Given a header component", () => {
  describe("When is rendered", () => {
    describe("And the user is logged", () => {
      test("Then it should show a logo image with a text 'SIBARITUS' and a link with 'Experiencias' & 'Accede' inside", () => {
        renderWithProviders(<Header />, {
          preloadedState: {
            experiences: {} as ExperienceState,
            uiModal: {} as UiState,
            user: { email: "", id: "", token: "", isLogged: false },
          },
        });

        const sibaritusLogo = screen.getByText("SIBARITUS");
        const experiencesLink = screen.getByRole("link", {
          name: "Experiencias",
        });
        const loginLink = screen.getByRole("link", {
          name: "Accede",
        });

        expect(sibaritusLogo).toBeInTheDocument();
        expect(experiencesLink).toBeInTheDocument();
        expect(loginLink).toBeInTheDocument();
      });
    });

    describe("And the user is unlogged", () => {
      test("Then it should show a logo image with a text 'SIBARITUS' and a link with 'Experiencias' & 'Accede' inside'", () => {
        renderWithProviders(<Header />, {
          preloadedState: {
            experiences: {} as ExperienceState,
            uiModal: {} as UiState,
            user: { email: "", id: "", token: "", isLogged: true },
          },
        });

        const experiencesLink = screen.getByRole("link", {
          name: "Experiencias",
        });
        const createLink = screen.getByRole("link", {
          name: "Crear",
        });

        expect(experiencesLink).toBeInTheDocument();
        expect(createLink).toBeInTheDocument();
      });
    });
  });
});
