import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { goToLoginAdmin } from "../Routes/Cordinator";
import Swal from 'sweetalert2'

export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Acesso não autorizado"
              })
            goToLoginAdmin(navigate)
        }
    }, [navigate])

} 