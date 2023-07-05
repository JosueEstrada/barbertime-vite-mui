import axios from "axios";
import { TextField, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function ClienteConfig() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Supongamos que este es el ID del cliente
  const customerId = "123";

  // Realiza la request para obtener los datos del cliente y actualiza las variables de estado.
  // Coloca aquí tu lógica backend para obtener la información del usuario.
  useEffect(() => {
    axios.get(`/api/customer/${customerId}`).then((response) => {
      setName(response.data.name);
      setLastname(response.data.lastname);
      setEmail(response.data.email);
    });
  }, [customerId]);

  const handleSave = () => {
    // Aquí debes implementar la lógica backend para actualizar la información del usuario usando axios,
    // utilizando las variables de estado actuales (name, lastname, email, password).
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      width={"350px"}
      marginLeft={3}
    >
      <Grid item xs={12}>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Nombre"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          label="Apellido"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Correo electrónico"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Contraseña"
          type="password"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleSave} variant="contained">
          Guardar
        </Button>
      </Grid>
    </Grid>
  );
}
