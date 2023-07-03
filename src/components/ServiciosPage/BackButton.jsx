import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  return (
    <>
      <NavLink to={-1}>
        <Button
          variant="contained"
          color="primary"
          sx={{ margin: 1, marginLeft: 3 }}
        >
          <ArrowBackIcon />
          Regresar a las Barberías
        </Button>
      </NavLink>
    </>
  );
}
