import { Link } from "react-router-dom";
import {AppBar,
Toolbar,
Typography,
Container,
Box,
} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
// import { AiFillFileAdd,AiOutlineLogout } from "react-icons/ai";
// import {CgProfile} from "react-icons/cg";
// import {SiGnuprivacyguard} from "react-icons/si";
import TemporaryDrawer from "./Drawer";


const useStyles = makeStyles((theme) => ({
  button:{
    color:"white",
    fontWeight:"600",
    fontSize:"16px",
    marginLeft:"40px"
  },
  appbar:{
    backgroundColor:"white"
  },
  logo:{
    color:"black",
    fontSize:"20px",
    marginRight:"30px",
    fontWeight:"bold",
  },
  logout:{
    cursor:"pointer"
  }
}));


const Navbar = (props) => {


  const classes = useStyles();
  // const id = localStorage.getItem("id")
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("id")
    navigate('/login')
    console.log("done")
  }


  return (
      <>
      <div style={{display:"flex"}}>
      <TemporaryDrawer />
      <Container>
        {/* <Box sx={{flexGrow:1}}> */}
          <AppBar position="static" className={classes.appbar}>
            <Container maxWidth="xl">
              <Toolbar disableGutters style={{display:"flex"}}>
                
                  <Link to='/' style={{textDecoration:"none"}}>
                    <Typography varinat='h4' className={classes.logo} >Employee Details</Typography>
                  </Link>
                  
                <Box sx={{flexGrow:1}} style={{display:"flex", justifyContent:"right"}}>
                  <Link to="/addDetails" style={{textDecoration:"none"}}>
                    <Typography variant="subtitle" className="nav_items" style={{display:"flex"}}>
                      {/* <AiFillFileAdd style={{width:"25px", height:"25px", marginRight:"5px"}}/> */}
                      Add Details
                    </Typography>
                  </Link>

                  <Link to="/profile" style={{textDecoration:"none"}}>
                    <Typography variant="subtitle" className="nav_items">
                      {/* <CgProfile style={{width:"25px", height:"25px", marginRight:"5px"}}/> */}
                      Profile</Typography>
                  </Link>
                  <Link to="/signup" style={{textDecoration:"none"}}>
                    <Typography variant="subtitle" className="nav_items">
                      {/* <SiGnuprivacyguard style={{width:"25px", height:"25px", marginRight:"5px"}}/> */}
                      Signup</Typography>
                  </Link>
                  <Typography variant="subtitle" className={classes.logout, "nav_items"} onClick={handleLogout}>
                    {/* <AiOutlineLogout style={{width:"25px", height:"25px", marginRight:"5px"}}/> */}
                    Logout</Typography>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        {/* </Box> */}
      </Container>
      </div>
    </>
    
  );
}


export default Navbar;