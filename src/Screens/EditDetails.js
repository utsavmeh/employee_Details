import { Accordion,Button, AccordionSummary,AccordionDetails,Typography, Container, TextField } from "@material-ui/core";
import axios from "axios"
import { ExpandMore } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { makeStyles } from "@material-ui/styles";



const useStyles = makeStyles((theme) => ({
    accord:{
        width:"500px",
    },
    container:{
        marginTop:"50px",
        display:"flex",
        justifyContent:"center"
    },
    accord_details:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    }
}))


const EditDetails = () => {

    const classes = useStyles()
    const params = useParams();

    const [empDetails, setEmpDetails] = useState([])

    useEffect(() => {
        const getDetails = () => {

          axios.get('http://localhost:3000/employee').then(res => {
              console.log(res)
              setEmpDetails(res.data)
          }).catch(err => {
              console.log(err)
        })}

        getDetails()
    }, [])

    const [name,setName] = useState(empDetails.name);
    const [email,setEmail] = useState(empDetails.email);
    const [dob,setDob] = useState(empDetails.dob);
    const [phone_number,setPhone_number] = useState(empDetails.phone_number);

    
    const edit = () => {
        axios.patch(`http://localhost:3000/employee/${params.id}`, {
            name,email,dob, phone_number
        }).then(res => {
            console.log(res)
            console.log("Edited successfully")
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <Container className={classes.container}>
            <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Add Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accord_details}>
                        <TextField
                            required
                            id="outlined"
                            label="Name"
                            fullWidth
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                        />
                        <TextField
                            required
                            id="outlined"
                            label="Email"
                            fullWidth
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                        <TextField
                            required
                            id="outlined"
                            label="Date of Birth"
                            fullWidth
                            value={dob}
                            onChange={(e) => {setDob(e.target.value)}}
                        />
                        <TextField
                            required
                            id="outlined"
                            label="Mobile Number"
                            fullWidth
                            value={phone_number}
                            onChange={(e) => {setPhone_number(e.target.value)}}
                        />
                    </AccordionDetails>
                
                    <Button onClick={edit}>Edit it</Button>
                </Accordion>
                </Container>
    )

}

export default EditDetails;