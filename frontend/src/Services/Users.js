import axios from "axios";
import { BASE_URL } from "../Constants/Urls";
import { goToAdminPage } from "../Routes/Cordinator";


export const login = (body, navigate) => {
    axios.post(`${BASE_URL}/users/adminLogin`,body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        goToAdminPage(navigate)
    })
    .catch((err) => {
        console.log(err.response.data.message)
    })
   
  }