import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import App from './App';
import AddDetails from "./Screens/AddDetails";
import DeleteDetails from './Screens/DeleteDetails';
import Profile from './Screens/Profile';
import Login from './Components/Login';
import Signup from './Components/Signup';
import TemporaryDrawer from './Components/Drawer';

const AppRoutes = () => {

    // const id = localStorage.getItem("id");
    

    return(
        <Router>
            <Routes>
                <Route exact path='/' element= {<App/>} />
                <Route path='/addDetails/:id' element=  {<AddDetails />} />
                <Route exact path='/addDetails/' element=  {<AddDetails />} />
                <Route exact path='/deleteDetails' element=  {<DeleteDetails />} />
                {/* <Route path='/editDetails/:id' element={<EditDetails />} /> */}
                <Route exact path="/profile" element=  {<Profile />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/drawer" element={<TemporaryDrawer />}/>
                
                {/* <ProtectedRoutes path='/profile' element={<Profile />} auth={false}/> */}
            </Routes>
        </Router>
    )
}

export default AppRoutes;
