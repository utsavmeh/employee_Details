import * as React from 'react';
import { Dehaze} from '@material-ui/icons';
import { ListItemText, ListItem, Divider, List, Button, Drawer, Box } from '@material-ui/core';
import { AiFillFileAdd,AiOutlineLogout } from "react-icons/ai";
import { Link,useNavigate } from 'react-router-dom';
import {CgProfile} from "react-icons/cg";
import {SiGnuprivacyguard} from "react-icons/si";
import { makeStyles } from '@material-ui/styles';

const useStyles = () => makeStyles(() => ({
    lstItems:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
    }
}))

export default function TemporaryDrawer() {

    const classes = useStyles()
    const navigate = useNavigate()

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const handleLogout = () => {
    localStorage.removeItem("id")
    navigate('/login')
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
        <Link to='/' style={{textDecoration:"none" ,color:"black"}}>
            <ListItem button key='employeeDetails'>
                <ListItemText primary="Employee Details" />
            </ListItem>
        </Link>
        <Link to="/addDetails" style={{textDecoration:"none" ,color:"black"}}>
            <ListItem button key="addDetails" className={classes.lstItems}>
                <AiFillFileAdd />
                <ListItemText>  Add Details </ListItemText>
            </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        
        <Link to="/profile" style={{textDecoration:"none" ,color:"black"}}>
            <ListItem button>
                <CgProfile/>
                <ListItemText>Profile</ListItemText>
            </ListItem>
        </Link>
        <Link to="/signup" style={{textDecoration:"none", color:"black"}}>
            <ListItem button>
                <SiGnuprivacyguard/>
                <ListItemText>Sign up</ListItemText>
            </ListItem>
        </Link>
        <ListItem button onClick={handleLogout} style={{cursor:"pointer"}}>
            <AiOutlineLogout/>
            <ListItemText>Log Out</ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><Dehaze style={{margin:"10px"}}/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
