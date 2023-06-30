import { Box } from "@mui/material";
import bgImage from "../assets/img/bgImage.jpg";
export default function BackgroundBox({ children }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
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
