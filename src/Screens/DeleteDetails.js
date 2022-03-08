import { Button } from "@material-ui/core"
import Axios from "../Components/Axios/axios"

const DeleteDetails = () => {
    const delete_item = () => {
        Axios.delete(`/employee/${9}`).then(res => {
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
