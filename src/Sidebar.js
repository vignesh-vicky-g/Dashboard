import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader
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
      flex={2}
      //   p={2}
      //   sx={{ display: { xs: "none", sm: "block" } }}
      color="white"
    >
      <List
        sx={{ maxWidth: 360, bgcolor: "#434946", color: "white" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader sx={{ bgcolor: "#434946", color:"white" }} component="div" id="nested-list-subheader">
            Main
          </ListSubheader>
        }
      >
        <ListItemButton onClick={Dashboard}>
          <ListItemIcon >
            <AvTimerIcon style={{color:"white"}}/>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {open ? <ArrowDropDownIcon style={{color:"white"}}/> : <ArrowRightIcon style={{color:"white"}}/>}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 10 }}>
          <Link to="/"><ListItemText primary="Admin Dashboard"/></Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 10 }}>
            <Link to="/EmployeesDashboard"><ListItemText primary="Empoloyees Dashboard" /></Link>
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={Apps}>
          <ListItemIcon>
            <AppRegistrationOutlinedIcon style={{color:"white"}}/>
          </ListItemIcon>
          <ListItemText primary="Apps" />
          {appOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
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
            <AccountCircleIcon style={{color:"white"}}/>
          </ListItemIcon>
          <ListItemText primary="Employees" />
          {empOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ListItemButton >
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
            <FamilyRestroomIcon style={{color:"white"}}/>
          </ListItemIcon>
          <ListItemText primary="Clients" />
        </ListItemButton>

        <ListItemButton onClick={Projects}>
          <ListItemIcon>
            <AccountCircleIcon style={{color:"white"}}/>
          </ListItemIcon>
          <ListItemText primary="Projects" />
          {projectOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ListItemButton>
        <Collapse in={projectOpen} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 10 }}>
            <Link to="/Project"><ListItemText primary="Project" /></Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </Collapse>
        <ListItemButton>
          <ListItemIcon>
            <FamilyRestroomIcon style={{color:"white"}}/>
          </ListItemIcon>
          <ListItemText primary="Leads" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <FamilyRestroomIcon style={{color:"white"}}/>
          </ListItemIcon>
          <ListItemText primary="Tickets" />
        </ListItemButton>

          <ListSubheader sx={{ bgcolor: "#434946", color:"white" }} component="div" id="nested-list-subheader">
            HR
          </ListSubheader>
        
        <ListItemButton onClick={Sales}>
          <ListItemIcon>
            <AvTimerIcon style={{color:"white"}}/>
          </ListItemIcon>
          <ListItemText primary="Sales" />
          {salesOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ListItemButton>
        <Collapse in={salesOpen} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Admin Dashboard" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="stard" />
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={Accounting}>
          <ListItemIcon>
            <AppRegistrationOutlinedIcon style={{color:"white"}}/>
          </ListItemIcon>
          <ListItemText primary="Accounting" />
          {accOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
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
            <AccountCircleIcon style={{color:"white"}}/>
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
            <FamilyRestroomIcon style={{color:"white"}}/>
          </ListItemIcon>
          <ListItemText primary="Policies" />
        </ListItemButton>

        <ListItemButton onClick={Reports}>
          <ListItemIcon>
            <AccountCircleIcon style={{color:"white"}}/>
          </ListItemIcon>
          <ListItemText primary="Reports" />
          {reports ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
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
