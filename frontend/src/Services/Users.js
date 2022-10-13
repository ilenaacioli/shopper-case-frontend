import axios from "axios";
import { BASE_URL } from "../Constants/Urls";
import { goToAdminPage } from "../Routes/Cordinator";
import Swal from 'sweetalert2'


export const login = (body, navigate) => {
    axios.post(`${BASE_URL}/users/adminLogin`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToAdminPage(navigate)
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data.message
            })
        })

}