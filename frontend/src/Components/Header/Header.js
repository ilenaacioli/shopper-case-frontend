import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToAdminPage, goToHomePage, goToLoginAdmin } from '../../Routes/Cordinator'
import { ContainerHeaderHome } from './Header-styled'
import shopperLogo from "../../Assets/shopper-logo.png"

export default function Header() {
  const navigate = useNavigate()

  useEffect(() => {
    headerOptions()
  }, [navigate])

  const logout = () => {
    localStorage.removeItem("token")
    goToHomePage(navigate)
  }

  const checkAdminLogin = ()=>{
    const token = localStorage.getItem("token")
    if (token) {
        goToAdminPage(navigate)
    } else {
      goToLoginAdmin(navigate)
    }
  }

  const headerOptions = () => {

    if (window.location.pathname === "/") {
      return (
        <ContainerHeaderHome>
            <img src={shopperLogo} alt="logo da empresa shopper" onClick={()=>{goToHomePage(navigate)}}/>
            <button onClick={checkAdminLogin}>Área Admin</button>
        </ContainerHeaderHome>
      )
    } else if (window.location.pathname === "/loginAdmin") {
      return (
        <div></div>
      )
    } else if (window.location.pathname === "/estoque") {
      return (
        <div></div>
      )
    } else if (window.location.pathname.includes("/produtos")) {
      return (
        <ContainerHeaderHome>
            <img src={shopperLogo} alt="logo da empresa shopper" onClick={()=>{goToHomePage(navigate)}}/>
            <button onClick={checkAdminLogin}>Área Admin</button>
        </ContainerHeaderHome>
      )
    }
  }



  return (
    <div>{headerOptions()}</div>
  )
}