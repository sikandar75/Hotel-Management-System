import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {bookPost}  from '../Config/Config'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function BookingDetails() {

const [namef,setnamef]=useState()
const [namel,setnamel]=useState()
const [email,setemail]=useState()
const [cnic,setcnic]=useState()
const [credit,setcredit]=useState()
const [mob,setmob]=useState()

function firstName(e){
  setnamef(e.target.value)
}

function lastName(e){
  setnamel(e.target.value)
}

function Email(e){
  setemail(e.target.value)
}

function Cnic(e){
  setcnic(e.target.value)
}

function Credit(e){
  setcredit(e.target.value)
}

function Mobile(e){
  setmob(e.target.value)
}



function clickBook1(){
  const book={
    namef,
    namel,
    email,
    cnic,
    credit,
    mob
    }
    bookPost.push(book)
}







  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Booking Details
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={firstName}
              />
              
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={Email}
              />
            </Grid>
         

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="CNIC"
                label="CNIC Number"
                name="CNIC "
                autoComplete="CNIC "
                onChange={Cnic}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Credit Card"
                label="Credit Card Number"
                name="Credit Card"
                autoComplete="Credit Card"
                onChange={Credit}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Phone Number"
                onChange={Mobile}
                label="Phone Number"
                name="Phone Number"
                autoComplete="Phone Number"
              />
            </Grid>





            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={clickBook1}
          >
            Submit
          </Button>
         
          <Grid container justify="flex-end">
            <Grid item>
             
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}