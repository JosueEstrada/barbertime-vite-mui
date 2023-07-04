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
import { NavLink } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout.js";

const isLoggedIn = true;

export default function Navbar({ navArrayLinks }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setIsOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          ></Box>

          <Button
            color="primary"
            variant="contained"
            sx={{
              margin: 1,
              marginLeft: 3,
              width: "fit-content",
              boxShadow: "none",
              backgroundColor: "transparent",
              textTransform: "none",
            }}
            startIcon={
              <img
                src="src/assets/img/logoTitle.png"
                alt="Barbertime"
                width="32"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            }
            component={NavLink}
            to={"/"}
          >
            <Typography variant="h6">Barbertime</Typography>
          </Button>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navArrayLinks.map(
              (item) =>
                (typeof item.requiresAuth === "undefined" ||
                  item.requiresAuth === isLoggedIn) && (
                  <Button
                    color="inherit"
                    key={item.id}
                    component={NavLink}
                    to={item.path}
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
        <NavbarListDrawer
          isLoggedIn={isLoggedIn}
          navArrayLinks={navArrayLinks}
          NavLink={NavLink}
          setIsOpen={setIsOpen}
        />
      </Drawer>
    </>
  );
}
