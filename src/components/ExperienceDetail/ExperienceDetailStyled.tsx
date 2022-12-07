import styled from "styled-components";

const ExperienceDetailStyled = styled.article`
  background-color: #263056;
  text-align: center;
  list-style: none;
  color: white;
  border-radius: 50px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .experience-detail__picture {
  }
  img {
    display: block;
    object-fit: cover;
  }
  .card__tittle__container {
    padding: 20px 20px 0 20px;
  }
`;

export default ExperienceDetailStyled;
