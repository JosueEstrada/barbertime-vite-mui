import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

export default function ProceedToCheckoutButton() {
  return (
    <Button
      color="primary"
      variant="contained"
      sx={{ margin: 1, marginLeft: 3, width: "100%" }}
      endIcon={<ShoppingCartCheckoutIcon />}
      component={NavLink}
      to={"/checkout"}
    >
      Agendar la Cita
    </Button>
  );
}
