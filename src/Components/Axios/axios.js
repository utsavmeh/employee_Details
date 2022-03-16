import axios from "axios";



const Axios = axios.create({
    baseURL : process.env.REACT_APP_BASEURL
});    


Axios.interceptors.request.use(function (response) {
    // Do something before request is sent
    console.log("Request intercepted")
    return response
}, function (error) {
    // Do something with request error
    console.log("error")
})
// Axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_AUTH_TOKEN;


export default Axios;