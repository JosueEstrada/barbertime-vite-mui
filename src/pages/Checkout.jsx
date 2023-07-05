import {
  Box,
  Paper,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { DateCalendar, TimePicker } from "@mui/x-date-pickers";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import dayjs from "dayjs";

export default function Checkout() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState(dayjs().hour(8).minute(0));

  // Bloqueamos fechas posteriores a la semana actual
  const maxDate = dayjs().add(7, "day");

  const serviciosCheckout = [
    {
      name: "Corte de cabello",
      description: "Corte de cabello moderno y estilizado",
      price: "40",
      status: true,
    },
    {
      name: "Afeitado",
      description: "Afeitado limpio y suave",
      price: "30",
      status: false,
    },
    {
      name: "Servicio de tinte",
      description: "Coloración del cabello con variedad de tonos",
      price: "50",
      status: true,
    },
    {
      name: "Manicura",
      description: "Cuidado de las uñas y las manos",
      price: "20",
      status: false,
    },
    {
      name: "Pedicura",
      description: "Cuidado de las uñas y los pies",
      price: "25",
      status: true,
    },
    {
      name: "Masaje",
      description: "Relajación del cuerpo y la mente",
      price: "50",
      status: false,
    },
    {
      name: "Facial",
      description: "Cuidado y limpieza de la piel del rostro",
      price: "40",
      status: false,
    },
    {
      name: "Peluquería",
      description: "Corte y estilo del cabello",
      price: "35",
      status: true,
    },
    {
      name: "Depilación",
      description: "Eliminación del vello corporal",
      price: "45",
      status: false,
    },
  ];

  // Función auxiliar para convertir los precios a números
  function convertPriceToNumber(priceString) {
    return parseFloat(priceString).toLocaleString("es-PE", {
      style: "currency",
      currency: "PEN",
    });
  }

  // Mapear los primeros tres servicios y devolver la lista
  const total = serviciosCheckout.slice(0, 3).reduce((acc, servicio) => {
    return acc + parseFloat(servicio.price);
  }, 0);

  const handleClick = () => {
    // Redirigir a la plataforma de pagos aquí
    setOpen(true);
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight={"bold"} marginLeft={3} marginTop={3}>
        Agendar Cita
      </Typography>
      <Stack container justifyContent="center" alignItems={"center"}>
        <Box display={"flex"} alignItems={"center"}>
          <Paper md={4} sx={{ margin: 2 }}>
            <Typography variant="h5" fontWeight={"bold"} align={"center"}>
              Fecha
            </Typography>
            <DateCalendar
              openTo="day"
              views={["year", "month", "day"]}
              value={date}
              onChange={setDate}
              disablePast
              maxDate={maxDate}
            />
          </Paper>
          <Paper md={4} sx={{ margin: 2 }}>
            <Typography variant="h5" fontWeight={"bold"} align={"center"}>
              Hora
            </Typography>
            <TimePicker
              openTo="hours"
              views={["hours", "minutes"]}
              value={time}
              onChange={setTime}
              minTime={dayjs().hour(8).minute(0)}
              maxTime={dayjs().set("hour", 20)}
            />
          </Paper>
        </Box>

        <Alert severity={"success"}>
          {`Su próxima cita será el ${date.format(
            "DD/MM/YYYY"
          )} a las ${time.format("HH:mm")}`}
        </Alert>
        <Box md={4} sx={{ margin: 2 }}>
          <Typography variant="h5">Barbería: Barbería Carppone</Typography>
          <Typography variant="body1">Dirección: Calle Schell 450</Typography>

          <List>
            {serviciosCheckout.slice(0, 3).map((servicio, index) => (
              <ListItem key={index} sx={{ padding: 0 }}>
                <ListItemText
                  primary={servicio.name}
                  secondary={`Precio: ${convertPriceToNumber(servicio.price)}`}
                />
              </ListItem>
            ))}
          </List>
          <div>
            Total:{" "}
            {total.toLocaleString("es-PE", {
              style: "currency",
              currency: "PEN",
            })}
          </div>
        </Box>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Pagar Servicios
        </Button>
        {open && (
          <Alert severity="info">Diridiendose a la plataforma de Pagos</Alert>
        )}
      </Stack>
    </Box>
  );
}
