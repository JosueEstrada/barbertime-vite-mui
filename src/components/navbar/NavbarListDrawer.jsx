import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Fragment, useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";

export default function NavbarListDrawer({
  navArrayLinks,
  NavLink,
  setIsOpen,
}) {
  const { isLogged, logIn, logOut } = useContext(AuthContext);

  return (
    <Box sx={{ width: 250, bgcolor: "#fdfdfd" }}>
      <nav>
        <List>
          {navArrayLinks.map(
            (item) =>
              (typeof item.requiresAuth === "undefined" ||
                item.requiresAuth === isLogged) && (
                <Fragment key={item.id}>
                  <ListItem>
                    <ListItemButton
                      component={NavLink}
                      to={item.path}
                      onClick={() => {
                        setIsOpen(false);
                        item.title === "Cerrar Sesión" ? logOut() : undefined;
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                  {item.title === "Barberías" && <Divider />}
                </Fragment>
              )
          )}
        </List>
      </nav>
    </Box>
  );
}
