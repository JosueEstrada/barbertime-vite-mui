import SearchBar from "../components/SearchBar.jsx";
import { Box, Grid, Typography } from "@mui/material";
import bgImage from "../assets/img/bgImage.jpg";

export default function Inicio() {
  return (
    <Box
      component="div"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          <img
            src="src/assets/img/logo500.png"
            alt="logo"
            style={{ width: "150px" }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: "white",
              padding: "2 2 2 0",
            }}
          >
            FisiBarbers
          </Typography>
        </Grid>
      </Grid>

      <SearchBar />
    </Box>
  );
}
