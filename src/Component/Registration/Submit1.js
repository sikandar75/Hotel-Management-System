import {fire} from '../Config/Config';
import {useHistory} from 'react-router-dom';
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '50ch',
  },
  email:{
width:'30ch',
marginLeft:15
  },
  input:{
    marginTop:15,
    marginLeft:15,
    width:'30ch'
  },
  text:{
    marginTop:15,
    marginLeft:120
  },
  btn:{
    marginTop:40,
    marginLeft:60,
    width:'20ch',
    height:'5ch',
    backgroundColor:'#22b536',
    color:"white",
    fontSize:20
  },
  tf:{
      width:'15ch',
      height:'10ch',
      marginLeft:15
  },
  ts:{
    width:'15ch',
    height:'10ch',
    marginLeft:30

  }
}));

 function Submit1() {
  const history = useHistory()
   const [firstName,Newfirstname] = useState('')
   const [lastName,Newlastname] = useState('')
   const [email,Newemail] = useState('')
  const [password,NewPassword] = useState('')
  
  function firstNameGet(e){
      Newfirstname(e.target.value)
  }
  
  function lastNameGet(e){
    Newlastname(e.target.value)
}
  function EmailGet(e){
      Newemail(e.target.value)
  }
  
  function PasswordGet(e){
      NewPassword(e.target.value)
  }
  function Submit(e){
      e.preventDefault()
      fire.auth().createUserWithEmailAndPassword(email, password)
      .then((result)=>{
        alert("user created");
        history.push('/Signin')
    })
     .catch((err)=>{
       alert("user is not created");
     })
  }
  const classes = useStyles();
  

  return (
      <form>
    <div className={classes.root}>
      
    <TextField id="outlined-basic" placeholder="First Name" value={firstName} onChange={firstNameGet} variant="outlined" className={classes.tf}/>
    <span>
    <TextField id="outlined-basic" placeholder="Last Name" value={lastName} onChange={lastNameGet} variant="outlined" className={classes.ts}/>
    </span>
          <OutlinedInput
          value={email} onChange={EmailGet}
          className={classes.email}
          placeholder="Email address"
            id="outlined-adornment-weight"

            endAdornment={<InputAdornment position="end"></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            labelWidth={0}
          />

        
          <OutlinedInput
          value={password} onChange={PasswordGet}
          placeholder="Password"
          className={classes.input}
            id="outlined-adornment-password"
           
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  
                  edge="end"
                >
                 
                </IconButton>
              </InputAdornment>
            }
            labelWidth={0}
          />


  
    <Button className={classes.btn} variant="contained" color="white" onClick={Submit}>
      Signup
    </Button>



    </div>
    </form>
  );
}
export default Submit1;