import styled from "styled-components";

const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.register {
    max-width: 350px;
    background-color: #263056;
    width: 100%;
    color: white;
    align-items: center;
  }

  label {
    display: block;
    padding-bottom: 5px;
  }
  .register-form__container {
    color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  button {
    border: 1px solid darkgoldenrod;
    background-color: #020905;
    color: white;
    min-width: 200px;
    padding: 10px;
    border-radius: 10px;
    margin: 30px auto 0;
    text-align: center;
    font-size: 1rem;
    display: block;
    &:hover,
    &:focus {
      background-color: skyblue;
    }
  }
  input {
    border: 1px solid #666;
    padding: 0 10px;
    border-radius: 50px;
    max-width: 350px;
    width: 100%;
    height: 60px;
  }
  .form__register {
    color: #f1c16b;
  }
`;

export default RegisterFormStyled;
