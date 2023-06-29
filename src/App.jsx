import { Container } from "@mui/material";
import Navbar from "./components/navbar/Navbar.jsx";
import { AppRoutes } from "./routes/AppRoutes.jsx";
import { navArrayLinks } from "./components/navbar/navArrayLinks.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar navArrayLinks={navArrayLinks} />
      <AppRoutes />
      <Footer />
    </>
  );
}
