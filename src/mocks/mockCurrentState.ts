import { UiState } from "../redux/types/types";

const mockCurrentState: UiState = {
  isLoading: false,
  modal: {
    isError: false,
    isOpen: false,
    messageFeedback: "",
  },
};

export default mockCurrentState;
