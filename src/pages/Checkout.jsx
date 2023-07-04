import Carrito from "../components/ServiciosPage/Carrito";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Stack from "@mui/material/Stack";

export default function Checkout() {
  // el resto del código de Checkout va aquí
  return (
    <Box>
      <Stack
        container
        justifyContent="center"
        sx={{ border: "solid", borderColor: "red" }}
        alignItems={"center"}
      >
        <Paper md={4} sx={{ border: "solid", borderColor: "green" }}>
          <Typography variant="h5">Fecha</Typography>
          <DatePicker />
        </Paper>
        <Paper md={4} sx={{ border: "solid", borderColor: "aqua" }}>
          <Typography variant="h5">Hora</Typography>
          <TimePicker />
        </Paper>
      </Stack>
    </Box>
  );
  // más código de Checkout si es necesario
}
