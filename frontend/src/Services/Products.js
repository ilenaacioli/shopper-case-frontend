import axios from "axios";
import { BASE_URL } from "../Constants/Urls";
import Swal from 'sweetalert2'

export const editProduct = (form,cleanFields,refreshPage, setRefreshPage) => {

    axios.put(`${BASE_URL}/products/editProduct`, form)
        .then((res) => {
            Swal.fire({
                icon: 'success',
                title: 'Produto atualizado!',
                showConfirmButton: false,
                timer: 3000
              })

              cleanFields()
              setRefreshPage(!refreshPage)
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data.message
              })
        })

}