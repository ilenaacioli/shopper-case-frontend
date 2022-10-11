import axios from "axios";
import { BASE_URL } from "../Constants/Urls";

export const makeAnOrder = (form, cart) => {

    const body = {
        userName: form.userName,
        deliveryDate: form.deliveryDate,
        products:
            cart
    }
    axios.post(`${BASE_URL}/orders`, body)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response.data.message)
        })

}