import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

export default function UserTypeToggle() {
  const [activeButton, setActiveButton] = useState("cliente");
  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };
  return (
    <ButtonGroup variant="contained" aria-label="Tipo de usuario" sx={{ m: 2 }}>
      <Button
        onClick={() => handleButtonClick("cliente")}
        color={activeButton === "cliente" ? "primary" : "inherit"}
        sx={{ pl: 4, pr: 4, pt: 2, pb: 2 }}
      >
        Cliente
      </Button>
      <Button
        onClick={() => handleButtonClick("barbero")}
        color={activeButton === "barbero" ? "primary" : "inherit"}
        sx={{ pl: 4, pr: 4, pt: 2, pb: 2 }}
      >
        Barbero
      </Button>
    </ButtonGroup>
  );
}
