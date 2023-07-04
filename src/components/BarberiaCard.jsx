import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NavLink, useLocation } from "react-router-dom";
import { getLocationData } from "../services/getLocationData.jsx";

export default function BarberiaCard({
  barberia,
  setBarbers,
  setLoading,
  setIsEmpty,
  setCoordinates,
}) {
  const handleButtonClick = () => {
    console.log("Enviar informacion de la barberia a la API de MyMapPI");
  };

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
                <Typography variant="h5">{barberia.nombreBarberia}</Typography>
              </Grid>
              <Grid item>
                <Button
                  color="inherit"
                  endIcon={<LocationOnIcon />}
                  onClick={handleButtonClick}
                >
                  <Typography>{barberia.direccionBarberia}</Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  component={NavLink}
                  to={{
                    pathname: "/servicios",
                    state: {
                      nombreBarberia: barberia.nombreBarberia,
                      direccionBarberia: barberia.direccionBarberia,
                    },
                  }}
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
