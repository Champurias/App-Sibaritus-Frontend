import styled from "styled-components";

const ExperienceCardStyled = styled.article`
  background-color: #263056;
  text-align: center;
  list-style: none;
  color: white;
  border-radius: 50px;
  overflow: hidden;
  position: relative;
  .button__delete {
    position: absolute;
    bottom: 20px;
  }
  img {
    display: block;
    object-fit: cover;
  }
  .card__tittle__container {
    padding: 20px 20px 0 20px;
  }
`;

export default ExperienceCardStyled;
