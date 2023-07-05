import ClientePerfil from "../components/ClientePerfil.jsx";
import { Grid, Typography } from "@mui/material";

export default function Perfil() {
  return (
    <>
      <Typography variant="h4" fontWeight={"bold"} marginLeft={3} marginTop={3}>
        Perfil
      </Typography>
      <ClientePerfil />
    </>
  );
}
