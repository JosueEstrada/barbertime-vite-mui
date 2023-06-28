import { Paper } from "@mui/material";

export default function Product() {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
      }}
    >
      <h1>Product</h1>
    </Paper>
  );
}
