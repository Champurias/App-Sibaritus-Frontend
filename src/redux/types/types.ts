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
export interface UserLoginData {
  id: string;
  token: string;
  email: string;
}

export interface UserState extends UserLoginData {
  isLogged: boolean;
}
export interface UserLogin {
  username: string;
  password: string;
}
export interface JwtCustomPayload {
  id: string;
  email: string;
}
export interface UserCredentials {
  name: string;
  password: string;
  email: string;
}
