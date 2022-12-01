import { NavLink } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";
const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="container">
      <p>SIBARITUS</p>
      <NavLink to="/home" className="container__link">
        EXPERIENCIAS
      </NavLink>
      <NavLink to="/register" className="container__link">
        REGISTER
      </NavLink>
    </HeaderStyled>
  );
};

export default Header;
