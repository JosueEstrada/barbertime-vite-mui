import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

export default function PaginationButtons() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Stack spacing={2}>
        <Pagination count={10} showFirstButton showLastButton />
      </Stack>
    </Box>
  );
}
