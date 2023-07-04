import Navbar from "./components/navbar/Navbar.jsx";
import { AppRoutes } from "./routes/AppRoutes.jsx";
import { navArrayLinks } from "./components/navbar/navArrayLinks.jsx";
import Footer from "./components/Footer.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Navbar navArrayLinks={navArrayLinks} />
      <AppRoutes />
      <Footer />
    </LocalizationProvider>
  );
}
