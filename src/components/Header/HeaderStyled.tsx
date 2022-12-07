import styled from "styled-components";

const HeaderStyled = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: #263056;
  margin: 0;
  border-bottom: yellow solid 1px;

  .container__link {
    color: white;
    &.active {
      color: #f1c16b;
    }
  }
  P {
    color: white;
    font-weight: bold;
    font-size: 16px;
  }
  nav {
    display: flex;
    gap: 10px;
  }
`;

export default HeaderStyled;
