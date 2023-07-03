import { Grid, Typography } from "@mui/material";

export default function TopDetailCard({ barber }) {
  return (
    <Grid container sx={{ margin: 1, marginLeft: 3 }}>
      <Grid item>
        <Typography variant="h4" gutterBottom>
          {barber.barberName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {barber.address}
        </Typography>
      </Grid>
    </Grid>
  );
}
