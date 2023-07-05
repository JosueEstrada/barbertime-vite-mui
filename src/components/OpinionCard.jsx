import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";

export default function OpinionCard({
  fotoCliente = "https://i.pravatar.cc/100",
  barberiaNombre = "FISI BarberShop!",
  clienteNombre = "John Doe",
  ratingValue = 1.5,
  opinionMessage = "Extremadamente descontento. Corte desigual, atención apresurada y ambiente incómodo. ¡No volveré a este barbero de nuevo!",
}) {
  return (
    <Card elevation={10} sx={{ maxWidth: "400px", marginTop: 3 }}>
      <CardHeader
        avatar={<Avatar src={fotoCliente}></Avatar>}
        title={barberiaNombre}
        subheader={
          <Rating
            name="read-only"
            value={ratingValue}
            precision={0.5}
            readOnly
          />
        }
      />
      <CardContent>
        <Typography variant="subtitle1">
          {clienteNombre}
          {" dice:"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {opinionMessage}
        </Typography>
      </CardContent>
    </Card>
  );
}
