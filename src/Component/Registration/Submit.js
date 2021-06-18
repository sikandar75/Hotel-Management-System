import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import {createPost,bookPost}  from '../Config/Config'

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

 function Submit() {
  const history = useHistory()
  const [datafire,setDataFire]=React.useState()
   const [name,setHotelNameCity] = useState('')
   const [detail,setDetail] = useState('')
   const [img,setImage] = useState('')
  
  

  const classes = useStyles();
  

  useEffect(()=>{
  



    async function getData(){

      
    await bookPost.on("value",(data)=>{
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











  




const saveData=()=>{
  const crePost={
    name,
    detail,
    img
  }


  createPost.push(crePost)
history.push('/Home1')

}
  return (
    <>

<form>
<div className={classes.root}>
  
 
    <h1>Admin Panel</h1>  
    
     
      
       <OutlinedInput
       onChange={e=>setHotelNameCity(e.target.value)}
      placeholder="HotelName , City"
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

<OutlinedInput
       onChange={e=>setDetail(e.target.value)}
      placeholder="Deatils"
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

<OutlinedInput
       onChange={e=>setImage(e.target.value)}
      placeholder="Image Url"
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








<br/>


<Button onClick={saveData} className={classes.btn} variant="contained" color="white" >
  CREATE POST
</Button> 



 </div>
</form> 















<h1>Booking List</h1>

    <div style={{width:900,height:600,overflow:'auto'}}>
  {
    datafire?
    datafire.map((val,ind)=>(
      <table style={{border:'1px solid black'}}>
        <tr>
          <td className="col-2" >namef</td>
          <td className="col-2">namel</td>
          <td className="col-2">email</td>
          <td className="col-2">cnic</td>
          <td className="col-2">credit</td>
          <td className="col-2">mob</td>
        
        </tr>
        <tr>
          <td>{val.data.namef}</td>
          <td>{val.data.namel}</td>
          <td>{val.data.email}</td>
          <td>{val.data.cnic}</td>
          <td>{val.data.credit}</td>
          <td>{val.data.mob}</td>
        </tr>
      </table>
    )):<h2>LOADING...</h2>
  }

</div>

</>










  );
}
export default Submit;