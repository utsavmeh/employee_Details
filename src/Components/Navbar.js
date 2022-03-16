import { Link } from "react-router-dom";
import {AppBar,
Toolbar,
Typography,
Box,
Paper,
} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {AiFillFileAdd, AiOutlineLogout, AiOutlineOrderedList} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {BsGrid3X3Gap} from 'react-icons/bs'
import './style/Navbar.css'

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
  },
}));


const Navbar = (props) => {


  const classes = useStyles();
  const navigate = useNavigate();

  const path = window.location.pathname;

  const [cardView, setCardView] = useState(true)

  useEffect(() => {
    props.func(cardView);
  }, [cardView])


  const handleLogout = () => {
    localStorage.removeItem("id")
    navigate('/login')
    console.log("done")
  }


  return (
      <>
      
      <div style={{display:"flex", marginLeft:"300px"}}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar disableGutters style={{display:"flex"}}>
                  {path === '/'?  
                    <Paper className="navbar_paper" elevation={4}>  
                      <div className="icons">
                        <b className="change_view">Change View : </b>
                      <div className={`list_icons_div ${cardView ? "" : "active"}`}>
                        <AiOutlineOrderedList className="list_icons" onClick={() => setCardView(false)}/>
                      </div>
                      <div className={`list_icons_div ${!cardView ? "" : 'active'}`}>
                        <BsGrid3X3Gap className="list_icons" onClick={() => setCardView(true)}/>
                      </div>
                      </div>
                    </Paper>
                    
                  : 
                  
                  <b className="navbar_heading">{path.toUpperCase().slice(1)}</b>
                  }
                    <Box sx={{flexGrow:1}} style={{display:"flex", justifyContent:"right"}}>
                      <Link to="/addDetails" style={{textDecoration:"none"}}>
                        <AiFillFileAdd style={{width:"25px", height:"25px", margin:"0px 15px", color:"grey"}}/>
                      </Link>

                      <Link to="/profile" style={{textDecoration:"none"}}>
                          <CgProfile style={{width:"25px", height:"25px", margin:"0px 15px"}}/>
                      </Link>
                      <Typography variant="subtitle" className={`${classes.logout} nav_items`} onClick={handleLogout}>
                        <AiOutlineLogout style={{width:"25px", height:"25px", marginRight:"30px"}}/>
                      </Typography>
                    </Box>
                  
                  
                </Toolbar>
            </AppBar>
      </div>
    </>
    
  );
}

Navbar.defaultProps = {
  func: (data) => {console.log(data)}
}


export default Navbar;