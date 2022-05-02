import { Box, Stack } from "@mui/material";
import Main from "./Main";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={0} justifyContent="space-between">
        <Sidebar />
        <Main />
      </Stack>
    </Box>
  );
}

export default App;
