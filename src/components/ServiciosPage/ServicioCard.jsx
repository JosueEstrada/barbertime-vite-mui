import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";

export default function ServicioCard({ onServiceSelected }) {
  const barberServices = [
    {
      name: "Corte de cabello",
      description: "Corte de cabello moderno y estilizado",
      price: "40 soles",
      status: true,
    },
    {
      name: "Afeitado",
      description: "Afeitado limpio y suave",
      price: "30 soles",
      status: false,
    },
    {
      name: "Servicio de tinte",
      description: "Coloración del cabello con variedad de tonos",
      price: "50 soles",
      status: true,
    },
    {
      name: "Manicura",
      description: "Cuidado de las uñas y las manos",
      price: "20 soles",
      status: false,
    },
    {
      name: "Pedicura",
      description: "Cuidado de las uñas y los pies",
      price: "25 soles",
      status: true,
    },
    {
      name: "Masaje",
      description: "Relajación del cuerpo y la mente",
      price: "50 soles",
      status: false,
    },
    {
      name: "Facial",
      description: "Cuidado y limpieza de la piel del rostro",
      price: "40 soles",
      status: false,
    },
    {
      name: "Peluquería",
      description: "Corte y estilo del cabello",
      price: "35 soles",
      status: true,
    },
    {
      name: "Depilación",
      description: "Eliminación del vello corporal",
      price: "45 soles",
      status: false,
    },
  ];

  const handleClick = (service, price) => {
    console.log("Button clicked");
    onServiceSelected(service, price);
  };

  return (
    <Grid container>
      {barberServices.map(({ name, description, price, status }, index) => (
        <Grid item xs={12} key={index}>
          <Card variant="outlined">
            <CardHeader
              title={
                <Typography variant="body1" fontWeight="bold">
                  {name}
                </Typography>
              }
              sx={{ padding: 0, marginLeft: 2, marginTop: 2 }}
            />
            <CardContent>
              <Grid container align="center">
                <Grid item xs={4}>
                  <Typography variant="body2" component="p" align="justify">
                    {description}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2">
                    {parseFloat(price).toLocaleString("es-PE", {
                      style: "currency",
                      currency: "PEN",
                    })}
                  </Typography>
                </Grid>

                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color={status ? "success" : "error"}
                    size="small"
                    disabled={!status}
                    onClick={() =>
                      handleClick({ name, description, price, status }, price)
                    }
                  >
                    {status ? "Agregar" : "No Disponible"}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
