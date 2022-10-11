import React from 'react'
import { useNavigate } from 'react-router-dom'
import {login } from "../../Services/Users"
import useForm from '../../Hooks/useForm'

function AdminLoginPage() {
    const { form, onChange, cleanFields } = useForm({ email: "", password: "" })

    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form,navigate)
      }


    return (
        <div>
            <h1>AdminLoginPage</h1>
            <form onSubmit={onSubmitForm}>
                <input name={"email"} placeholder="email" onChange={onChange} />
                <input name={"password"} placeholder="senha" onChange={onChange} />
            <button>Entrar</button>
            </form>
        </div>
    )
}

export default AdminLoginPage