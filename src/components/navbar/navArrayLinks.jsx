import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export const navArrayLinks = [
  {
    id: 0,
    title: "Inicio",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    id: 1,
    title: "Perfil",
    path: "/perfil",
    icon: <AccountCircleIcon />,
    requiresAuth: true,
  },
  {
    id: 2,
    title: "Citas",
    path: "/citas",
    icon: <CalendarMonthIcon />,
    requiresAuth: true,
  },
  {
    id: 3,
    title: "Barberías",
    path: "/barberias",
    icon: <FaceRetouchingNaturalIcon />,
  },
  {
    id: 4,
    title: "Iniciar Sesión",
    path: "/login",
    icon: <LoginIcon />,
    requiresAuth: false,
  },
  {
    id: 5,
    title: "Registrarse",
    path: "/register",
    icon: <HowToRegIcon />,
    requiresAuth: false,
  },
  {
    id: 6,
    title: "Configuración",
    path: "/config",
    icon: <SettingsIcon />,
    requiresAuth: true,
  },
  {
    id: 7,
    title: "Cerrar Sesión",
    path: "/logout",
    icon: <LogoutIcon />,
    requiresAuth: true,
  },
];
