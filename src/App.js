import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom' 
import Signin from './Component/Registration/Signin'
import JoinAdmin from './Component/Registration/JoinAdmin'
import Signup from './Component/Registration/Signup'
import Admin from './Component/Registration/Admin'
import Home1 from './Component/HomePage/Home1'
// import Admin from './Component/AdminPage/Admin'
import BookingDetails from './Component/Bookings/BookingDetails'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Switch>
        
         <Route exact path="/" component={Home1}/>
         <Route  path="/Signin" component={Signin}/> 
         <Route  path="/Signup" component={Signup}/>
         <Route  path="/Admin" component={Admin}/>
         <Route  path="/JoinAdmin" component={JoinAdmin}/>
         {/* <Route path="/Data" component={AuthData}/> */}
         {/* <Route path="/Data"component={()=><Data auth={true}/>}/> */}
         <Route path="/BookingDetails" component={BookingDetails}/>
         
      
        
       </Switch>

  </BrowserRouter> 
     
    </div>
  );
}

export default App;
