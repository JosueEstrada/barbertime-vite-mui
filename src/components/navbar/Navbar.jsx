import NavbarListDrawer from "./NavbarListDrawer.jsx";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const isLoggedIn = false;
const navLinks = [
  {
    title: "Inicio",
    path: "#",
    icon: <HomeIcon />,
  },
  {
    title: "Perfil",
    path: "/perfil",
    icon: <AccountCircleIcon />,
    requiresAuth: true,
  },
  {
    title: "Barberías",
    path: "/barberias",
    icon: <FaceRetouchingNaturalIcon />,
  },
  {
    title: "Citas",
    path: "/citas",
    icon: <CalendarMonthIcon />,
    requiresAuth: true,
  },
  {
    title: "Iniciar Sesión",
    path: "/login",
    icon: <LoginIcon />,
    requiresAuth: false,
  },
  {
    title: "Registrarse",
    path: "/register",
    icon: <HowToRegIcon />,
    requiresAuth: false,
  },
  {
    title: "Configuración",
    path: "/config",
    icon: <SettingsIcon />,
    requiresAuth: true,
  },
  {
    title: "Cerrar Sesión",
    path: "/logout",
    icon: <LogoutIcon />,
    requiresAuth: true,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setIsOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
            edege="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            FisiBarbers
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map(
              (item) =>
                (typeof item.requiresAuth === "undefined" ||
                  item.requiresAuth === isLoggedIn) && (
                  <Button
                    color="inherit"
                    key={item.title}
                    component="a"
                    href={item.path}
                  >
                    {item.title}
                  </Button>
                )
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavbarListDrawer isLoggedIn={isLoggedIn} navLinks={navLinks} />
      </Drawer>
    </>
  );
}
