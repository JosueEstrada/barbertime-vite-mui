import { Container, Grid, Typography } from "@mui/material";

export default function App() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1" sx={{ border: 3, borderColor: "blue" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            architecto deserunt dolor enim harum illum itaque, nesciunt placeat
            reiciendis ullam!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1" sx={{ border: 3, borderColor: "orange" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            architecto deserunt dolor enim harum illum itaque, nesciunt placeat
            reiciendis ullam!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1" sx={{ border: 3, borderColor: "red" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            architecto deserunt dolor enim harum illum itaque, nesciunt placeat
            reiciendis ullam!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
