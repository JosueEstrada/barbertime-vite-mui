import { Box, Grid, Typography } from "@mui/material";

export default function LogoAndTitle() {
  return (
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
  );
}
