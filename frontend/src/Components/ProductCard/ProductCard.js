import React from 'react'
import {ContainerProductCard} from "./ProductCard-styled"

function ProductCard(props) {
    const {product, addToCart} = props

  return (
    <ContainerProductCard>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <button onClick={()=>addToCart(product)}>Adicionar ao carrinho</button>
    </ContainerProductCard>
  )
}

export default ProductCard