import axios from "axios";

const axiosReq = axios.create({
    baseURL: 'https://randomuser.me/api/?inc=picture,name,dob,id&results=15'
});

export { axiosReq };