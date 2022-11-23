export interface ModalState {
  isOpen: boolean;
  messageFeedback: string;
  isError: boolean;
}
export interface UiState {
  modal: ModalState;
  isLoading: boolean;
}

export interface OpenModalActionPayload {
  messageFeedback: string;
  isError: boolean;
}
