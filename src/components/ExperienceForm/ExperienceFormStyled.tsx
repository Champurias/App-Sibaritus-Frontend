import styled from "styled-components";

const ExperienceFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px 0;

  .experience-form {
    max-width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #263056;
    width: 100%;
    padding: 10px 10px;
    color: white;
    gap: 10px;
  }

  .description {
    width: 100%;
  }

  label,
  textarea {
    display: block;
    padding-bottom: 5px;
    border-radius: 8px;
    max-width: 350px;
    width: 100%;
  }
  .register-form__container {
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
    left: -98px;
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
  label {
    color: white;
  }
  .experience-form__title {
    color: white;
    text-align: center;
    margin: 0;
  }
  .register-form__field {
    padding: 20px;
  }
`;

export default ExperienceFormStyled;
