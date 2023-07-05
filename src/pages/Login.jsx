import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserTypeToggle from "../components/UserTypeToggle.jsx";
import { AuthContext } from "../context/AuthContext.jsx";

export default function Login() {
  const { logIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Iniciar Sesión
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, p: 3 }}
            onClick={logIn}
          >
            <Typography variant="h6">Iniciar Sesión</Typography>
          </Button>
          <FormControlLabel
            control={<Checkbox value="Recuérdame" color="primary" />}
            label="Recuérdame"
          />
          <Grid container spacing={5}>
            <Grid item xs>
              <Typography variant="body1" color="text.secondary">
                <Link to="/register">Regístrate</Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="text.secondary">
                <Link to="/recuperar">Recuperar contraseña</Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
