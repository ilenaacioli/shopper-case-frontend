import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { goToLoginAdmin } from "../Routes/Cordinator";


export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            alert("Acesso não autorizado!")
            goToLoginAdmin(navigate)
        }
    }, [navigate])

} 