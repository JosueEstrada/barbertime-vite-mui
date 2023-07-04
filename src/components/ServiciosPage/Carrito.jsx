import {
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProceedToCheckoutButton from "./ProceedToCheckoutButton.jsx";

export default function Carrito({ cart, total, onRemove }) {
  return (
    <Paper elevation={10}>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        p={2}
      >
        <Typography variant="h6" align="center" sx={{ fontWeight: "bold" }}>
          Carrito de Servicios
        </Typography>
        <ShoppingCartIcon />
      </Box>
      <Grid container sx={{}}>
        {cart.map((service, index) => (
          <List key={index} dense sx={{ width: "100%" }}>
            <ListItem>
              <ListItemText>
                {service.name}
                <Typography sx={{ fontWeight: "bold" }}>
                  {parseFloat(service.price).toLocaleString("es-PE", {
                    style: "currency",
                    currency: "PEN",
                  })}
                </Typography>
              </ListItemText>
              <IconButton
                edge="end"
                aria-label="remover"
                onClick={() => onRemove(service)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
            <Divider />
          </List>
        ))}

        <Typography
          variant="h5"
          align="right"
          sx={{ fontWeight: "bold", margin: 2, width: "100%" }}
        >
          Total:{" "}
          {parseFloat(total).toLocaleString("es-PE", {
            style: "currency",
            currency: "PEN",
          })}
        </Typography>
        <ProceedToCheckoutButton />
      </Grid>
    </Paper>
  );
}
