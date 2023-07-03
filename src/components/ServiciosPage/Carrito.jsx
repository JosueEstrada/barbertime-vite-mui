import {
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Carrito({ cart, total, onRemove }) {
  return (
    <>
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Typography variant="h6" align="center" sx={{ fontWeight: "bold" }}>
          Carrito de Servicios
        </Typography>
        <ShoppingCartIcon />
      </Box>
      <Grid container sx={{ margin: 3 }}>
        {cart.map((service, index) => (
          <List key={index} dense sx={{ width: "100%" }}>
            <ListItem>
              <ListItemText>
                {service.name}
                {" : "}
                {parseFloat(service.price).toLocaleString("es-PE", {
                  style: "currency",
                  currency: "PEN",
                })}
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

        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Total:{" "}
          {parseFloat(total).toLocaleString("es-PE", {
            style: "currency",
            currency: "PEN",
          })}
        </Typography>
      </Grid>
    </>
  );
}
