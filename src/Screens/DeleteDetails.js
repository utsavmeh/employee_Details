import { Button } from "@material-ui/core"
import axios from "axios"

const DeleteDetails = () => {
    const delete_item = () => {
        axios.delete(`http://localhost:3000/employee/${9}`).then(res => {
            console.log("deleted Successfully")
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <Button onClick={delete_item}>Delete</Button>
    )
}

export default DeleteDetails;
