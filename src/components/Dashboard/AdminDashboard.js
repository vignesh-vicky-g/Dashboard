import {
    Avatar,
    Box,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    Typography,
  } from "@mui/material";
  import React from "react";
  import EmployeesDashboard from "./EmployeesDashboard";
  
  import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
  import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
  import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
  import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
  import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
  
  export default function AdminDashboard() {
    return (

      <Box flex={10} sx={{ bgcolor: "#e0dfdf" }} p={2}>
        <Typography variant="h4">Welcome Admin!</Typography>
        <Typography variant="span">Dashboard</Typography>
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
              borderRadius: "15px",
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
                  sx={{ marginLeft: "50px" }}
                  primary={<Typography variant="h5">112</Typography>}
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
              borderRadius: "15px",
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
                  sx={{ marginLeft: "50px" }}
                  primary={<Typography variant="h5">44</Typography>}
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
              borderRadius: "15px",
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
                  sx={{ marginLeft: "50px" }}
                  primary={<Typography variant="h5">37</Typography>}
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
              borderRadius: "15px",
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
                  sx={{ marginLeft: "50px" }}
                  primary={<Typography variant="h5">218</Typography>}
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
      </Box>

  
      

    );
  }
  