import Axios from "./Axios/axios"
import GetDetails from '../Components/GetDetails'
import { ListEmployee } from "../actions/EmployeeActions"

// STILL NEED TO CREATE GET DETAILS FUNCTION AFTER IMPLEMENTING EMP DETAILS IN REDUX

const BulkDelete = (id, dispatch) => {
    id.map((new_id) => {
        console.log(new_id)
        Axios.delete(`/employee/${new_id}`).then(res => {
            console.log("deleted Successfully")
            dispatch(ListEmployee())
        }).catch(err => {
            console.log(err)
        })

    })
}

export default BulkDelete