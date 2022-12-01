import { Route, Routes } from "react-router-dom";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import ExperienceList from "../ExperienceList/ExperienceList";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <Routes>
        <Route path="/" element={<ExperienceList />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="*" element={<RegisterPage />} />
      </Routes>
    </LayoutStyled>
  );
};

export default Layout;
