import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function NavbarListDrawer({ isLoggedIn, navLinks }) {
  return (
    <Box sx={{ width: 250, bgcolor: "#fdfdfd" }}>
      <nav>
        <List>
          {navLinks.map(
            (item) =>
              (typeof item.requiresAuth === "undefined" ||
                item.requiresAuth === isLoggedIn) && (
                <>
                  <ListItem key={item.title}>
                    <ListItemButton component="a" href={item.path}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                  {(item.title === "Citas" || item.title === "Barberías") && (
                    <Divider />
                  )}
                </>
              )
          )}
        </List>
      </nav>
    </Box>
  );
}
