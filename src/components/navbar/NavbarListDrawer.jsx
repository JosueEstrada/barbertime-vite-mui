import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Fragment } from "react";

export default function NavbarListDrawer({
  isLoggedIn,
  navArrayLinks,
  NavLink,
  setIsOpen,
}) {
  return (
    <Box sx={{ width: 250, bgcolor: "#fdfdfd" }}>
      <nav>
        <List>
          {navArrayLinks.map(
            (item) =>
              (typeof item.requiresAuth === "undefined" ||
                item.requiresAuth === isLoggedIn) && (
                <Fragment key={item.id}>
                  <ListItem>
                    <ListItemButton
                      component={NavLink}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
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
