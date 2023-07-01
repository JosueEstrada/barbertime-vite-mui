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
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            FisiBarbers
          </Typography>
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
