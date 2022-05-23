import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid,
  LinearProgress,
  linearProgressClasses,
  List,
  ListItemText,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Img from '../../imges/notification.jpg';
import styled from '@emotion/styled';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    // borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: 'light' ? 'gray' : 800
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: 'light' ? '#55ce63' : '#55ce63',
    },
    marginBottom: 10
  }));

const currencies = [
  {
    value: 'EUR',
    label: 'Select Roll',
  },
  {
    value: 'sd',
    label: ' Web Developer',
  },
  {
    value: 'BTC',
    label: 'Web Designer',
  },
  {
    value: 'JPY',
    label: 'Android Developer',
  },
  {
    value: 'JPY',
    label: 'Ios Developer',
  },
];

export default function Project() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box flex={10} sx={{ bgcolor: '#e0dfdf' }} p={2}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box>
              <h1 style={{ margin: 0 }}>Project</h1>
              <List>
                <ListItemText
                  sx={{ display: 'flex' }}
                  primary={<Typography>Dashboard / </Typography>}
                  secondary={
                    <Typography sx={{ color: 'e0dfdf' }}> Project</Typography>
                  }
                />
              </List>
              {/* <Typography variant='h6' primary="Dashboard /" secondary=" Project"></Typography> */}
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ justifyContent: 'center' }}>
              <AppsIcon sx={{ m: 1, fontSize: 30 }} />
              <MenuIcon sx={{ m: 1, fontSize: 30 }} />
              <Button
                sx={{ mb: 4, borderRadius: 5 }}
                variant="contained"
                startIcon={<AddIcon />}
              >
                Create Project
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* ------------------------------------------- */}

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs>
            <Paper elevation={0}>
              <TextField
                sx={{ outline: 'none', mt: 1, mb: 1, color: '#000' }}
                label="Project Name"
                variant="standard"
              />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper elevation={0}>
              <TextField
                sx={{ outline: 'none', m: 1, color: '#000' }}
                label="Employee Name"
                variant="standard"
              />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper elevation={0}>
              <div>
                <TextField
                  id="filled-select-currency"
                  select
                  label="Designation"
                  value={currency}
                  onChange={handleChange}
                  sx={{ width: '220px', m: 1, height: '50px' }}
                  variant="filled"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper elevation={0}>
              <Button
                color="success"
                sx={{ width: 220, height: 65 }}
                variant="contained"
              >
                Search
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* --------------------------------------------- */}

      <Box sx={{ flexGrow: 1, mt: 3 }}>
        <Grid container spacing={1}>
          <Grid item xs>
            <Box sx={{ maxWidth: 220 }}>
              <Paper evevation={0}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '15px 5px 0',
                  }}
                >
                  <div>
                    <h4 style={{ margin: 0 }}>Office Management</h4>
                    <span style={{ fontSize: '12px' }}>
                      1 open tasks, 9 tasks completed
                    </span>
                  </div>
                  <MoreVertIcon />
                </div>
                <div style={{ margin: '0px 5px' }}>
                  <p style={{ color: 'gray' }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. When an unknown printer took a galley
                    of type and scrambled it...
                  </p>
                  <h3 style={{ margin: '10px 0px 5px' }}>Deadline:</h3>
                  <span style={{ color: 'gray' }}>17 Apr 2019</span>
                  <h3 style={{ margin: '10px 0px' }}>Project Leader :</h3>
                  <Avatar alt="Remy Sharp" src={Img} />
                  <h3 style={{ margin: '10px 0px' }}>Team :</h3>
                  <AvatarGroup total={19} sx={{ mr: 2 }}>
                    <Avatar alt="Remy Sharp" src={Img} />
                    <Avatar alt="Travis Howard" src={Img} />
                    <Avatar alt="Travis Howard" src={Img} />
                    <Avatar alt="Travis Howard" src={Img} />
                  </AvatarGroup>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <h5>Progress</h5>
                    <h5 style={{ color: '#55ce63' }}>40%</h5>
                  </div>
                  <Box sx={{pb: 2, m: 0}}>
                  <BorderLinearProgress variant="determinate" value={40} />
                  {/* <p style={{magin: '10px 0px 0px 0px'}}>a</p> */}
                  </Box>
                </div>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs>
          <Paper evevation={0}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '15px 5px 0',
                  }}
                >
                  <div>
                    <h4 style={{ margin: 0 }}>Office Management</h4>
                    <span style={{ fontSize: '12px' }}>
                      1 open tasks, 9 tasks completed
                    </span>
                  </div>
                  <MoreVertIcon />
                </div>
                <div style={{ margin: '0px 5px' }}>
                  <p style={{ color: 'gray' }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. When an unknown printer took a galley
                    of type and scrambled it...
                  </p>
                  <h3 style={{ margin: '10px 0px 5px' }}>Deadline:</h3>
                  <span style={{ color: 'gray' }}>17 Apr 2019</span>
                  <h3 style={{ margin: '10px 0px' }}>Project Leader :</h3>
                  <Avatar alt="Remy Sharp" src={Img} />
                  <h3 style={{ margin: '10px 0px' }}>Team :</h3>
                  <AvatarGroup total={19} sx={{ mr: 2 }}>
                    <Avatar alt="Remy Sharp" src={Img} />
                    <Avatar alt="Travis Howard" src={Img} />
                    <Avatar alt="Travis Howard" src={Img} />
                    <Avatar alt="Travis Howard" src={Img} />
                  </AvatarGroup>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <h5>Progress</h5>
                    <h5 style={{ color: '#55ce63' }}>40%</h5>
                  </div>
                  <Box sx={{pb: 2, m: 0}}>
                  <BorderLinearProgress variant="determinate" value={40} />
                  {/* <p style={{magin: '10px 0px 0px 0px'}}>a</p> */}
                  </Box>
                </div>
              </Paper>
          </Grid>
          <Grid item xs>
          <Paper evevation={0}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '15px 5px 0',
                  }}
                >
                  <div>
                    <h4 style={{ margin: 0 }}>Office Management</h4>
                    <span style={{ fontSize: '12px' }}>
                      1 open tasks, 9 tasks completed
                    </span>
                  </div>
                  <MoreVertIcon />
                </div>
                <div style={{ margin: '0px 5px' }}>
                  <p style={{ color: 'gray' }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. When an unknown printer took a galley
                    of type and scrambled it...
                  </p>
                  <h3 style={{ margin: '10px 0px 5px' }}>Deadline:</h3>
                  <span style={{ color: 'gray' }}>17 Apr 2019</span>
                  <h3 style={{ margin: '10px 0px' }}>Project Leader :</h3>
                  <Avatar alt="Remy Sharp" src={Img} />
                  <h3 style={{ margin: '10px 0px' }}>Team :</h3>
                  <AvatarGroup total={19} sx={{ mr: 2 }}>
                    <Avatar alt="Remy Sharp" src={Img} />
                    <Avatar alt="Travis Howard" src={Img} />
                    <Avatar alt="Travis Howard" src={Img} />
                    <Avatar alt="Travis Howard" src={Img} />
                  </AvatarGroup>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <h5>Progress</h5>
                    <h5 style={{ color: '#55ce63' }}>40%</h5>
                  </div>
                  <Box sx={{pb: 2, m: 0}}>
                  <BorderLinearProgress variant="determinate" value={40} />
                  {/* <p style={{magin: '10px 0px 0px 0px'}}>a</p> */}
                  </Box>
                </div>
              </Paper>
          </Grid>
          <Grid item xs>
          <Paper evevation={0}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '15px 5px 0',
                  }}
                >
                  <div>
                    <h4 style={{ margin: 0 }}>Office Management</h4>
                    <span style={{ fontSize: '12px' }}>
                      1 open tasks, 9 tasks completed
                    </span>
                  </div>
                  <MoreVertIcon />
                </div>
                <div style={{ margin: '0px 5px' }}>
                  <p style={{ color: 'gray' }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. When an unknown printer took a galley
                    of type and scrambled it...
                  </p>
                  <h3 style={{ margin: '10px 0px 5px' }}>Deadline:</h3>
                  <span style={{ color: 'gray' }}>17 Apr 2019</span>
                  <h3 style={{ margin: '10px 0px' }}>Project Leader :</h3>
                  <Avatar alt="Remy Sharp" src={Img} />
                  <h3 style={{ margin: '10px 0px' }}>Team :</h3>
                  <AvatarGroup total={19} sx={{ mr: 2 }}>
                    <Avatar alt="Remy Sharp" src={Img} />
                    <Avatar alt="Travis Howard" src={Img} />
                    <Avatar alt="Travis Howard" src={Img} />
                    <Avatar alt="Travis Howard" src={Img} />
                  </AvatarGroup>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <h5>Progress</h5>
                    <h5 style={{ color: '#55ce63' }}>40%</h5>
                  </div>
                  <Box sx={{pb: 2, m: 0}}>
                  <BorderLinearProgress variant="determinate" value={40} />
                  {/* <p style={{magin: '10px 0px 0px 0px'}}>a</p> */}
                  </Box>
                </div>
              </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
