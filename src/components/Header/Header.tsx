import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import HeaderStyled from "./HeaderStyled";
const Header = (): JSX.Element => {
  const { isLogged } = useAppSelector(({ user }) => user);
  return (
    <HeaderStyled className="container">
      <p>SIBARITUS</p>
      <NavLink to="/home" className="container__link">
        Experiencias
      </NavLink>
      {!isLogged && (
        <NavLink to="/registro" className="container__link">
          Registrate
        </NavLink>
      )}
      <NavLink to="/create" className="container__link">
        Crea
      </NavLink>
    </HeaderStyled>
  );
};

export default Header;
