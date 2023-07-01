import React from "react";
import BarberiaCard from "../components/BarberiaCard.jsx";
import MapView from "../components/MapView.jsx";
import { Grid, Box } from "@mui/material";
import PaginationButtons from "../components/PaginationButtons.jsx";
import SearchBar from "../components/SearchBar.jsx";

export default function Barberias() {
  return (
    <>
      <SearchBar />
      <Grid container>
        <Grid item md={7}>
          <Box sx={{ overflow: "auto", height: "100vh" }}>
            <BarberiaCard />
            <BarberiaCard />
            <BarberiaCard />
            <BarberiaCard />
            <BarberiaCard />

            {/* Otros componentes aqui */}
          </Box>
        </Grid>
        <Grid item md={5}>
          <Box
            sx={{
              position: "",
              right: 0,
              backgroundColor: "#b90d0d",
              borderRadius: 5,
              marginTop: 3,
              marginRight: 3,
              marginLeft: 3,
            }}
          >
            <MapView />
            {/* Otros componentes aqui */}
          </Box>
        </Grid>
      </Grid>
      <PaginationButtons />
    </>
  );
}
