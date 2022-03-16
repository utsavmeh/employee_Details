import { useEffect, useState } from "react";
import {Button} from '@material-ui/core'
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import {Container,TextField, Select, InputLabel} from '@material-ui/core'
import { Autocomplete } from '@mui/material';
import Navbar from "./Components/Navbar";
import { makeStyles } from "@material-ui/styles";
import Sidebar from './Components/sidebar';
import CardView from "./Components/CardView";
import BulkDelete from "./Components/BulkDelete";
import { useDispatch, useSelector } from "react-redux";
import {ListEmployee} from './actions/EmployeeActions';
import { Paper } from "@material-ui/core";
import EditDetails from "./Components/EditDetails";



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

const App = () => {

    const navigate = useNavigate()
    const [empDetail, setEmpDetail] = useState([])
    const [selected_item, setSelected_item] = useState(null)  
    const [tempDetails, setTempDetails] = useState("")
    const [searchOptions, setSearchOptions] = useState("")
    const [cardView, setCardView] = useState(true)
    const [editData, setEditData] = useState(false)
      

    const classes = useStyles()
    const dispatch = useDispatch() 

    const EmployeeList = useSelector(state => state.EmployeeList)
    let {empDetails, error, loading} = EmployeeList
    const id = localStorage.getItem('id')


    useEffect(() => {
      setEmpDetail(empDetails)
    }, [empDetails])


    useEffect(() => {
      console.log(empDetails)
      setTempDetails(empDetails) 
    }, [empDetails])
        
    const searchArray = ['email', 'id', 'phone_number', 'name', 'dob'];

    const getDetails = () => {
      dispatch(ListEmployee())
    }

    useEffect(() => {
        {id ? navigate('/') : navigate('/login')}
          if(id){
          
          dispatch(ListEmployee())
        }
        
    }, [dispatch])

      const column = [
        {field: "id", headerName:"Id", width:150},
        {field:"name", headerName:"name", width:150},
        {field:"email", headerName:"email", width:200},
        {field:"dob", headerName:"dob", width:150},
        {field:"phone_number", headerName:"phone_number", width:150},
    ]


    const checkSearch = (emp, value) => {
      if(searchOptions === ""){
        return(emp)
      }
      if(searchOptions === 'email'){
        return emp.email.includes(value)
      }
      if(searchOptions === 'id'){
        return emp.id == value
      }
      if(searchOptions === 'dob'){
        return emp.dob.includes(value)
      }
      if(searchOptions === 'name'){
        return emp.name.includes(value)
      }
      if(searchOptions === 'phone_number'){
        return emp.phone_number.includes(value)
      }
      
    }

    const handleSearch = (value) => {
      const temp = tempDetails;
      console.log(temp)
      console.log(value)
      const pqr = temp.filter(emp => checkSearch(emp, value))
      setEmpDetail(pqr)
      if(value === ""){
        setEmpDetail(empDetails)
      }
      console.log(pqr)
    }
    
    const get_cardView = (data) => {
      setCardView(data)
    }
    const setEditData_false = (value) => {
      setEditData(value);
      
    }

    useEffect(() => {
      console.log(editData)
    },[editData])

  return (
      <>
      <EditDetails selected_item={selected_item} editData={editData} setEditData_false={setEditData_false} getDetails={getDetails}/>
      <Navbar func={get_cardView} />
        <Sidebar>
          <Container>
            {cardView ? <CardView empDetails={empDetails} style={{marginTop:"90px"}}/>
            :            
              <div style={{ height: 400,width:"70%", marginLeft:"auto", marginRight:"auto" }}>
                <span style={{display:"flex", marginBottom:"10px", alignItems:"center", justifyContent:"center"}}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={searchArray}
                    onChange={(event, newValue) => {
                      setSearchOptions(newValue)
                    }}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Search using"/>}
                  />
                  <TextField label="Search..." onChange={(e) => handleSearch(e.target.value)} style={{marginLeft:"20px"}}/>
                </span>
                <Paper elevation={12} style={{height:"100%", marginTop:"40px"}}>
                <DataGrid
                  rows={empDetail}
                  columns={column}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                  onSelectionModelChange={(newSelection) => {
                    // console.log(newSelection)
                    setSelected_item(newSelection)
                    if(newSelection.length === 0){
                      setSelected_item(null)
                    }
                  }}
                />
                </Paper>
                {
                  selected_item !== null ? 
                  <>
                  <InputLabel id="demo-simple-select-label">Edit Options</InputLabel>
                  <Select
                    labelId="Options"
                    id="employee_Details_Options"
                    label="EmpDetails_Buttons"
                    className={classes.empDetails_Button}
                  >
                    <div className={classes.edit_buttons}>
                      
                    <button className="cardview_button error_button" onClick ={() => BulkDelete(selected_item, dispatch)}>Delete</button>
                    {
                  selected_item !== null ? 
                  (selected_item.length === 1 ? 
                  
                  <button className="cardview_button primary_button"  
                  onClick={() => setEditData(true)}
                  // onClick={console.log("working on editing")}
                  >Edit</button>
                  : <Button disabled variant="contained" color="primary" style={{marginTop:"10px", marginLeft:"10px"}}>You can't edit more than one item at a time</Button>) : ""
                }

                    </div>
                    
                  </Select>
                    </>
                  : ""
                }
                
              </div>
            }
          </Container>
        </Sidebar>

    </>
    
  );
}


export default App;