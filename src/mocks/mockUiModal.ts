import { UiState } from "../redux/types/types";

const mockUiApp: UiState = {
  isLoading: false,
  modal: {
    isError: false,
    isOpen: true,
    messageFeedback: "Bienvenido a sibaritus",
  },
};

export default mockUiApp;
