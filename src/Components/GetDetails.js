import Axios from "./Axios/axios"

const GetDetails = () => {
    Axios.get('/employee').then(res => {
        console.log(res)
        // setEmpDetails(res.data)
    }).catch(err => {
        console.log(err)
    })
}

export default GetDetails