import NavbarListDrawer from "./NavbarListDrawer.jsx";
import { Button, Drawer } from "@mui/material";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        Open Drawer
      </Button>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <NavbarListDrawer />
      </Drawer>
    </>
  );
}
