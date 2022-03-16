// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';

// import Axios from '../Components/Axios/axios'
// import { Button, Typography, Container, TextField } from "@material-ui/core";
// import { ExpandMore } from "@material-ui/icons";
// import { makeStyles } from "@material-ui/styles";
// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom"
// import Sidebar from "../Components/sidebar";

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };


// const useStyles = makeStyles((theme) => ({
//     accord:{
//         width:"500px",
//         marginTop:"50px"
        
//     },
//     container:{
//         display:"flex",
//         justifyContent:"center",
//     },
//     accord_details:{
//         display:"flex",
//         flexDirection:"column",
//         marginTop:"20px",
//         justifyContent:"center",
//     },
//     accord_summary :{
//         backgroundColor:"rgba(21, 81, 101, 0.4)"
//     }
// }))

// export default function UpdateModal(props) {
//   const [open, setOpen] = useState(props.openModal);
//   const handleOpen = () => setOpen(!open);
//   // const handleClose = () => setOpen(false);

//   const navigate = useNavigate();
//     const classes = useStyles()
//     const params = useParams();
    

//     const [name,setName] = useState("");
//     const [email,setEmail] = useState("");
//     const [dob,setDob] = useState("");
//     const [phone_number,setPhone_number] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [phoneError, setPhoneError] = useState("")
//     const id = localStorage.getItem("id")

//     let email_regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

//     const handleEmail = (Email) => {
//         setEmail(Email)
//         if(email_regex.test(Email)){
//             setEmail(Email)
//             setEmailError("")
//         }else setEmailError("Inavlid email");
//     }

//     const handlePhone = (P_no) => {
//         setPhone_number(P_no)
//         if(P_no.length === 10){
//             setPhone_number(P_no)
//             setPhoneError("")
//         }else setPhoneError("Invalid mobile number")

//     }

    
//     // ----------------HANDLING DATA ENDS-------------------------------



//     useEffect(() => {
//         // {id ? params.id ? navigate(`/addDetails/${params.id}`) : navigate('/addDetails') : navigate('/login')}
//         if(params.id){
//             Axios.get(`/employee/${params.id}`).then(res=>{
//                 console.log(res.data)
//             setName(res.data.name)
//             setEmail(res.data.email)
//             setDob(res.data.dob)
//             setPhone_number(res.data.phone_number)
//             }).catch(err => console.log(err))
//         }
//     }, [])
    
//     const add = () => {
//         {!params.id ? 
//             Axios.post(`/employee/`, {
//                 name, email,dob, phone_number
//             }).then((res) => {
//                 console.log("added Successfully")
//                 // setName("")
//                 // setEmail("")
//                 // setDob("")
//                 // setPhone_number("")
//                 navigate('/')
                
//             }).catch((err) => {
//                 console.log(err)
//             })

//         :
//             Axios.patch(`/employee/${params.id}`, {
//                     name,email,dob, phone_number
//                 }).then(res => {
//                     console.log(res)
//                     console.log("Edited successfully")
//                     // setName("")
//                     // setEmail("")
//                     // setDob("")
//                     // setPhone_number("")
//                     navigate('/')
//                 }).catch(err => {
//                     console.log(err)
//                 })
//         }
//     }


//   return (
//     <div>
//       {/* <Button onClick={handleOpen}>Open modal</Button> */}
//       <Modal
//         open={open}
//         onClose={handleOpen}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <TextField
//               required
//               id="outlined-required"
//               label="Name"
//               fullWidth
//               value={name}
//               onChange={(e) => {setName(e.target.value)}}
//           />
//           {/* <TextField
//               required
//               error={emailError ? true : false}
//               id="outlined-required"
//               label="Email"
//               fullWidth
//               value={email}
//               onChange={(e) => handleEmail(e.target.value)}
//               helperText={emailError}
//           />
//           <TextField
//               id="outlined-required"
//               type="date"
//               label=" "
//               fullWidth
//               value={dob}
//               onChange={(e) => {setDob(e.target.value)}}
//           /> */}
//           <TextField
//               required
//               error={phoneError ? true : false}
//               id="outlined-required"
//               label="Mobile Number"
//               fullWidth
//               value={phone_number}
//               onChange={(e) => {handlePhone(e.target.value)}}
//               helperText={phoneError}
//           />
//           {name && !phoneError && !emailError && dob ? <Button onClick={add} variant="contained" color="primary" style={{margin:"20px"}}>{!params.id ? "Confirm Add" : "Confirm Change"}</Button> : ""}
//         </Box>
//       </Modal>
//     </div>
//   );
// }
