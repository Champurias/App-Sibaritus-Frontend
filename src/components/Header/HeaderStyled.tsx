import styled from "styled-components";

const HeaderStyled = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px;
  background-color: #263056;
  margin: 0;

  .container__link {
    color: white;
    &.active {
      color: #f1c16b;
    }
  }
  P {
    color: white;
  }
`;

export default HeaderStyled;
