import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom'
import App from './App';
import AddDetails from "./Screens/AddDetails";
import DeleteDetails from './Screens/DeleteDetails';
import EditDetails from './Screens/EditDetails';
import Navbar from './Components/Navbar'
import Profile from './Screens/Profile';
import Login from './Components/Login';
import Signup from './Components/Signup';
import MiniDrawer from './Components/Drawer'

const AppRoutes = () => {

    const id = localStorage.getItem("id");
    

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
                <Route exact path="/drawer" element={<MiniDrawer />}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;
