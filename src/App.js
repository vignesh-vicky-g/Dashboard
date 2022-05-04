import { Box, Stack } from "@mui/material";
import Main from "./Main";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import EmployeesDashboard from "./components/Dashboard/EmployeesDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./Test";
function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={0} justifyContent="space-between">
          <Sidebar />
          {/* <Main /> */}
          <Routes>
            <Route excet path="" element={<Main />} />
            <Route
              path="/EmployeesDashboard"
              element={<EmployeesDashboard />}
            />
          </Routes>
        </Stack>
      </Box>
    </BrowserRouter>
  );
}

export default App;
