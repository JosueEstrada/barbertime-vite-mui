import ClienteConfig from "../components/ClienteConfig.jsx";
import { Typography } from "@mui/material";

export default function Config() {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        marginLeft={3}
        marginTop={3}
        marginBottom={3}
      >
        Configuración
      </Typography>
      <ClienteConfig />
    </>
  );
}
