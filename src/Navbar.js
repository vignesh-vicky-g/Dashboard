import styled from "@emotion/styled";
import NotificationsNoneIcon from "@mui/icons-material/Notifications";
import MessageRounded from "@mui/icons-material/MessageRounded";
import {
  AppBar,
  Avatar,
  Badge,
  Collapse,
  Divider,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, typography, width } from "@mui/system";
import React, { useState } from "react";
import Profile from "./imges/profile.png";
import Canada from "./imges/canada-flag.jpg";
import England from "./imges/england-flag.png";
import Japan from "./imges/japan-flag.png";
import Australia from "./imges/australia-flag.jpg";
import Notification from "./imges/notification.jpg";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  // width:"100px"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "1px 20px",
  color: "black",
  borderRadius: "25px",
  width: "30%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  //   [theme.breakpoints.up("sm")]:{
  //       display: "flex"
  //   }
}));

const MenuBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [popupMsg, setPopupMsg] = useState(false);
  const [notification, setNotification] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography>Logo</Typography>
        <Typography>CompanyName</Typography>
        <Search>
          <InputBase placeholder="Search here" />
        </Search>
        <Select label="Lang">
          <MenuItem>
            <img src={Canada} style={{ width: "40px" }} />
          </MenuItem>
          <MenuItem>
            {" "}
            <img src={England} style={{ width: "40px" }} />
          </MenuItem>
          <MenuItem>
            {" "}
            <img src={Australia} style={{ width: "40px" }} />
          </MenuItem>
          <MenuItem>
            {" "}
            <img src={Japan} style={{ width: "40px" }} />
          </MenuItem>
        </Select>
        <Icons>
          {/* -------------------------------------------------- */}

          <Badge
            badgeContent={8}
            color="error"
            onClick={(e) => setNotification(true)}
          >
            <NotificationsNoneIcon />
          </Badge>
          <Menu
            sx={{ height: "auto" }}
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={notification}
            onClose={(e) => setNotification(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={Notification} />
                  </ListItemAvatar>
                </ListItem>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary = {
                    <Typography variant="span">4 min ago</Typography>
                  }
                />
                <Divider variant="inset" component="li" />

                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={Notification} />
                  </ListItemAvatar>
                </ListItem>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary = {
                    <Typography variant="span">4 min ago</Typography>
                  }
                />
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={Notification} />
                  </ListItemAvatar>
                </ListItem>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary = {
                    <Typography variant="span">4 min ago</Typography>
                  }
                />
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={Notification} />
                  </ListItemAvatar>
                </ListItem>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary = {
                    <Typography variant="span">4 min ago</Typography>
                  }
                />
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={Notification} />
                  </ListItemAvatar>
                </ListItem>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary = {
                    <Typography variant="span">4 min ago</Typography>
                  }
                />
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={Notification} />
                  </ListItemAvatar>
                </ListItem>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary = {
                    <Typography variant="span">4 min ago</Typography>
                  }
                />
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={Notification} />
                  </ListItemAvatar>
                </ListItem>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary = {
                    <Typography variant="span">4 min ago</Typography>
                  }
                />
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={Notification} />
                  </ListItemAvatar>
                </ListItem>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary = {
                    <Typography variant="span">4 min ago</Typography>
                  }
                />
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={Notification} />
                  </ListItemAvatar>
                </ListItem>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary = {
                    <Typography variant="span">4 min ago</Typography>
                  }
                />
                <Divider variant="inset" component="li" />
                
              </List>
            </MenuItem>
          </Menu>

          <Badge
            badgeContent={3}
            color="error"
            onClick={(e) => setPopupMsg(true)}
          >
            <MessageRounded />
          </Badge>

          <Menu
            sx={{ height: "auto" }}
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={popupMsg}
            onClose={(e) => setPopupMsg(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={Notification} />
                  </ListItemAvatar>
                  <br></br>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Travis Howard" src={Notification} />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Summer BBQ"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src={Notification} />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Oui Oui"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Sandra Adams
                        </Typography>
                        {" — Do you have Paris recommendations? Have you ever…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </MenuItem>
          </Menu>

          {/* ----------------------------------------------------------- */}
          {/* <Badge
            badgeContent={3}
            color="error"
            onClick={true}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <NotificationsNoneIcon />
          </Badge>
          <Collapse in={true} timeout="auto" unmountOnExit>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={Notification} />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src={Notification} />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src={Notification} />
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Sandra Adams
                      </Typography>
                      {" — Do you have Paris recommendations? Have you ever…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Collapse> */}

          <Avatar sx={{ width: 30, height: 30 }} alt="R" src={Profile} />
          <Typography variant="span" onClick={(e) => setOpen(true)}>
            Admin
          </Typography>
          {/* <MenuBox>
          <Avatar sx={{ width: 30, height: 30 }} alt="R" src={Profile} />
          </MenuBox> */}
        </Icons>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
