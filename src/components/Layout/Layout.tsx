import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <Routes>
        <Route path="/" element={<Navigate to="/registro" />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="*" element={<RegisterPage />} />
      </Routes>
    </LayoutStyled>
  );
};

export default Layout;
