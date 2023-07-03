import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NavLink } from "react-router-dom";

export default function BarberiaCard() {
  return (
    <Card sx={{ m: 3 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={"https://placehold.co/200"} alt="Barberia" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              sx={{ height: "100%" }}
            >
              <Grid item>
                <Typography variant="h5">{"Nombre de Barberia"}</Typography>
              </Grid>
              <Grid item>
                <Button color="inherit" endIcon={<LocationOnIcon />}>
                  <Typography>Direccion Barberia</Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  component={NavLink}
                  to="/servicios"
                >
                  Ver Servicios
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
