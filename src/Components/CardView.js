import {Card, Container, CardMedia, CardContent, Typography, Grid, Paper, Button} from '@material-ui/core'
import './style/cardView.css'
import {ListEmployee} from '../actions/EmployeeActions';
import EditDetails from './EditDetails';
import BulkDelete from './BulkDelete';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const CardView = ({empDetails}) => {


    console.log(empDetails)
    const dispatch = useDispatch()
    const [selected_item, setSelected_item] = useState([])
    const [editData, setEditData] = useState(false)


    const getDetails = () => {
      dispatch(ListEmployee())
    }


    const handleEdit = (id) => {
        setSelected_item([id])
        setEditData(true)
    }

    const setEditData_false = (value) => {
        setEditData(value);
    }

    return(
        <Container>
            <EditDetails selected_item={selected_item} editData={editData} setEditData_false={setEditData_false} getDetails={getDetails}/>
            <Paper style={{marginTop:"40px"}} elevation={4}>
            <Grid container spacing={6} style={{paddingLeft:"20px"}}>
            {empDetails.map((item,index) => {
                return(
                        <Grid item style={{marginTop:"40px"}}>
                            <Card style={{width:"250px"}} className="employee_card">                
                            {/* <Delete id="delete_employee" onClick={() => BulkDelete([item.id], dispatch)}/> */}
                            {/* <Edit id='edit_employee'/> */}
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image ? item.image : "https://mui.com/static/images/cards/contemplative-reptile.jpg"}
                                    alt="Profile image"
                                />
                                
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='abcd'>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <b>Email id - </b> {item.email}
                                    </Typography>
                                     <Typography variant="body2" color="text.secondary">
                                        <b>Date of Birth - </b> {item.dob}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <b>Contact Number - </b> {item.phone_number}
                                    </Typography>
                                    <button className='error_button cardview_button' onClick={() => BulkDelete([item.id], dispatch)}>Delete</button>
                                    <button className='cardview_button primary_button' style={{marginLeft:"30px"}} onClick={() => {handleEdit(item.id)}}>Edit</button>
                                </CardContent>
                                {/* <Delete id="delete_employee" onClick={() => BulkDelete}/> */}
                            </Card>
                        </Grid>
                        )
                    })}
            </Grid>
            </Paper>
        </Container>
    )
}

export default CardView