import React from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from "../../Services/Users"
import useForm from '../../Hooks/useForm'
import { ContainerAdminLoginPage } from './AdminLoginPage-styled'
import profile from "../../Assets/profile.png"

function AdminLoginPage() {
    const { form, onChange } = useForm({ email: "", password: "" })

    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, navigate)
    }


    return (
        <ContainerAdminLoginPage>
            <div>
                <img src={profile} alt="desenho de um perfil humano" />

            </div>
            <form onSubmit={onSubmitForm}>
                <input name={"email"} placeholder="email" onChange={onChange} />
                <input name={"password"} placeholder="senha" onChange={onChange} />
                <button>Entrar</button>
            </form>
        </ContainerAdminLoginPage>
    )
}

export default AdminLoginPage