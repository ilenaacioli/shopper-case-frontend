import React from 'react'
import Cart from '../../Components/Cart/Cart'
import ProductCard from '../../Components/ProductCard/ProductCard'


function ProductsPage() {
    return (
        <div>
            <h1>ProductsPage</h1>
            <ProductCard></ProductCard>
            <Cart></Cart>
        </div>
    )
}

export default ProductsPage