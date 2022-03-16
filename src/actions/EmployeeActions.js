import {EMPLOYEE_LIST_REQUEST, EMPLOYEE_LIST_FAIL, EMPLOYEE_LIST_SUCCESS} from '../Constants/constants';
import Axios from '../Components/Axios/axios';


const ListEmployee = () => (dispatch) => {

    dispatch({type:EMPLOYEE_LIST_REQUEST, payload:[]})

    Axios.get('/employee').then(res => {
        dispatch({type:EMPLOYEE_LIST_SUCCESS, payload: res.data})
    }).catch(err => {
        dispatch({type:EMPLOYEE_LIST_FAIL, payload:err.response && err.response.data.message ? err.response.data.message :  err.message})
    })
}


export {ListEmployee}