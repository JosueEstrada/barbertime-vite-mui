import { useState } from "react";
import { Grid } from "@mui/material";

export default function Carrito({ cart, total, onRemove }) {
  const barberServices = [];

  return (
    <Grid container sx={{ width: "50vw" }}>
      <h2>Cart</h2>
      {cart.map((service, index) => (
        <div key={index}>
          <p>
            {service.name} : {service.price}
          </p>
          <button onClick={() => onRemove(service)}>Eliminar</button>
        </div>
      ))}
      <h2>
        Total:{" "}
        {parseFloat(total).toLocaleString("es-PE", {
          style: "currency",
          currency: "PEN",
        })}
      </h2>
    </Grid>
  );
}
