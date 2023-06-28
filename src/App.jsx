import { Container } from "@mui/material";
import Product from "./components/Product.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

export default function App() {
  return (
    <Container>
      <Navbar />
      <Product />
    </Container>
  );
}
