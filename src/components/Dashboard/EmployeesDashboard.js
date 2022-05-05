import {
  Avatar,
  AvatarGroup,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Button,
  ButtonBase,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Profile from "../../imges/notification.jpg";

import ExtensionIcon from "@mui/icons-material/Extension";
import WorkIcon from "@mui/icons-material/Work";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import styled from "@emotion/styled";

export default function EmployeesDashboard() {
  return (
    <Box flex={10} sx={{ bgcolor: "#e6e6e6" }} p={0}>
      <Box
        sx={{
          display: "flex",
          bgcolor: "white",
          m: 1,
          mt: 2,
          borderRadius: "10px",
        }}
      >
        <Box sx={{ m: 1 }}>
          <img src={Profile} width={60} />
        </Box>
        <Box sx={{ ml: 2, p: 2 }}>
          <Typography variant="h5">Welcome, Sundar Pichai</Typography>
          <Typography variant="span">Monday, 05 May 2022</Typography>
        </Box>
      </Box>

      <Container sx={{ mt: 4 }}>
        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box sx={{ mt: 2 }}>
                <Typography sx={{ mb: 2 }} variant="h5">
                  TODAY
                </Typography>
                <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    color: "red",
                    mb: 2,
                  }}
                >
                  <ListItem>
                    <ListItemIcon>
                      <ExtensionIcon style={{ color: "red" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h6">
                        Richard Miles is Off sick today
                      </Typography>
                    </ListItemText>
                    <ListItemAvatar>
                      <Avatar
                        style={{ border: "2px solid #bebebe" }}
                        src={Profile}
                      />
                    </ListItemAvatar>
                  </ListItem>
                </List>
                <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    mb: 2,
                  }}
                >
                  <ListItem>
                    <ListItemIcon>
                      <WorkIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h6">You are away today</Typography>
                    </ListItemText>
                    <ListItemAvatar>
                      <Avatar
                        style={{ border: "2px solid #bebebe" }}
                        src={Profile}
                      />
                    </ListItemAvatar>
                  </ListItem>
                </List>
                <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    mb: 2,
                  }}
                >
                  <ListItem>
                    <ListItemIcon>
                      <HomeWorkIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h6">
                        You are working from home today
                      </Typography>
                    </ListItemText>
                    <ListItemAvatar>
                      <Avatar
                        style={{ border: "2px solid #bebebe" }}
                        src={Profile}
                      />
                    </ListItemAvatar>
                  </ListItem>
                </List>
              </Box>
              {/* ------------------------ */}

              <Box sx={{ mt: 2 }}>
                <Typography sx={{ mb: 2 }} variant="h5">
                  TOMORROW
                </Typography>
                <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    mb: 2,
                  }}
                >
                  <ListItem>
                    <ListItemIcon>
                      <WorkIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h6">
                        2 people will be away tomorrow
                      </Typography>
                    </ListItemText>
                    <ListItemAvatar>
                      <AvatarGroup>
                        <Avatar
                          style={{ border: "2px solid #bebebe" }}
                          src={Profile}
                        />
                        <Avatar
                          style={{ border: "2px solid #bebebe" }}
                          src={Profile}
                        />
                      </AvatarGroup>
                    </ListItemAvatar>
                  </ListItem>
                </List>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography sx={{ mb: 2 }} variant="h5">
                  NEXT SEVEN DAYS
                </Typography>
                <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    mb: 2,
                  }}
                >
                  <ListItem>
                    <ListItemIcon>
                      <WorkIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h6">
                        2 peopele are going to be away
                      </Typography>
                    </ListItemText>
                    <ListItemAvatar>
                      <AvatarGroup>
                        <Avatar
                          style={{ border: "2px solid #bebebe" }}
                          src={Profile}
                        />
                        <Avatar
                          style={{ border: "2px solid #bebebe" }}
                          src={Profile}
                        />
                      </AvatarGroup>
                    </ListItemAvatar>
                  </ListItem>
                </List>
                <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    mb: 2,
                  }}
                >
                  <ListItem>
                    <ListItemIcon>
                      <AddModeratorIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h6">
                        Your first day is going to be on Tursday
                      </Typography>
                    </ListItemText>
                    <ListItemAvatar>
                      <Avatar
                        style={{ border: "2px solid #bebebe" }}
                        src={Profile}
                      />
                    </ListItemAvatar>
                  </ListItem>
                </List>
                <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    mb: 2,
                  }}
                >
                  <ListItem>
                    <ListItemIcon>
                      <CalendarMonthIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h6">
                        It's Spring Bank Holiday on Monday
                      </Typography>
                    </ListItemText>
                    <ListItemAvatar>
                      <Avatar
                        style={{ border: "2px solid #bebebe" }}
                        src={Profile}
                      />
                    </ListItemAvatar>
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={3} sx={{ml: 2}}>
              <Box sx={{ mt: 3 }}>
                <h5 sx={{ mb: 2 }}>Projects</h5>
                <Box
                  sx={{
                    textAlign: "center",
                    bgcolor: "white",
                    p: 2,
                    width: "100%",
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Grid item xs>
                      <Typography variant="h6">71</Typography>
                      <Box sx={{ fontSize: "12px", color: "gray"}}>TOTAL TASK</Box>
                    </Grid>
                    <Divider orientation="vertical" flexItem></Divider>
                    <Grid item xs>
                      <Typography variant="h6">14</Typography>
                      <Box sx={{ fontSize: "12px", color: "gray"}}>PENDING TASKS</Box>
                    </Grid>
                  </Box>
                  <Box sx={{ mt: 1 }}>
                    <Grid item xs>
                      <Typography variant="h6">2</Typography>
                      <Box sx={{ fontSize: "12px", color: "gray"}}>TOTAL PROJECTS</Box>
                    </Grid>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ mt: 3 }}>
                <h6 sx={{ mb: 2 }}>YOUR LEAVE</h6>
                <Box
                  sx={{
                    textAlign: "center",
                    bgcolor: "white",
                    p: 2,
                    width: "100%",
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Grid item xs>
                      <Typography variant="h6">4.5</Typography>
                      <Box sx={{ fontSize: "12px", color: "gray"}}>LEAVE TAKEN</Box>
                    </Grid>
                    <Divider orientation="vertical" flexItem></Divider>
                    <Grid item xs>
                      <Typography variant="h6">12</Typography>
                      <Box sx={{ fontSize: "12px", color: "gray"}}>REMAINING</Box>
                    </Grid>
                  </Box>
                  <Box sx={{ mt: 1 }}>
                    <Button variant="contained">Apply Leave</Button>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ mt: 3 }}>
                <h5 sx={{ mb: 2 }}>YOUR TIME OFF ALLOWANCE</h5>
                <Box
                  sx={{
                    textAlign: "center",
                    bgcolor: "white",
                    p: 2,
                    width: "100%",
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Grid item xs>
                      <Typography variant="h6">5.0 Hours</Typography>
                      <Box sx={{ fontSize: "12px", color: "gray"}}>APPROVED</Box>
                    </Grid>
                    <Divider orientation="vertical" flexItem></Divider>
                    <Grid item xs>
                      <Typography variant="h6">15 Hours</Typography>
                      <Box sx={{ fontSize: "12px", color: "gray"}}>REMAINING</Box>
                    </Grid>
                  </Box>
                  <Box sx={{ mt: 1 }}>
                    <Button variant="contained">Apply Time Off</Button>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ mt: 3 }}>
                <h5 sx={{ mb: 2 }}>UPCOMING HOLIDAY</h5>
                <Box
                  sx={{
                    textAlign: "center",
                    bgcolor: "white",
                    p: 2,
                    width: "100%",
                    borderRadius: 2,
                  }}
                >
                  <h5>Monday 20 May 2919 - Ramzon</h5>
                </Box>
              </Box>


                
            </Grid>
          </Grid>
        </Box>
        {/* -------------------------------- */}
      </Container>
    </Box>
  );
}
