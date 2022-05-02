import { Box, Typography } from "@mui/material";
import React from "react";

export default function Main() {
  return (
    <Box flex={10} sx={{bgcolor: "background.paper"}} p={2}>
      <Typography variant="h3">Welcome Admin!</Typography>
      <Typography variant="span">Dashboard</Typography>
    </Box>
  );
}
