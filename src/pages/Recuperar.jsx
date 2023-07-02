import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Recuperar() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setError({
        error: false,
        message: "",
      });
    } else if (validateEmail(e.target.value)) {
      setError({
        error: false,
        message: "",
      });
    } else {
      setError({
        error: true,
        message: "Formato de email incorrecto",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError({
        error: false,
        message: "",
      });
      // Aquí debes implementar la lógica de temperatura
      // para enviar la solicitud de restablecimiento de contraseña
      console.log("Solicitud de recuperación de contraseña enviada");
      setEmail("");
      setShowSuccessAlert(true);
    } else {
      setError({
        error: true,
        message: "Formato de email incorrecto",
      });
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          width: "100%",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          Recuperar Contraseña
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            id="email"
            name="email"
            type="email"
            label="Correo electrónico"
            variant="outlined"
            autoComplete="email"
            margin="dense"
            helperText={error.message}
            error={error.error}
            required
            autoFocus
            fullWidth
            value={email}
            onChange={handleEmailChange}
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, p: 3 }}
          >
            <Typography variant="h6">Enviar Solicitud</Typography>
          </Button>
          {showSuccessAlert && (
            <Alert serverity="success">
              <AlertTitle>¡Solicitud enviada!</AlertTitle>
              ¡Hemos enviado un correo para la recuperación de tu contraseña!
              <strong> Por favor, revisa tu email.</strong>
            </Alert>
          )}
        </Box>
      </Box>
    </Container>
  );
}
