import axios from "axios";
import { BASE_URL } from "../Constants/Urls";
import Swal from 'sweetalert2'

export const makeAnOrder = (form, cart) => {

    const body = {
        userName: form.userName,
        deliveryDate: form.deliveryDate,
        products:
            cart
    }
    axios.post(`${BASE_URL}/orders`, body)
        .then((res) => {
            Swal.fire({
                icon: 'success',
                title: 'Pedido feito!',
                showConfirmButton: false,
                timer: 3000
              })
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data.message
              })
        })

}