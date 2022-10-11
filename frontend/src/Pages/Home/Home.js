import React from 'react'
import { useNavigate } from 'react-router-dom'
import {goToLoginAdmin, goToProductsPage} from "../../Routes/Cordinator"

function Home() {

  const navigate = useNavigate()

  return (
    <div>
      <h2>Home</h2>
      <button onClick={()=>goToLoginAdmin(navigate)}>AdminLoginPage</button>
      <button onClick={()=>goToProductsPage(navigate)}>ProductsPage</button>
    </div>

  )
}

export default Home