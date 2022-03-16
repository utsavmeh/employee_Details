import { Modal,Box, Typography, TextField, Button } from "@material-ui/core"
import { useEffect, useState } from "react";
import Axios from "./Axios/axios";
import GetDetails from "./GetDetails";
import { makeStyles } from "@material-ui/styles";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  // boxShadow:"0 0 400px black",
  borderRadius:'10px',
  boxShadow: 24,
  p: 4,
};


const useStyles = makeStyles((theme) => ({
    accord:{
        width:"500px",
        marginTop:"50px"
        
    },
    container:{
        display:"flex",
        justifyContent:"center",
    },
    accord_details:{
        display:"flex",
        flexDirection:"column",
        marginTop:"20px",
        justifyContent:"center",
    },
    accord_summary :{
        backgroundColor:"rgba(21, 81, 101, 0.4)"
    },
    modal_text:{
      marginBottom:"20px"
    },
    empDetails_Button:{
      margin:"20px 0 0 10px",
    },
    edit_buttons :{
      display: "flex",
      flexDirection:"column",
      margin:"0 20px"
    }
}))

const EditDetails = (props) => {
    const [openModal, setOpenModal] = useState(false)
    

    // console.log(props.openModal)
    const classes = useStyles()
    const [editname, setEditName] = useState("")
    const [editemail, setEditEmail] = useState("")
    const [editdob, setEditDob] = useState("")
    const [editphone_number, setEditPhone_number] = useState("")
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("")
    const [editDetailsData, setEditDetailsData] = useState(true)
    

    const handleClose = () => {
        setOpenModal(false)
        setEditDetailsData(true)
    };

    let email_regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    const handleEmail = (Email) => {
        setEditEmail(Email)
        if(email_regex.test(Email)){
            setEditEmail(Email)
            setEmailError("")
        }else setEmailError("Inavlid email");
    }

    const handlePhone = (P_no) => {
        setEditPhone_number(P_no)
        if(P_no.length === 10){
            setEditPhone_number(P_no)
            setPhoneError("")
        }else setPhoneError("Invalid mobile number")

    }

    useEffect(() => {
        console.log(editDetailsData)
    }, [editDetailsData])

    const add = () => {
      Axios.get(`/employee/${props.selected_item}`).then(res => {
        setEditName(res.data.name)
        setEditEmail(res.data.email)
        setEditDob(res.data.dob)
        setEditPhone_number(res.data.phone_number)
      })
      setOpenModal(true) 
      setEditDetailsData(false)
    }

    if(props.editData && editDetailsData){
        add()
        props.setEditData_false(false);
    }

    const submitEditedForm = () => {
      Axios.patch(`/employee/${props.selected_item}`, {
              name:editname, email:editemail, dob:editdob, phone_number:editphone_number
          }).then(res => {
              console.log(res)
              console.log("Edited successfully")
              handleClose()
              props.getDetails()
            
          }).catch(err => {
              console.log(err)
          })
    }


    return(
        <Modal
            style={{borderRadius:"10px"}}
            open={openModal}
            onClose={() => handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography variant='h5' style={{textAlign:"center"}}>Edit Details</Typography>
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    fullWidth
                    value={editname}
                    className={classes.modal_text}
                    onChange={(e) => {setEditName(e.target.value)}}
                />
                <TextField
                    required
                    error={emailError ? true : false}
                    id="outlined-required"
                    label="Email"
                    fullWidth
                    value={editemail}
                    className={classes.modal_text}
                    onChange={(e) => handleEmail(e.target.value)}
                    helperText={emailError}
                />
                <TextField
                    id="outlined-required"
                    type="date"
                    label="Date off birth "
                    fullWidth
                    className={classes.modal_text}
                    value={editdob}
                    onChange={(e) => {setEditDob(e.target.value)}}
                />
                <TextField
                    required
                    error={phoneError ? true : false}
                    id="outlined-required"
                    label="Mobile Number"
                    className={classes.modal_text}
                    fullWidth
                    value={editphone_number}
                    onChange={(e) => {handlePhone(e.target.value)}}
                    helperText={phoneError}
                />
                {editname && !phoneError && !emailError && editdob ? <Button onClick={submitEditedForm} variant="contained" color="primary" style={{margin:"20px"}}>Confirm Change</Button> : ""}
            </Box>
        </Modal>
    )
}

export default EditDetails