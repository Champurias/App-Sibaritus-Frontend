import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OpenModalActionPayload, UiState } from "../../types/types";

const uiInitialState: UiState = {
  isLoading: false,
  modal: {
    isOpen: false,
    messageFeedback: "",
    isError: false,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    openModal: (ui, action: PayloadAction<OpenModalActionPayload>) => ({
      ...ui,
      modal: {
        isOpen: true,
        messageFeedback: action.payload.messageFeedback,
        isError: action.payload.isError,
      },
    }),
    closeModal: (ui) => ({
      ...ui,
      modal: {
        isOpen: false,
        messageFeedback: "",
        isError: false,
      },
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
} = uiSlice.actions;
