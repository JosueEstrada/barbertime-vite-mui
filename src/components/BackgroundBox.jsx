import { Box } from "@mui/material";
import bgImage from "../assets/img/bgImage.jpg";
export default function BackgroundBox({ children }) {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
      // display="flex"
      // flexDirection="column"
      //alignItems="center"
      // justifyContent="center"
    >
      {children}
    </Box>
  );
}
