import TopDetailCard from "../components/ServiciosPage/TopDetailCard.jsx";
import ServicioCard from "../components/ServiciosPage/ServicioCard.jsx";
import BackButton from "../components/ServiciosPage/BackButton.jsx";
import Carrito from "../components/ServiciosPage/Carrito.jsx";
import { useServiciosState } from "../hooks/useServiciosState.jsx";
import { Grid, Paper, Typography } from "@mui/material";

export default function Servicios() {
  const { cart, total, addToCart, removeFromCart } = useServiciosState();

  return (
    <>
      <Typography variant="h4" fontWeight={"bold"} marginLeft={3} marginTop={3}>
        Servicios
      </Typography>
      <BackButton />
      <TopDetailCard />
      <Grid container justifyContent="center">
        <Grid item md={6} sx={{ padding: 2 }}>
          <ServicioCard onServiceSelected={addToCart} />
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            position: "sticky",
            top: "0",
            maxHeight: "100vh",
            padding: 2,
            overflow: "auto",
          }}
        >
          <Carrito cart={cart} total={total} onRemove={removeFromCart} />
        </Grid>
      </Grid>
    </>
  );
}
