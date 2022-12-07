import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import HeaderStyled from "./HeaderStyled";
const Header = (): JSX.Element => {
  const { isLogged } = useAppSelector(({ user }) => user);
  return (
    <HeaderStyled className="container">
      <p>SIBARITUS</p>
      <nav>
        <NavLink to="/home" className="container__link">
          Experiencias
        </NavLink>
        {!isLogged && (
          <NavLink to="/login" className="container__link">
            Accede
          </NavLink>
        )}
        {isLogged && (
          <NavLink to="/create" className="container__link">
            Crear
          </NavLink>
        )}
      </nav>
    </HeaderStyled>
  );
};

export default Header;
