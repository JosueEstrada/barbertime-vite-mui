import { Typography } from "@mui/material";
import OpinionCard from "./OpinionCard.jsx";
import ClienteCard from "./ClienteCard.jsx";

export default function ClientePerfil() {
  return (
    <>
      <Typography>Hola soy el componente ClientePerfil</Typography>
      <ClienteCard />
      <OpinionCard />
      <OpinionCard />
      <OpinionCard />
    </>
  );
}
