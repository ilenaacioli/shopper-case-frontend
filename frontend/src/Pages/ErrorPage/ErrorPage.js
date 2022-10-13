import React from 'react'
import notFound from "../../Assets/not-found.png"
import { ContainerErrorPage } from './ErrorPage-styled'
import { goToProductsPage } from "../../Routes/Cordinator"
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
  const navigate = useNavigate()

  return (
    <ContainerErrorPage>
      <h1>Ops... Não encontramos o que você procura :( </h1>
      <img src={notFound} alt="desenho de uma página de web com carinha triste" />
      <h2>Deseja voltar às compras?</h2>
      <button onClick={() => { goToProductsPage(navigate) }}>Página de produtos</button>
    </ContainerErrorPage>
  )
}

export default ErrorPage