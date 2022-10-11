import React from 'react'
import {ContainerProductCard} from "./ProductCard-styled"
import productImg from "../../Assets/product-img.png"

function ProductCard(props) {
    const {product, addToCart} = props

  return (
    <ContainerProductCard>
      <img src={productImg} alt="imagem de produtos"/>
        <p>{product.name}</p>
        <p>R$ {product.price}</p>
        <button onClick={()=>addToCart(product)}>Adicionar ao carrinho</button>
    </ContainerProductCard>
  )
}

export default ProductCard