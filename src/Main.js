import {
  Box,
  Button,
  Container,
  Grid,
  LinearProgress,
  linearProgressClasses,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import Slider from "@mui/material/Slider";

import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

import styled from "@emotion/styled";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 3,
  margin: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "e6e6e6",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1a90ff'
  },
}));

const Tags = styled(Paper)(({ theme }) => ({
  border: "1px solid gray",
  margin: "20px 0",
  padding: 20,
  maxHeight: 560,
  // height: 560,
}));

const Tables = styled(Paper)(({ theme }) => ({
  border: "1px solid gray",
  margin: "20px 0",
  padding: 20,
  maxHeight: 360,
  maxWidth: 370,
}));

function invoiceCreateData(invoiceId, clients, dueDate, total, status) {
  return { invoiceId, clients, dueDate, total, status };
}
const invoiceRows = [
  invoiceCreateData("#INV-001", "Global Technologies", "11 Mar 2019", "$380", "Partially Paid"),
  invoiceCreateData("#INV-002", "Delta Infotech", "8 Feb 2019", "$500", "Paid"),
  invoiceCreateData("#INV-003", "Cream Inc", "23 Jan 2019", "$60", "Unpaid")
];
const invoiceBtn = ["warning", "success", "error"]

function paymentCreateData(invoiceId, clients, paymentType, paidDate, paidAmount) {
  return { invoiceId, clients, paymentType, paidDate, paidAmount };
}
const paymentRows = [
  paymentCreateData("#INV-001", "Global Technologies", "Paypal", "11 Mar 2019", "$380"),
  paymentCreateData("#INV-002", "Delta Infotech", "Paypal", "8 Feb 2019", "$500"),
  paymentCreateData("#INV-003", "Cream Inc", "Paypal", "23 Jan 2019", "$60")
];

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
                  <BorderLinearProgress variant="determinate" value={70} />
                </Box>
                <Box sx={{ border: "1px solid gray", px: 2, pt: 1, my: 2 }}>
                  <Box display="flex">
                    <Grid xs={9}>Today Leave</Grid>
                    <Grid xs={3}>4/65</Grid>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={70} />
                </Box>
                <Box sx={{ border: "1px solid gray", px: 2, pt: 1, my: 2 }}>
                  <Box display="flex">
                    <Grid xs={9}>Today Leave</Grid>
                    <Grid xs={3}>4/65</Grid>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={70} />
                </Box>
                <Box sx={{ border: "1px solid gray", px: 2, pt: 1, my: 2 }}>
                  <Box display="flex">
                    <Grid xs={9}>Today Leave</Grid>
                    <Grid xs={3}>4/65</Grid>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={70} />
                </Box>
                <Box sx={{ border: "1px solid gray", px: 2, pt: 1, my: 2 }}>
                  <Box display="flex">
                    <Grid xs={9}>Today Leave</Grid>
                    <Grid xs={3}>4/65</Grid>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={70} />
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
                    <Grid xs>
                      <span style={{ fontSize: 15 }}>Total Tasks</span>
                      <Typography variant="h6">360</Typography>
                    </Grid>
                    <Grid xs>
                      <span style={{ fontSize: 15 }}>Total Tasks</span>
                      <Typography variant="h6">360</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Tags>
          </Grid>
          <Grid item xs>
            <Tags>xs</Tags>
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
                      <TableCell align="">Clients</TableCell>
                      <TableCell align="">Due Date</TableCell>
                      <TableCell align="">Total</TableCell>
                      <TableCell align="">Status</TableCell>
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
                        <TableCell align="">{row.clients}</TableCell>
                        <TableCell align="">{row.dueDate}</TableCell>
                        <TableCell align="">{row.total}</TableCell>
                        <TableCell><span color={invoiceBtn[1]}>{row.status}</span></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{textAlign: 'center'}}>
                <Button sx={{color: "gray"}}>View all Invoices</Button>
              </Box>
            </Tables>
          </Grid>
          <Grid item xs>
            <Tables>
              <Typography variant="h6">Payments</Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, fontSize: 12}} aria-label="simple table">
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
                        key={row.name}
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
              <Box sx={{textAlign: 'center'}}>
                <Button sx={{color: "gray"}}>View all Payments</Button>
              </Box>
              
            </Tables>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
