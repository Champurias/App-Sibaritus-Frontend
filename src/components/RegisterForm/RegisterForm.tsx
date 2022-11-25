import { useState } from "react";
import { UserDateRegister } from "../../data/types";
import useUser from "../../hooks/useUser";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const initialUserRegisterData: UserDateRegister = {
  username: "",
  password: "",
  email: "",
};

const RegisterForm = (): JSX.Element => {
  const [formData, setFormData] = useState(initialUserRegisterData);

  const { registerUser } = useUser();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formDataToSubmit: UserDateRegister = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };
    registerUser(formDataToSubmit);
  };
  return (
    <>
      <RegisterFormStyled onSubmit={handleSubmit} className="register">
        <h1> Sibaritus </h1>
        <div className="register-form__container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={formData.username}
            id="username"
            autoComplete="off"
            aria-label="username-input"
            onChange={handleFormChange}
            className="register-form__input"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={formData.password}
            id="password"
            aria-label="password-input"
            autoComplete="off"
            onChange={handleFormChange}
            className="register-form__input"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            autoComplete="off"
            aria-label="email-input"
            onChange={handleFormChange}
            className="register-form__input"
          />
          <Button text="Registrate" type="submit" />
        </div>
      </RegisterFormStyled>
    </>
  );
};
export default RegisterForm;
