import { Grid, Typography } from "@mui/material";
import OpinionCard from "./OpinionCard.jsx";
import ClienteCard from "./ClienteCard.jsx";

export default function ClientePerfil() {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
    >
      <Grid item>
        <ClienteCard />
      </Grid>
      <Grid item>
        <Typography variant={"h5"}>Opiniones</Typography>
      </Grid>
      <Grid item>
        <OpinionCard />
      </Grid>
      <Grid item>
        <OpinionCard />
      </Grid>
    </Grid>
  );
}
