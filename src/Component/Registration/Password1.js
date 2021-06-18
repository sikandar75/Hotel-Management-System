import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
// import {Redirect} from 'react-router-dom'
// import Data from './Data'
// import {BrowserRouter,Switch,Route} from 'react-router-dom'
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
    marginTop:15,
    marginLeft:60,
    width:'30ch',
    height:'8ch',
    backgroundColor:'#22b536',
    color:"white"
    
  }
}));

function Password1() {
  
  const classes = useStyles();
  const history = useHistory()
  const [email,Newemail] = useState('')
  const [password,NewPassword] = useState('')
      function EmailGet(e){
          Newemail(e.target.value)
      }
      
      function PasswordGet(e){
          NewPassword(e.target.value)
      }
       
      function loginAdmin(){
         history.push('/Admin')
      }


  return (
    <div className={classes.root}>
      
      
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

<Button onClick={loginAdmin} className={classes.text} variant="contained" color="primary" disableElevation >
      Login
    </Button>
  
    </div>
  );
}
export default Password1;