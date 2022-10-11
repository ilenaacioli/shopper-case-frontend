import React from 'react'
import {ContainerProductCardAdminPage} from "./ProductCardAdminPage-styled"

function ProductCard(props) {
    const {product} = props

  return (
    <ContainerProductCardAdminPage>
        <p>{product.name}</p>
        <p>R$ {product.price}</p>
        <p>quantidade em estoque: {product.qty_stock}</p>
    </ContainerProductCardAdminPage>
  )
}

export default ProductCard