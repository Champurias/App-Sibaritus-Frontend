import { Navigate, Route, Routes } from "react-router-dom";
import CreateExperiencePage from "../../pages/CreateExperience/CreateExperiencePage";
import Homepage from "../../pages/HomePage/HomePage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import Header from "../Header/Header";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/create" element={<CreateExperiencePage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="*" element={<RegisterPage />} />
      </Routes>
    </LayoutStyled>
  );
};

export default Layout;
