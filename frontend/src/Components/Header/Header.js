import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToAdminPage, goToHomePage, goToLoginAdmin, goToProductsPage } from '../../Routes/Cordinator'
import { ContainerHeader } from './Header-styled'
import shopperLogo from "../../Assets/shopper-logo.png"

export default function Header() {
  const navigate = useNavigate()

  useEffect(() => {
    headerOptions()
  }, [navigate])

  const checkAdminLogin = () => {
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
        <ContainerHeader>
          <img src={shopperLogo} alt="logo da empresa shopper" onClick={() => { goToHomePage(navigate) }} />
          <button onClick={checkAdminLogin}>Área Admin</button>
        </ContainerHeader>
      )
    } else if (window.location.pathname === "/loginAdmin") {
      return (
        <ContainerHeader>
          <img src={shopperLogo} alt="logo da empresa shopper" onClick={() => { goToHomePage(navigate) }} />
          <button onClick={() => goToProductsPage(navigate)}>Página de produtos</button>
        </ContainerHeader>
      )
    } else if (window.location.pathname === "/estoque") {
      return (
        <ContainerHeader>
          <img src={shopperLogo} alt="logo da empresa shopper" onClick={() => { goToHomePage(navigate) }} />
          <button onClick={() => goToProductsPage(navigate)}>Página de produtos</button>
        </ContainerHeader>
      )
    } else if (window.location.pathname.includes("/produtos")) {
      return (
        <ContainerHeader>
          <img src={shopperLogo} alt="logo da empresa shopper" onClick={() => { goToHomePage(navigate) }} />
          <button onClick={checkAdminLogin}>Área Admin</button>
        </ContainerHeader>
      )
    }
  }



  return (
    <div>{headerOptions()}</div>
  )
}