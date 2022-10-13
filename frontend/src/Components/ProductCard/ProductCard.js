import React from 'react'
import { ContainerProductCard, ContainerProductCardAdminPage, PriceText, ProductUnavailableText } from "./ProductCard-styled"
import productImg from "../../Assets/product-img.png"

function ProductCard(props) {
  const { product, addToCart } = props


  const cardOptions = () => {
    if (window.location.pathname === "/produtos") {
      return (
        <ContainerProductCard>
          <img src={productImg} alt="imagem de produtos" />
          <p>{product.name.toLowerCase()}</p>
          {product.qty_stock > 0 ?<PriceText>R$ {product.price}</PriceText>: <ProductUnavailableText>Produto Indisponível</ProductUnavailableText> }
          <button onClick={() => addToCart(product)}>Adicionar</button>
        </ContainerProductCard>
      )
    } else if (window.location.pathname === "/estoque") {
      return (
        <ContainerProductCardAdminPage>
          <img src={productImg} alt="imagem de produtos" />
          <p>{product.name}</p>
          <PriceText>R$ {product.price}</PriceText>
          <p>Quantidade em estoque: {product.qty_stock}</p>
        </ContainerProductCardAdminPage>
      )
    }
  }

  return (
    <>
      {cardOptions()}
    </>
  )
}

export default ProductCard