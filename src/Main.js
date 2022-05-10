import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  LinearProgress,
  linearProgressClasses,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";

import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import styled from "@emotion/styled";

import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  BarElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  BarElement
);

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 3,
  margin: "10px 3px 10px",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "e6e6e6",
  },
}));

const Tags = styled(Paper)(({ theme }) => ({
  border: "1px solid #e4e4e4",
  margin: "20px 0",
  padding: 20,
  maxHeight: 560,
  // height: 560,
}));

const Graph = styled(Paper)(({ theme }) => ({
  border: "1px solid #e4e4e4",
  margin: "20px 0",
  padding: 20,
  maxHeight: 660,
}));

const Tables = styled(Paper)(({ theme }) => ({
  border: "1px solid #e4e4e4",
  margin: "20px 0",
  padding: 20,
  maxHeight: 360,
  maxWidth: 370,
  borderRadius: 2,
}));
const Tables1 = styled(Paper)(({ theme }) => ({
  border: "1px solid #e4e4e4",
  margin: "20px 0",
  padding: 20,
  maxHeight: 560,
  maxWidth: 370,
  borderRadius: 2,
}));

function invoiceCreateData(invoiceId, clients, dueDate, total, status) {
  return { invoiceId, clients, dueDate, total, status };
}
const invoiceRows = [
  invoiceCreateData(
    "#INV-001",
    "Global Technologies",
    "11 Mar 2019",
    "$380",
    "Partially Paid"
  ),
  invoiceCreateData("#INV-002", "Delta Infotech", "8 Feb 2019", "$500", "Paid"),
  invoiceCreateData("#INV-003", "Cream Inc", "23 Jan 2019", "$60", "Unpaid"),
];
const invoiceBtn = ["warning", "success", "error"];

function paymentCreateData(
  invoiceId,
  clients,
  paymentType,
  paidDate,
  paidAmount
) {
  return { invoiceId, clients, paymentType, paidDate, paidAmount };
}
const paymentRows = [
  paymentCreateData(
    "#INV-001",
    "Global Technologies",
    "Paypal",
    "11 Mar 2019",
    "$380"
  ),
  paymentCreateData(
    "#INV-002",
    "Delta Infotech",
    "Paypal",
    "8 Feb 2019",
    "$500"
  ),
  paymentCreateData("#INV-003", "Cream Inc", "Paypal", "23 Jan 2019", "$60"),
];

function clientsCreateData(img, name, roll, email, status, action) {
  return { img, name, roll, email, status, action };
}
const clientsRows = [
  clientsCreateData(
    "img",
    "Barry Cuda",
    "CEO",
    "barrycuda@example.com",
    "Active"
  ),
  clientsCreateData(
    "img",
    "Barry Cuda",
    "CEO",
    "barrycuda@example.com",
    "Active"
  ),
  clientsCreateData(
    "img",
    "Barry Cuda",
    "CEO",
    "barrycuda@example.com",
    "Active"
  ),
  clientsCreateData(
    "img",
    "Barry Cuda",
    "CEO",
    "barrycuda@example.com",
    "Active"
  ),
  clientsCreateData(
    "img",
    "Barry Cuda",
    "CEO",
    "barrycuda@example.com",
    "Active"
  ),
];
const options = ["None", "Atria"];
const ITEM_HEIGHT = 45;

function projectCreateData(
  projectName,
  openTask,
  taskCompleted,
  progress,
  action
) {
  return { projectName, openTask, taskCompleted, progress, action };
}
const projectRows = [
  projectCreateData("Office Management", "1", "9", "75"),
  projectCreateData("Office Management", "1", "9", "75"),
  projectCreateData("Office Management", "1", "9", "75"),
  projectCreateData("Office Management", "1", "9", "75"),
  projectCreateData("Office Management", "1", "9", "75"),
];
export default function Main() {
  const [revenue] = useState({
    labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    datasets: [
      {
        label: "Revenue",
        data: [100, 75, 50, 75, 50, 75, 100],
        backgroundColor: ["#1976d2"],
      },
      {
        label: "Revenue",
        data: [90, 70, 30, 70, 30, 70, 90],
        backgroundColor: ["blue"],
      },
    ],
  });
  const [sales] = useState({
    labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    datasets: [
      {
        label: "",
        data: [50, 75, 50, 75, 50, 75, 100],
        backgroundColor: ["rgba(75, 192, 192, 0.6)"],
        borderColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "",
        data: [90, 80, 60, 80, 60, 80, 50],
        backgroundColor: ["blue"],
        borderColor: "blue",
      },
    ],
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };

  return (
    <Container flex={10} sx={{ bgcolor: "#e9ecef" }} p={2}>
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

      {/* ------------------------------------------- */}

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} sx={{ mb: 5, textAlign: "center" }}>
          <Grid item xs>
            <Graph>
              <h2>Total Revenue</h2>
              <Bar data={revenue} />
            </Graph>
          </Grid>
          <Grid item xs>
            <Graph>
              <h2>Sales Overviwe</h2>
              <Line data={sales} />
            </Graph>
          </Grid>
        </Grid>
      </Box>
      {/* ------------------------------------------------ */}

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} sx={{ bgcolor: "white" }}>
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
            <BorderLinearProgress variant="determinate" value={70} />
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
            <BorderLinearProgress variant="determinate" value={70} />
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
            <BorderLinearProgress variant="determinate" value={70} />
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
            <BorderLinearProgress variant="determinate" value={70} />
            <Typography variant="span">Previous Month $1,42,000</Typography>
          </Grid>
        </Grid>
      </Box>
      {/* ------------------------------------/\ */}

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Tags>
              <Box>
                <Typography variant="h6">Statistics</Typography>
                <Box sx={{ border: "1px solid gray", px: 2, pt: 1, my: 2 }}>
                  <Box display="flex">
                    <Grid xs={9}>Today Leave</Grid>
                    <Grid xs={3}>4/65</Grid>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={30} />
                </Box>
                <Box sx={{ border: "1px solid gray", px: 2, pt: 1, my: 2 }}>
                  <Box display="flex">
                    <Grid xs={9}>Pending Invoice</Grid>
                    <Grid xs={3}>15/92</Grid>
                  </Box>
                  <BorderLinearProgress
                    color="warning"
                    variant="determinate"
                    value={30}
                  />
                </Box>
                <Box sx={{ border: "1px solid gray", px: 2, pt: 1, my: 2 }}>
                  <Box display="flex">
                    <Grid xs={9}>Completed Projects</Grid>
                    <Grid xs={3}>85/112</Grid>
                  </Box>
                  <BorderLinearProgress
                    color="success"
                    variant="determinate"
                    value={70}
                  />
                </Box>
                <Box sx={{ border: "1px solid gray", px: 2, pt: 1, my: 2 }}>
                  <Box display="flex">
                    <Grid xs={9}>Open Tickets</Grid>
                    <Grid xs={3}>190/212</Grid>
                  </Box>
                  <BorderLinearProgress
                    color="error"
                    variant="determinate"
                    value={70}
                  />
                </Box>
                <Box sx={{ border: "1px solid gray", px: 2, pt: 1, my: 2 }}>
                  <Box display="flex">
                    <Grid xs={9}>Closed Tickets</Grid>
                    <Grid xs={3}>22/212</Grid>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={25} />
                </Box>
              </Box>
            </Tags>
          </Grid>
          <Grid item xs>
            <Tags>
              <Box>
                <Typography variant="h6">Task Statistics</Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid
                    container
                    spacing={3}
                    sx={{ textAlign: "center", mt: 2 }}
                  >
                    <Grid
                      xs
                      sx={{ m: 1, ml: 3, p: 1, border: 1, bgcolor: "#e4e4e4" }}
                    >
                      <span style={{ fontSize: 13 }}>Total Tasks</span>
                      <Typography variant="h6">360</Typography>
                    </Grid>
                    <Grid xs sx={{ m: 1, border: 1, p: 1, bgcolor: "#e4e4e4" }}>
                      <span style={{ fontSize: 13 }}>Overdue Tasks</span>
                      <Typography variant="h6">19</Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <div
                    style={{
                      display: "flex",
                      textAlign: "center",
                      borderRadius: "5px",
                      fontSize: 12,
                      margin: "10px 0",
                      color: "#ffffff",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "purple",
                        width: "30%",
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                      }}
                    >
                      30%
                    </div>
                    <div style={{ backgroundColor: "#fccf03", width: "22%" }}>
                      22%
                    </div>
                    <div style={{ backgroundColor: "green", width: "24%" }}>
                      24%
                    </div>
                    <div style={{ backgroundColor: "red", width: "21%" }}>
                      21%
                    </div>
                    <div
                      style={{
                        backgroundColor: "#1976d2",
                        width: "10%",
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                      }}
                    >
                      10%
                    </div>
                  </div>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={3} sx={{ m: 1, fontSize: 12 }}>
                    <Grid xs={10}>
                      <Radio checked style={{ color: "purple" }}></Radio>
                      <span>Completed Tasks</span>
                      <span style={{ marginLeft: 50 }}>116</span>
                      <Radio checked style={{ color: "#fccf03" }}></Radio>
                      <span>Inprogress Tasks</span>
                      <span style={{ marginLeft: 50 }}>115</span>
                      <Radio checked style={{ color: "green" }}></Radio>
                      <span>On Hold Tasks</span>
                      <span style={{ marginLeft: 70 }}>31</span>
                      <Radio checked style={{ color: "red" }}></Radio>
                      <span>Pending Tasks</span>
                      <span style={{ marginLeft: 70 }}>47</span>
                      <Radio checked style={{ color: "#1976d2" }}></Radio>
                      <span>Review Tasks</span>
                      <span style={{ marginLeft: 80 }}>5</span>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Tags>
          </Grid>
          <Grid item xs>
            <Tags>
              <Box>
                <Typography variant="h6">
                  Today Absent
                  <span style={{ fontSize: 17, color: "red", marginLeft: 12 }}>
                    5
                  </span>
                </Typography>
                <Box sx={{ flexGrow: 1, border: 1, px: 2, mt: 1 }}>
                  <Grid container spacing={3} sx={{ mt: 1 }}>
                    <Grid xs={12}>
                      <ListItem sx={{ display: "block" }}>
                        <ListItemAvatar>
                          <Avatar alt="R" />
                          <ListItemText>Martin Lewis</ListItemText>
                        </ListItemAvatar>
                        <Box sx={{ flexGrow: 2 }}>
                          <Grid
                            container
                            spacing={2}
                            sx={{ marginTop: "1px", marginLeft: "3px" }}
                          >
                            <Grid xs={8}>
                              <ListItemText
                                primary={
                                  <Typography
                                    sx={{ display: "block" }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                  >
                                    4 Sep 2019
                                  </Typography>
                                }
                                secondary="Leave Date"
                              />
                            </Grid>
                            <Grid xs={3}>
                              <p
                                style={{
                                  fontSize: 12,
                                  color: "red",
                                  bgcolor: "#f71031",
                                }}
                              >
                                Pending
                              </p>
                            </Grid>
                          </Grid>
                        </Box>
                      </ListItem>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, border: 1, px: 2, mt: 1 }}>
                  <Grid container spacing={3} sx={{ mt: 1 }}>
                    <Grid xs={12}>
                      <ListItem sx={{ display: "block" }}>
                        <ListItemAvatar>
                          <Avatar alt="R" />
                          <ListItemText>Martin Lewis</ListItemText>
                        </ListItemAvatar>
                        <Box sx={{ flexGrow: 2 }}>
                          <Grid
                            container
                            spacing={2}
                            sx={{ marginTop: "1px", marginLeft: "3px" }}
                          >
                            <Grid xs={8}>
                              <ListItemText
                                primary={
                                  <Typography
                                    sx={{ display: "block" }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                  >
                                    4 Sep 2019
                                  </Typography>
                                }
                                secondary="Leave Date"
                              />
                            </Grid>
                            <Grid xs={3}>
                              <p
                                style={{
                                  fontSize: 12,
                                  color: "green",
                                  bgcolor: "#f71031",
                                }}
                              >
                                Approved
                              </p>
                            </Grid>
                          </Grid>
                        </Box>
                      </ListItem>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Box sx={{ mt: 1, textAlign: "center" }}>
                <button>Load More</button>
              </Box>
            </Tags>
          </Grid>
        </Grid>
      </Box>

      {/* -------------------------------------- */}

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Tables>
              <Typography variant="h6">Invoices</Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Invoices ID</TableCell>
                      <TableCell>Clients</TableCell>
                      <TableCell>Due Date</TableCell>
                      <TableCell>Total</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {invoiceRows.map((row, i) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.invoiceId}
                        </TableCell>
                        <TableCell>{row.clients}</TableCell>
                        <TableCell>{row.dueDate}</TableCell>
                        <TableCell>{row.total}</TableCell>
                        <TableCell>
                          <span color={invoiceBtn[1]}>{row.status}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{ textAlign: "center" }}>
                <Button sx={{ color: "gray" }}>View all Invoices</Button>
              </Box>
            </Tables>
          </Grid>
          <Grid item xs>
            <Tables>
              <Typography variant="h6">Payments</Typography>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650, fontSize: 12 }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell>Calories</TableCell>
                      <TableCell>Fat&nbsp;(g)</TableCell>
                      <TableCell>Carbs&nbsp;(g)</TableCell>
                      <TableCell>Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paymentRows.map((row) => (
                      <TableRow
                        key={row.invoiceId}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.invoiceId}
                        </TableCell>
                        <TableCell>{row.clients}</TableCell>
                        <TableCell>{row.paymentType}</TableCell>
                        <TableCell>{row.paidDate}</TableCell>
                        <TableCell>{row.paidAmount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{ textAlign: "center" }}>
                <Button sx={{ color: "gray" }}>View all Payments</Button>
              </Box>
            </Tables>
          </Grid>
        </Grid>
      </Box>

      {/* ---------------------------------- */}

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Tables1>
              <Typography variant="h6">Clients</Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {clientsRows.map((row, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <Box sx={{ display: "flex" }}>
                            <Avatar src={row.img} sx={{ mt: 1 }}></Avatar>
                            <ListItemText
                              sx={{ ml: 1 }}
                              primary={row.name}
                              secondary={row.roll}
                            ></ListItemText>
                          </Box>
                        </TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell>
                          <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? "long-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                          >
                            <MoreVertIcon />
                          </IconButton>
                          <Menu
                            id="long-menu"
                            MenuListProps={{
                              "aria-labelledby": "long-button",
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                              style: {
                                width: "20ch",
                              },
                            }}
                          >
                            {options.map((option) => (
                              <MenuItem
                                key={option}
                                selected={option === "Pyxis"}
                                onClick={handleClose}
                              >
                                {option}
                              </MenuItem>
                            ))}
                          </Menu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{ textAlign: "center" }}>
                <Button sx={{ color: "gray" }}>View all Clients</Button>
              </Box>
            </Tables1>
          </Grid>
          <Grid item xs>
            <Tables1>
              <Typography variant="h6">React Projects</Typography>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650, fontSize: 12 }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Projects Name</TableCell>
                      <TableCell>Progress</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {projectRows.map((row, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <ListItemText
                            primary={row.projectName}
                            secondary={
                              row.openTask +
                              " Open Tasks," +
                              row.taskCompleted +
                              " Tasks Completed"
                            }
                          ></ListItemText>
                        </TableCell>
                        <TableCell>
                        <BorderLinearProgress variant="determinate" value={row.progress} />
                        </TableCell>
                        <TableCell>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? "long-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick1}
                          >
                            <MoreVertIcon />
                          </IconButton>
                          <Menu
                            id="long-menu"
                            MenuListProps={{
                              "aria-labelledby": "long-button",
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose1}
                            PaperProps={{
                              style: {
                                width: "20ch",
                              },
                            }}
                          >
                            {options.map((option) => (
                              <MenuItem
                                key={option}
                                selected={option === "Pyxis"}
                                onClick={handleClose1}
                              >
                                {option}
                              </MenuItem>
                            ))}
                          </Menu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{ textAlign: "center" }}>
                <Button sx={{ color: "gray" }}>View all Projects</Button>
              </Box>
            </Tables1>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
