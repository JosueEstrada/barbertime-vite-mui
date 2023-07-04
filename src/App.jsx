import Navbar from "./components/navbar/Navbar.jsx";
import { AppRoutes } from "./routes/AppRoutes.jsx";
import { navArrayLinks } from "./components/navbar/navArrayLinks.jsx";
import Footer from "./components/Footer.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AuthProvider } from "./context/AuthContext.jsx";

export default function App() {
  return (
    <AuthProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar navArrayLinks={navArrayLinks} />
        <AppRoutes />
        <Footer />
      </LocalizationProvider>
    </AuthProvider>
  );
}
