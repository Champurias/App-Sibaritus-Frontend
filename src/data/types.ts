export interface UserDate {
  username: string;
  password: string;
}

export interface UserDateRegister extends UserDate {
  email: string;
}
