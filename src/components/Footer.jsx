import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box mt={2}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ padding: 1 }}>
              <Typography variant="h6" align="center" gutterBottom>
                Acerca de Nosotros
              </Typography>
              <Typography body="body2">
                Somos BugFund. Una empresa de desarrollo de Software formada por
                estudiantes Sanmarquinos.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ padding: 1 }}>
              <Typography variant="h6" align="center" gutterBottom>
                Contáctanos
              </Typography>
              <Typography body="body2">
                Calle Germán Amézaga s/n - Lima
              </Typography>
              <Typography body="body2">Email: contact@bugfund.com</Typography>
              <Typography body="body2">+51 987 456 123</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ padding: 1 }}>
              <Typography variant="h6" align="center" gutterBottom>
                Síguenos
              </Typography>
              <Box display="flex" justifyContent={"center"}>
                <Button color="inherit">
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook />
                  </a>
                </Button>
                <Button color="inherit">
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram />
                  </a>
                </Button>
                <Button color="inherit">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter />
                  </a>
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box mt={2}>
          <Typography variant="body2" align="center">
            {"Copyright © BugFund | "}
            {new Date().getFullYear()}
            {". Todos los derechos reservados."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
