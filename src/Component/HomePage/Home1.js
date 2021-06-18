import React, { useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography,Card,CardContent} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {createPost}  from '../Config/Config'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));




export default function Home1() {
    const [datafire,setDataFire]=React.useState()
  const classes = useStyles();
  const history = useHistory()


console.log('this is the data',datafire)


  useEffect(()=>{
  



    async function getData(){

      
    await createPost.on("value",(data)=>{
      let give = data.val()
    let keys=Object.keys(data.val())
    if(give){
      var arr=[]
      for(var t=0; t<keys.length; t++){
        let key=keys[t]
        let data=give[key]
        let object={
          key:key,data:data}
          arr.push(object)
          setDataFire(arr)
        }
      }
      
    
  })
  }
  getData()
  },[datafire])

  function Create(){
    
     history.push('/Signin')
  }


  function joinBookings(){
    
     history.push('/BookingDetails')
  }  



  function joinAdmin(){
    
     history.push('/JoinAdmin')
  }  

  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hotel Management System
          </Typography>
          <Button onClick={Create} color="inherit">SignIn</Button>
          <Button onClick={joinBookings} color="inherit">Bookings</Button>
          <Button onClick={joinAdmin} color="inherit">Admin</Button>
        </Toolbar>
      </AppBar>
<img src="Images/image3.jpg" alt="image3" style={{width:1500}}/>


<div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
      {datafire?
        datafire.map((val,ind)=>(
          <Card  style={{width:250,marginTop:20,marginLeft:10,display:'flex',height:300,backgroundColor:'cyan'}} >
            <CardContent>
            <img src={val.data.img} style={{width:210,height:150}} alt="Hotel Image"/>
              <Typography>{val.data.nameCity}</Typography>
              <Typography>{val.data.detail}</Typography>
              <Button  >Book Now</Button>
            </CardContent>
          </Card>
        )):<h2>LOADING</h2>
        }


</div>




<div class="footer ">



<div class="row">
<div class="col-12 text-white text-center my-4 ">
   User Helpful
</div>
</div>
<div class="row">
  <div class="col-12  space text-center  fo text-light">
  <p> SignIn Bookings Admin </p>
  </div>
  </div>
  <div class="row">
    <div class="col-12  text-center my-3">
  <span class="text-light">&copy;</span><span class="font text-light">2017,Copyrights Reserved by Hotel Management</span>
    </div>
    </div>

</div>

    </div>
  );
}
