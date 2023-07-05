import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import UserTypeToggle from "../components/UserTypeToggle.jsx";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: "",
  });

  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleRepasswordChange = (e) => {
    setRepassword(e.target.value);
    // If TextField is not empty and passwords do not match, show error
    if (e.target.value !== "" && e.target.value !== password) {
      setPasswordError({
        error: true,
        message: "Las contraseñas no coinciden",
      });
    } else {
      setPasswordError({
        error: false,
        message: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if passwords match
    if (password !== repassword) {
      setPasswordError({
        error: true,
        message: "Las contraseñas no coinciden",
      });
      return;
    }

    if (validateEmail(email)) {
      setError({
        error: false,
        message: "",
      });
      console.log("Email correcto");
    } else {
      setError({
        error: true,
        message: "Formato de email incorrecto",
      });
    }
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      repassword: data.get("repassword"),
    });
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
          marginTop: 8,
          width: "100%",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Registrarse
        </Typography>
        <UserTypeToggle />
        <Box component="form" onSubmit={handleSubmit} noValidate>
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
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            id="password"
            name="password"
            label="Contraseña"
            variant="outlined"
            autoComplete="current-password"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
            type={"password"}/>
          <TextField
            id="repassword"
            name="repassword"
            label="Confirmar Contraseña"
            variant="outlined"
            autoComplete="current-password"
            required
            fullWidth
            value={repassword}
            onChange={handleRepasswordChange}
            sx={{ mb: 2 }}
            error={passwordError.error}
            helperText={passwordError.message}
            type={"password"}/>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, p: 3 }}
          >
            <Typography variant="h6">Regístrame</Typography>
          </Button>

          <Grid container spacing={5}>
            <Grid item>
              <Typography variant="body1" color="text.secondary">
                <Link to="/login">¿Ya tienes una cuenta? Inicia Sesión</Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
