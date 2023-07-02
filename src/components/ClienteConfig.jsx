import axios from "axios";
import { TextField, Button } from "@mui/material";
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
    <>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Nombre"
      />
      <TextField
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        label="Apellido"
      />
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Correo electrónico"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Contraseña"
        type="password"
      />
      <Button onClick={handleSave} variant="contained">
        Guardar
      </Button>
    </>
  );
}
