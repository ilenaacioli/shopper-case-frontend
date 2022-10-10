import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToAdminPage } from "../../Routes/Cordinator"
import axios from 'axios'
import { BASE_URL } from '../../Constants/Urls'

function AdminLoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
      }

      const onChangePassword = (event) => {
        setPassword(event.target.value)
      }

      const navigate = useNavigate()

      const login = () => {
        const body ={
          email: email,
          password: password
        }

        console.log("aqui",body)
        
        axios.post(`${BASE_URL}/users/adminLogin`,body)
        .then((res) => {
            console.log(res.data)
            // goToAdminPage(navigate)
        })
        .catch((err) => {
            console.log(err.response.data.message)
        })
       
      }

    return (
        <div>
            <h1>AdminLoginPage</h1>
            <input value={email} placeholder="email" onChange={onChangeEmail}/>
            <input value={password} placeholder="senha" onChange={onChangePassword}/>
            <button onClick={login}>Entrar</button>
        </div>
    )
}

export default AdminLoginPage