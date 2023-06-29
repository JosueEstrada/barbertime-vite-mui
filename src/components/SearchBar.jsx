import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log(searchTerm);
      // Aquí va tu lógica al presionar Enter
    }
  };

  const handleSearchClick = () => {
    console.log(searchTerm);
    // Aquí va tu lógica al hacer clic en el icono de búsqueda
  };

  return (
    <Grid container justifyContent="center">
      <Grid
        item
        xs={12}
        md={8}
        lg={6}
        sx={{ backgroundColor: "#ffffff", padding: 1, borderRadius: "10px" }}
      >
        <TextField
          id="search"
          type="search"
          label="Buscar una barbería..."
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton onClick={handleSearchClick}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
}
