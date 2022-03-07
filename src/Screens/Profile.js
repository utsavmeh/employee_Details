import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/sidebar";

const Profile = () => {

    const [data, setData] = useState([])
    const id = localStorage.getItem("id");
    const navigate = useNavigate()
 
    useEffect(() => {

        {id ? navigate('/profile') : navigate('/login')}

        if(id){
            const getDetails = () => {
            axios.get(`http://localhost:3000/user/${id}`).then(res => {
                console.log(res)
                setData(res.data)
            }).catch(err => {
                console.log(err)
            })}
        
            getDetails();
        }
            
    }, [])

    return(
        <Sidebar>
            <h1 style={{marginLeft:"300px"}}>
                Welcome {data.fname} {data.lname}
            </h1>
        </Sidebar>
    )
}

export default Profile;