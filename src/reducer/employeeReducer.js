import {EMPLOYEE_LIST_REQUEST, EMPLOYEE_LIST_FAIL, EMPLOYEE_LIST_SUCCESS} from '../Constants/constants';


export const EmployeeListReducer = (state={empDetails :[]}, action) => {
    switch(action.type){
        case EMPLOYEE_LIST_REQUEST: 
            return {loading: true, empDetails: []}
        case EMPLOYEE_LIST_SUCCESS:
            return{loading: false, empDetails: action.payload}
        case EMPLOYEE_LIST_FAIL:
            return{loading: false, empDetails: action.payload}
        default:
            return state
    }
}