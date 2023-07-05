import BarberiaCard from "../components/BarberiaCard.jsx";
import MapView from "../components/MapView.jsx";
import { Grid, Box, Typography } from "@mui/material";
import PaginationButtons from "../components/PaginationButtons.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { useBarberiasState } from "../hooks/useBarberiasState.jsx";
import { useState } from "react";

export default function Barberias() {
  const { barberias, loading, isEmpty } = useBarberiasState();
  const [coordinates, setCoordinates] = useState(null);
  const barberiasDefault = [
    {
      nombreBarberia: "Barberia Cappone",
      direccionBarberia: "Calle Schell 450",
    },
    {
      nombreBarberia: "Barbaric Barber Shop & Club",
      direccionBarberia: "Av. Javier Prado Este 6520",
    },
    {
      nombreBarberia: "Good Fella's Barbershop Perú",
      direccionBarberia: "Av La Marina 3285",
    },
    {
      nombreBarberia: "Barbería Barba Negra",
      direccionBarberia: "Calle Colón 185",
    },
    {
      nombreBarberia: "El Turco",
      direccionBarberia: "Av. San Martín 662",
    },
    {
      nombreBarberia: "Barbería Perú Style",
      direccionBarberia: "Av. Arnaldo Márquez 1263",
    },
  ];

  return (
    <>
      <Typography variant="h4" fontWeight={"bold"} marginLeft={3} marginTop={3}>
        Buscar Barberías
      </Typography>
      <SearchBar />
      <Grid container>
        <Grid item md={7}>
          <Box sx={{ overflow: "auto" }}>
            {loading && <p>Loading...</p>}
            {isEmpty && <p>No barbers found</p>}
            {barberias.map((barberia) => (
              <BarberiaCard
                key={barberia.idBarberia}
                barberia={barberia}
                setCoordinates={setCoordinates}
              />
            ))}
            {barberiasDefault.map((barberiaDefault) => (
              <BarberiaCard key={barberiaDefault} barberia={barberiaDefault} />
            ))}
          </Box>
        </Grid>
        <Grid item md={5}>
          <Box
            sx={{
              position: "sticky",
              top: 90,
              backgroundColor: "#b90d0d",
              borderRadius: 5,
              marginTop: 3,
              marginRight: 3,
              marginLeft: 3,
            }}
          >
            <MapView
              lat={coordinates ? coordinates.lat : -12.046017442000606}
              lon={coordinates ? coordinates.lon : -77.03064786820016}
            />
          </Box>
        </Grid>
      </Grid>
      <PaginationButtons />
    </>
  );
}
