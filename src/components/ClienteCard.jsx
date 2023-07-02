import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ClienteCard({
  idCliente = 1,
  nombreCliente = "John",
  apellidoCliente = "Doe",
  contenidoFotoCliente = "https://i.pravatar.cc/200",
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={contenidoFotoCliente}
        alt="Foto del cliente"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombreCliente} {apellidoCliente}
        </Typography>
      </CardContent>
    </Card>
  );
}
