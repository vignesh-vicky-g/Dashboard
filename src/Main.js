import {
  Avatar,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
// import EmployeesDashboard from "./EmployeesDashboard";
import Slider from "@mui/material/Slider";

import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import { Chart } from "chart.js";

export default function Main() {
  return (
    <Container flex={10} sx={{ bgcolor: "#e6e6e6" }} p={2}>
      <h2>Welcome Admin!</h2>
      <p>Dashboard</p>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ m: 3, p: 1 }}
      >
        <Grid
          item
          xs
          sx={{
            bgcolor: "background.paper",
            margin: "0 20px",
            borderRadius: 1,
          }}
        >
          {/* <Typography>1</Typography> */}
          <List
            sx={{
              width: "80%",
              maxWidth: 0,
              bgcolor: "background.paper",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <WorkOutlineOutlinedIcon color="primary" fontSize="large" />
              </ListItemIcon>
              <ListItemText
                sx={{}}
                primary={<Typography>112</Typography>}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Projects
                    </Typography>
                    {/* {" — I'll be in your neighborhood doing errands this…"} */}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          xs
          sx={{
            bgcolor: "background.paper",
            margin: "0 20px",
            borderRadius: 1,
          }}
        >
          {/* <Typography>1</Typography> */}
          <List
            sx={{
              width: "80%",
              maxWidth: 0,
              bgcolor: "background.paper",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <MonetizationOnOutlinedIcon color="primary" fontSize="large" />
              </ListItemIcon>
              <ListItemText
                sx={{}}
                primary={<Typography>44</Typography>}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Clients
                    </Typography>
                    {/* {" — I'll be in your neighborhood doing errands this…"} */}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          xs
          sx={{
            bgcolor: "background.paper",
            margin: "0 20px",
            borderRadius: 1,
          }}
        >
          {/* <Typography>1</Typography> */}
          <List
            sx={{
              width: "80%",
              maxWidth: 0,
              bgcolor: "background.paper",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <DiamondOutlinedIcon color="primary" fontSize="large" />
              </ListItemIcon>
              <ListItemText
                sx={{}}
                primary={<Typography>37</Typography>}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Tasks
                    </Typography>
                    {/* {" — I'll be in your neighborhood doing errands this…"} */}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          xs
          sx={{
            bgcolor: "background.paper",
            margin: "0 20px",
            borderRadius: 1,
          }}
        >
          {/* <Typography>1</Typography> */}
          <List
            sx={{
              width: "80%",
              maxWidth: 0,
              bgcolor: "background.paper",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <ContactPageOutlinedIcon color="primary" fontSize="large" />
              </ListItemIcon>
              <ListItemText
                sx={{}}
                primary={<Typography>218</Typography>}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Employees
                    </Typography>
                    {/* {" — I'll be in your neighborhood doing errands this…"} */}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      {/* ------------------------------------------------ */}

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} sx={{bgcolor: "white"}}>
          <Grid xs={3} sx={{ border: "1px solid #e4e4e4", p: 1 }}>
            <Box>
              <Grid container rowSpacing={1} sx={{ pt: 2 }}>
                <Grid xs={9}>New Employees</Grid>
                <Grid xs={3}>
                  <Box sx={{ color: "green" }}>+10%</Box>
                </Grid>
              </Grid>
            </Box>
            <Typography variant="h5">10</Typography>
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              // valueLabelDisplay="fixed"
            />
            <Typography variant="span">Overall Employees 218</Typography>
          </Grid>
          <Grid xs={3} sx={{ border: "1px solid #e4e4e4", p: 1 }}>
            <Box>
              <Grid container rowSpacing={1} sx={{ pt: 2 }}>
                <Grid xs={9}>Earnings</Grid>
                <Grid xs={3}>
                  <Box sx={{ color: "green" }}>+12.5%</Box>
                </Grid>
              </Grid>
            </Box>
            <Typography variant="h5">$ 1,42,300</Typography>
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              // valueLabelDisplay="fixed"
            />
            <Typography variant="span">Previous Month $1,15,852</Typography>
          </Grid>
          <Grid xs={3} sx={{ border: "1px solid #e4e4e4", p: 1 }}>
            <Box>
              <Grid container rowSpacing={1} sx={{ pt: 2 }}>
                <Grid xs={9}>Expenses</Grid>
                <Grid xs={3}>
                  <Box sx={{ color: "red" }}>-2.8%</Box>
                </Grid>
              </Grid>
            </Box>
            <Typography variant="h5">$8,500</Typography>
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              // valueLabelDisplay="fixed"
            />
            <Typography variant="span">Previous Month $7,500</Typography>
          </Grid>
          <Grid xs={3} sx={{ border: "1px solid #e4e4e4", p: 1 }}>
            <Box>
              <Grid container rowSpacing={1} sx={{ pt: 2 }}>
                <Grid xs={9}>Profit</Grid>
                <Grid xs={3}>
                  <Box sx={{ color: "red" }}>-75%</Box>
                </Grid>
              </Grid>
            </Box>
            <Typography variant="h5">$ 1,12,000</Typography>
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              // valueLabelDisplay="fixed"
            />
            <Typography variant="span">Previous Month $1,42,000</Typography>
          </Grid>
        </Grid>
      </Box>
      {/* ------------------------------------/\ */}
    </Container>
  );
}
