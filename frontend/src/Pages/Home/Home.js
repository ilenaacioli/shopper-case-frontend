import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLoginAdmin, goToProductsPage } from "../../Routes/Cordinator"
import { TextSection, ImgSection, ContainerHome } from "./Home-styled"
import shoppingCart from "../../Assets/shopping-cart.png"

function Home() {

  const navigate = useNavigate()

  return (
    <ContainerHome>
      <TextSection>
        <h2>Suas compras no conforto da sua casa!</h2>
        <p>Buscamos inovar a sua forma de comprar, pensando sempre no seu bem estar. Pronto para viver essa experiência?</p>
        <button onClick={() => goToProductsPage(navigate)}>Ver produtos</button>
      </TextSection>
      <ImgSection>
        <img src={shoppingCart}/>
      </ImgSection>
    </ContainerHome>

  )
}

export default Home