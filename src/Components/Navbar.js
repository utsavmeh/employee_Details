import { Link } from "react-router-dom";
import {AppBar,
Toolbar,
Typography,
Container,
Avatar,
Button,
Box,
} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import { AiFillFileAdd,AiOutlineLogout } from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import {SiGnuprivacyguard} from "react-icons/si";
import TemporaryDrawer from "./Drawer";


const useStyles = makeStyles((theme) => ({
  button:{
    color:"white",
    fontWeight:"600",
    fontSize:"16px",
    marginLeft:"40px"
  },
  appbar:{
    backgroundColor:"#7694D9"
  },
  logo:{
    // color:"#800000",
    color:"white",
    fontSize:"20px",
    marginRight:"30px",
    fontWeight:"bold",
  },
  logout:{
    cursor:"pointer"
  }
}));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));


const Navbar = (props) => {


  const classes = useStyles();
  const id = localStorage.getItem("id")
  const navigate = useNavigate();


  // const Search = styled('div')(({ theme }) => ({
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing(1),
  //     width: 'auto',
  //   },
  // }));

  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: 'inherit',
  //   '& .MuiInputBase-input': {
  //     padding: theme.spacing(1, 1, 1, 1),
      
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create('width'),
  //     width: '100%',
  //     [theme.breakpoints.up('sm')]: {
  //       width: '12ch',
  //       '&:focus': {
  //         width: '20ch',
  //       },
  //     },
  //   },
  // }));

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
        <Box sx={{flexGrow:1}}>
          <AppBar position="static" className={classes.appbar}>
            <Container maxWidth="xl">
              <Toolbar disableGutters style={{display:"flex"}}>
                
                  <Link to='/' style={{textDecoration:"none"}}>
                    <Typography varinat='h4' className={classes.logo} >Employee Details</Typography>
                  </Link>
                  <Link to="/addDetails" style={{textDecoration:"none"}}>
                    
                    <Typography variant="h6"className="nav_items" style={{display:"flex"}}>
                      <AiFillFileAdd style={{width:"25px", height:"25px", marginRight:"5px"}}/>
                      Add Details
                    </Typography>
                  </Link>
                <Box sx={{flexGrow:1}} style={{display:"flex", justifyContent:"right"}}>
                  
                  <Link to="/profile" style={{textDecoration:"none"}}>
                    <Typography variant="h6" className="nav_items">
                      <CgProfile style={{width:"25px", height:"25px", marginRight:"5px"}}/>
                      Profile</Typography>
                  </Link>
                  <Link to="/signup" style={{textDecoration:"none"}}>
                    <Typography variant="h6" className="nav_items">
                      <SiGnuprivacyguard style={{width:"25px", height:"25px", marginRight:"5px"}}/>
                      Signup</Typography>
                  </Link>
                  <Typography variant="h6" className={classes.logout, "nav_items"} onClick={handleLogout}>
                    <AiOutlineLogout style={{width:"25px", height:"25px", marginRight:"5px"}}/>
                    Logout</Typography>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
      </Container>
      </div>
    </>
    
  );
}


export default Navbar;