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
import { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import imgLogoTitle from "../../assets/img/logoTitle.png";

export default function Navbar({ navArrayLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  const { isLogged, logIn, logOut } = useContext(AuthContext);
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
              width: "100%",
              alignItems: "center",
            }}
          >
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
                  src={imgLogoTitle}
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
                    item.requiresAuth === isLogged) && (
                    <Button
                      color="inherit"
                      key={item.id}
                      component={NavLink}
                      to={item.path}
                      onClick={() => (item.id === 7 ? logOut() : undefined)}
                      sx={{
                        marginRight: 1,
                        "&:hover": {
                          borderColor: "white",
                          borderWidth: 2,
                          borderStyle: "solid",
                        },
                      }}
                    >
                      {item.title}
                    </Button>
                  )
              )}
            </Box>
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
          navArrayLinks={navArrayLinks}
          NavLink={NavLink}
          setIsOpen={setIsOpen}
        />
      </Drawer>
    </>
  );
}
