import axios from 'axios'
import { useEffect, useState } from "react";
import {Button} from '@material-ui/core'
import { Link } from "react-router-dom";
import Navbar from './Components/Navbar'
import { useNavigate } from 'react-router-dom';
import {Table, TableContainer, TableHead, TableRow, Paper, TableBody, TableCell, Container} from '@material-ui/core'



const App = () => {

    const navigate = useNavigate()
    const [empDetails, setEmpDetails] = useState([])
    const id = localStorage.getItem('id')

    useEffect(() => {

        {id ? navigate('/') : navigate('/login')}
          if(id){
            const getDetails = () => {

            axios.get('http://localhost:3000/employee').then(res => {
                console.log(res)
                setEmpDetails(res.data)
            }).catch(err => {
                console.log(err)
          })}

          getDetails()
        }
        
    }, [])


    
      const delete_item = (id) => {

          axios.delete(`http://localhost:3000/employee/${id}`).then(res => {
              console.log("deleted Successfully")
              setEmpDetails(empDetails.filter(emp => emp.id !== id))
          }).catch(err => {
              console.log(err)
        })
      }
    


  return (
      <>        
        <Navbar />
        <Container style={{marginTop:"30px"}}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:"rgb(147,147,147)"}}>
            <TableCell align="center" style={{fontWeight:"bold", fontSize:"16px"}}>Name</TableCell>
            <TableCell align="center" style={{fontWeight:"bold", fontSize:"16px"}}>Email</TableCell>
            <TableCell align="center" style={{fontWeight:"bold", fontSize:"16px"}}>DOB</TableCell>
            <TableCell align="center" style={{fontWeight:"bold", fontSize:"16px"}}>Phone Number</TableCell>
            <TableCell align="center" style={{fontWeight:"bold", fontSize:"16px"}}>Edit Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {empDetails.map((row) => (
            <TableRow
              className="tableRow"
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.dob}</TableCell>
              <TableCell align="center">{row.phone_number}</TableCell>
              <TableCell align="center"><Button variant="contained" onClick={() => delete_item(row.id)}> Delete</Button>
              <Link to={`/addDetails/${row.id}`}>
                <Button variant="contained" style={{marginLeft:"10px"}}>Edit</Button>
              </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>  
    </>
    
  );
}


export default App;