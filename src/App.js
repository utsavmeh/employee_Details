import axios from 'axios'
import { useEffect, useState } from "react";
import {Button} from '@material-ui/core'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import Navbar from './Components/Navbar'
import { useNavigate } from 'react-router-dom';
import { TextField, Container } from '@material-ui/core';
import { Autocomplete } from '@mui/material';
// import Teddy from './Components/Teddy';
import Sidebar from './Components/sidebar';


const App = () => {

    const navigate = useNavigate()
    const [empDetails, setEmpDetails] = useState([])
    const [selected_item, setSelected_item] = useState(null)  
    const [tempDetails, setTempDetails] = useState("")
    const [searchOptions, setSearchOptions] = useState("")
    const id = localStorage.getItem('id')

    const searchArray = ['email', 'id', 'phone_number', 'name', 'dob'];

    const getDetails = () => {

        axios.get('http://localhost:3000/employee').then(res => {
            console.log(res)
            setEmpDetails(res.data)
        }).catch(err => {
            console.log(err)
      })}

    useEffect(() => {

        {id ? navigate('/') : navigate('/login')}
          if(id){
            const getDetails = () => {

            axios.get('http://localhost:3000/employee').then(res => {
                console.log(res)
                setEmpDetails(res.data)
                setTempDetails(res.data)
            }).catch(err => {
                console.log(err)
          })}

          getDetails()
        }
        
    }, [])


    
      const delete_item = (id) => {
        // console.log(id)
          id.map((new_id) => {
            console.log(new_id)
            axios.delete(`http://localhost:3000/employee/${new_id}`).then(res => {
                console.log("deleted Successfully")
                // setEmpDetails(empDetails.filter(emp => emp.id !== new_id))
                getDetails()
            }).catch(err => {
                console.log(err)
          })

        })
      }
    

      const column = [
        {field: "id", headerName:"Id", width:150},
        {field:"name", headerName:"name", width:150},
        {field:"email", headerName:"email", width:200},
        {field:"dob", headerName:"dob", width:150},
        {field:"phone_number", headerName:"phone_number", width:150},
    ]


    const checkSearch = (emp, value) => {
      console.log(typeof emp.id)
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
      setEmpDetails(temp.filter(emp => checkSearch(emp, value)))
      
      console.log(value)
    }
    


  return (
      <>        
        <Sidebar>
          <Container>
            
            <div style={{ height: 400, width: '70%', marginLeft:"auto", marginRight:"auto" }}>
              <span style={{display:"flex", marginBottom:"10px", alignItems:"center"}}>
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
              <DataGrid
                rows={empDetails}
                columns={column}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                onSelectionModelChange={(newSelection) => {
                  console.log(newSelection)
                  setSelected_item(newSelection)
                  if(newSelection.length === 0){
                    setSelected_item(null)
                  }
                }}
              />
              {
                selected_item !== null ? 
                <Button variant="contained" style={{color:"red", backgroundColor:"rgba(255, 84, 84,0.5)", marginTop:"10px"}} onClick={() => delete_item(selected_item)}>Delete</Button>
                : ""
              }
              {
                selected_item !== null ? 
                (selected_item.length === 1 ? 
                <Link to={`/addDetails/${selected_item}`}>
                <Button variant="contained" color="primary" style={{marginTop:"10px", marginLeft:"10px"}}>Edit</Button> </Link>: <Button disabled variant="contained" color="primary" style={{marginTop:"10px", marginLeft:"10px"}}>You can't edit more than one item at a time</Button>) : ""
              }
            </div>
            {/* <Teddy /> */}
          </Container>
        </Sidebar>

    </>
    
  );
}


export default App;