import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";

export default function Citas() {
  const [date, setDate] = useState(dayjs().add(1, "day"));
  const [time, setTime] = useState(dayjs().hour(10).minute(30));
  const [open, setOpen] = useState(false);

  const maxDate = dayjs().add(7, "day");

  const handleChange = (newValue) => {
    setDate(newValue);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Typography variant="h4" fontWeight={"bold"} marginLeft={3} marginTop={3}>
        Citas
      </Typography>
      <Stack container justifyContent="center" alignItems={"center"}>
        <DateCalendar
          openTo="day"
          views={["year", "month", "day"]}
          value={date}
          onChange={setDate}
          disablePast
          maxDate={maxDate}
        />
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Ver Citas{" "}
        </Button>
      </Stack>

      {/*<Dialog open={open} onClose={handleClose}>*/}
      {/*  <DialogTitle>Fechas seleccionadas</DialogTitle>*/}
      {/*</Dialog>*/}
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Citas Agendadas:"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography variant="body1">
              Tu siguiente cita es el {date.format("D/MM/YYYY")} a las{" "}
              {time.format("HH:mm")}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
