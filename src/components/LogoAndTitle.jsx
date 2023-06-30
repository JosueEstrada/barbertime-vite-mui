import { Box, Grid, Typography } from "@mui/material";

export default function LogoAndTitle() {
  return (
    <Box sx={{}}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        //sx={{ background: "white", opacity: 0.8 }}
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
            }}
          >
            FisiBarbers
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
