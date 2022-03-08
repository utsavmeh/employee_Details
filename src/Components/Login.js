import React, { useEffect, useState } from "react";
import { TextField, Switch, Button, Paper } from "@material-ui/core";
import { AiFillGithub, AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import './style/Login.css'
import { useNavigate } from "react-router-dom";
import Axios from "./Axios/axios";

const useStyles = makeStyles(() => ({
    TextField:{
        margin:"10px 0"
    },
    form:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-end",
        display:"absolute",
    },
    float_container:{
        background:'linear-gradient(#5682e2, #2548f7)',
        height:'150px',
        position:"relative",
        top:"-50px",
        color:"white",
        borderRadius:"20px"
    },
    switch:{
        display:"flex",
        alignItems:"center",
        marginTop:"10px"
    },
    btn:{
        margin:"20px 0"
    },
    icons:{
        display:'flex',
        justifyContent:"center",
        gap:"40px",
        marginTop:"20px",
    }
}))

const NewSignin = () => {

    const classes = useStyles();
    const navigate = useNavigate()
    const label = { inputProps: { 'aria-label': 'Remember me' } };

        
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

	
	

	const PostData = () => {
		Axios.get('/user').then(res => {
            // console.log(res)
            res.data.map((item,index) => {
                
                if(item.email === email && item.password === password){
                    localStorage.setItem("id", item.id)
                    navigate('/')
                }
            })
        })
	};

	return (
        <div className="bg_image">
            
            <center>
                <Paper maxWidth='sm' className={classes.form} style={{backgroundColor:"white", padding:"20px", height:"500px", maxWidth:"450px", borderRadius:"20px"}} >
                        <Paper elevation={12} className={classes.float_container}>
                            <p style={{color:"white", fontWeight:"bold", fontSize:"24px", paddingTop:"25px"}}>Sign in</p>
                            <div className={classes.icons}>
                                <AiFillFacebook />
                                <AiFillGithub />
                                <AiFillGoogleCircle />
                            </div>
                        </Paper>
                        <TextField className={classes.TextField} fullWidth id="Email" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <TextField className={classes.TextField} fullWidth id="Password" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <div className={classes.switch}>
                            <Switch {...label} color="primary" />
                            <p>Remember me</p>
                        </div>
                        <Button fullWidth variant="contained" className={classes.btn} onClick={PostData} color="primary">Sign In</Button>
                        <p style={{margin:"20px 0", color:"grey"}}>Don't have an account? <Link to='/signup' style={{cursor:"pointer", fontWeight:"bold", color:"blue", fontSize:"14px"}}> Sign up</Link></p>
                    </Paper>
            </center>
        </div>
    );
}

export default NewSignin;