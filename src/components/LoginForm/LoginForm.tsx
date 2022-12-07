import { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { UserLogin } from "../../redux/types/types";
import Button from "../Button/Button";
import RegisterFormStyled from "../RegisterForm/RegisterFormStyled";

const initialUserRegisterData: UserLogin = {
  username: "",
  password: "",
};

const LoginForm = (): JSX.Element => {
  const [formData, setFormData] = useState(initialUserRegisterData);

  const { userLogin } = useUser();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formDataToSubmit: UserLogin = {
      username: formData.username,
      password: formData.password,
    };
    userLogin(formDataToSubmit);
  };
  return (
    <RegisterFormStyled onSubmit={handleSubmit} className="register">
      <h1> Sibaritus </h1>
      <div className="register-form__container">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={formData.username}
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
        <Button text="Inicia sesion" type="submit" />
      </div>
      <h3>¿No tienes cuenta?</h3>
      <Link to={"/registro"} className="form__register">
        Regístrate
      </Link>
    </RegisterFormStyled>
  );
};

export default LoginForm;
