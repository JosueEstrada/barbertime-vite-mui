import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Paper, Typography } from "@mui/material";
import img404 from "../assets/img/404.jpg";

export default function NotFound() {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prevSeconds) => prevSeconds - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(timer);
    };
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid black",
          mt: 3,
          width: "fit-content",
          padding: 2,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          PÁGINA NO ENCONTRADA
        </Typography>
        <img
          src={img404}
          alt={"Imagen de Error 404 Página no encontrada"}
          width={"200"}
        />
        <Typography variant="body1">
          Redireccionando al Inicio en {secondsLeft}
          {secondsLeft > 1 ? " segundos..." : " segundo..."}
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          <Typography>Vamos al Inicio</Typography>
        </Button>
      </Paper>
    </Box>
  );
}
