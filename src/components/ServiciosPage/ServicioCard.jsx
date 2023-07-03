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
      status: "Disponible",
    },
    {
      name: "Afeitado",
      description: "Afeitado limpio y suave",
      price: "30 soles",
      status: "No disponible",
    },
    {
      name: "Servicio de tinte",
      description: "Coloración del cabello con variedad de tonos",
      price: "50 soles",
      status: "Disponible",
    },
    {
      name: "Manicura",
      description: "Cuidado de las uñas y las manos",
      price: "20 soles",
      status: "Disponible",
    },
    {
      name: "Pedicura",
      description: "Cuidado de las uñas y los pies",
      price: "25 soles",
      status: "No disponible",
    },
  ];

  const handleClick = (service, price) => {
    console.log("Button clicked");
    onServiceSelected(service, price);
  };

  return (
    <Grid container sx={{ width: "50vw" }}>
      {barberServices.map(({ name, description, price, status }, index) => (
        <Grid item xs={12} key={index} sx={{ margin: 1, marginLeft: 3 }}>
          <Card variant="outlined" sx={{ padding: 2 }}>
            <CardHeader title={name} />
            <CardContent>
              <Grid container align="center">
                <Grid item xs={4}>
                  <Typography variant="body2" component="p">
                    {description}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2" component="p">
                    {parseFloat(price).toLocaleString("es-PE", {
                      style: "currency",
                      currency: "PEN",
                    })}
                  </Typography>
                </Grid>

                <Grid item xs={4} sx={{}}>
                  <Typography variant="body2" component="p">
                    {status}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={() =>
                      handleClick({ name, description, price, status }, price)
                    }
                  >
                    Seleccionar
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
