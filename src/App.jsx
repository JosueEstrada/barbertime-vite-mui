import { Box, Button, Container, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function App() {
  return (
    <Container maxWidth="md" sx={{ border: 3, boxShadow: 3, pb: 3 }}>
      <Typography variant="h3" component="h1">
        Titulo Principal
      </Typography>
      <Box sx={{ border: 3, boxShadow: 3, pb: 3 }}> Esto es una caja</Box>
      <Button variant="contained">Button 1</Button>
      <Button variant="contained" color="secondary" startIcon={<GitHubIcon />}>
        Button 2
      </Button>
      <Button variant="contained" disabled>
        Button 3
      </Button>
      <Button variant="contained" color="success" endIcon={<FavoriteIcon />}>
        Button 4
      </Button>
      <Button variant="contained" color="error">
        Button 5
      </Button>
      <Button variant="contained" color="warning">
        Button 6
      </Button>
    </Container>
  );
}
