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
  padding: 20px;

  img {
    display: block;
    object-fit: cover;
    border-radius: 40px;
  }
  .card__tittle__container {
    padding: 20px 20px 0 20px;
  }
  h5 {
    font-size: 1.17em;
    margin: 10px;
  }
  p {
    font-size: 1.17em;
  }
  .experience-detail__container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-right: 20px;
  }
`;

export default ExperienceDetailStyled;
