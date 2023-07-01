import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Perfil from "../pages/Perfil.jsx";
import Barberias from "../pages/Barberias.jsx";
import Citas from "../pages/Citas.jsx";
import NotFound from "../pages/NotFound.jsx";
import Config from "../pages/Config.jsx";
import Logout from "../pages/Logout.jsx";
import TestPage from "../pages/TestPage.jsx";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/perfil" element={<Perfil />} />
    <Route path="/barberias" element={<Barberias />} />
    <Route path="/citas" element={<Citas />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/config" element={<Config />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="*" element={<NotFound />} />
    <Route path="/test" element={<TestPage />} />
  </Routes>
);
