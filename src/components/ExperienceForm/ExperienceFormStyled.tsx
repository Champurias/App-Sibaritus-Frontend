import styled from "styled-components";

const ExperienceFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  .experience-form {
    max-width: 350px;
    margin: 0 auto;
    background-color: #263056;
    width: 80%;
    padding: 10px 10px;
    color: white;
    align-items: center;
    margin-top: 50px;
  }
  label {
    display: block;
    padding-bottom: 5px;
  }
  .register-form__container {
    margin-bottom: 15px;
    color: white;
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
    padding: 10px;
    border-radius: 50px;
    max-width: 350px;
    width: 100%;
  }
  label {
    color: white;
  }
  .experience-form__title {
    color: white;
    padding: 20px;
  }
`;

export default ExperienceFormStyled;