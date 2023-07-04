import { Box, Grid, Typography } from "@mui/material";

export default function LogoAndTitle() {
  return (
    <Box>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ padding: 5 }}
      >
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
              textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
              fontWeight: "bold",
            }}
          >
            Barbertime
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
