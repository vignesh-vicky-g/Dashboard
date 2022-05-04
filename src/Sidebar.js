import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import AvTimerIcon from "@mui/icons-material/AvTimer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const [appOpen, setAppOpen] = React.useState(false);
  const [appinsideCalls, setAppinsedeCaslls] = useState(false);
  const [empOpen, setEmpOpen] = React.useState(false);
  const [projectOpen, setProjectOpen] = React.useState(false);
  const [salesOpen, setSalesOpen] = React.useState(false);
  const [accOpen, setAccOpen] = React.useState(false);
  const [payrollOpen, setPayrollOpen] = React.useState(false);
  const [reports, setReportsOpen] = React.useState(false);

  const Dashboard = () => {
    setOpen(!open);
  };
  const Apps = () => {
    setAppOpen(!appOpen);
  };
  const Employees = () => {
    setEmpOpen(!empOpen);
  };
  const Projects = () => {
    setProjectOpen(!projectOpen);
  };
  const Sales = () => {
    setSalesOpen(!salesOpen);
  };
  const Accounting = () => {
    setAccOpen(!accOpen);
  };
  const Payroll = () => {
    setPayrollOpen(!payrollOpen);
  };
  const Reports = () => {
    setReportsOpen(!reports);
  };

  return (
    <Box
    //   bgcolor="green"
      flex={3}
      //   p={2}
      //   sx={{ display: { xs: "none", sm: "block" } }}
    >
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "gray" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader sx={{ bgcolor: "gray" }} component="div" id="nested-list-subheader">
            Main
          </ListSubheader>
        }
      >
        <ListItemButton onClick={Dashboard}>
          <ListItemIcon>
            <AvTimerIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 10 }}>
          <Link to="/"><ListItemText primary="Admin Dashboard"/></Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 10 }}>
            <Link to="/EmployeeDashboard"><ListItemText primary="Empoloyees Dashboard" /></Link>
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={Apps}>
          <ListItemIcon>
            <AppRegistrationOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Apps" />
          {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ListItemButton>
        <Collapse in={appOpen} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Chat" />
          </ListItemButton>

          <ListItemButton onClick={() => setAppinsedeCaslls(!appinsideCalls)}>
            <ListItemIcon>{/* <AppRegistrationOutlinedIcon /> */}</ListItemIcon>
            <ListItemText sx={{ pl: 1}} primary="Calls" />
            {appinsideCalls ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </ListItemButton>
          <Collapse in={appinsideCalls} timeout="auto" unmountOnExit>
            <ListItemButton sx={{ pl: 11 }}>
              <ListItemText primary="Voice Call" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 11 }}>
              <ListItemText primary="Video Call" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 11 }}>
              <ListItemText primary="Outgoing Call" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 11 }}>
              <ListItemText primary="Incoming Call" />
            </ListItemButton>
          </Collapse>

          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Calender" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Contacts" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Email" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="File Manager" />
          </ListItemButton>

        </Collapse>
        <ListItemButton onClick={Employees}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Employees" />
          {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ListItemButton>
        <Collapse in={empOpen} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Admin Dashboard" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <FamilyRestroomIcon />
          </ListItemIcon>
          <ListItemText primary="Clients" />
        </ListItemButton>

        <ListItemButton onClick={Projects}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
          {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ListItemButton>
        <Collapse in={projectOpen} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Admin Dashboard" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </Collapse>
        <ListItemButton>
          <ListItemIcon>
            <FamilyRestroomIcon />
          </ListItemIcon>
          <ListItemText primary="Leads" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <FamilyRestroomIcon />
          </ListItemIcon>
          <ListItemText primary="Tickets" />
        </ListItemButton>
      </List>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "#e4e4e4" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            HR
          </ListSubheader>
        }
      >
        <ListItemButton onClick={Sales}>
          <ListItemIcon>
            <AvTimerIcon />
          </ListItemIcon>
          <ListItemText primary="Sales" />
          {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Admin Dashboard" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="stard" />
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={Accounting}>
          <ListItemIcon>
            <AppRegistrationOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Accounting" />
          {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ListItemButton>
        <Collapse in={accOpen} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Admin Dashboard" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={Payroll}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Payroll" />
          {payrollOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ListItemButton>
        <Collapse in={payrollOpen} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Admin Dashboard" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <FamilyRestroomIcon />
          </ListItemIcon>
          <ListItemText primary="Policies" />
        </ListItemButton>

        <ListItemButton onClick={Reports}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
          {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ListItemButton>
        <Collapse in={reports} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Admin Dashboard" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </Collapse>
      </List>
    </Box>
  );
}
