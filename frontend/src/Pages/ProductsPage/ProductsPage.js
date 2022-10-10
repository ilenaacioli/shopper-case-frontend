import React from 'react'
import Cart from '../../Components/Cart/Cart'
import ProductCard from '../../Components/ProductCard/ProductCard'
import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../Constants/Urls"
import { ContainerProducPage, ContainerProducts } from "./ProductsPage-styled"


function ProductsPage() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        axios.get(`${BASE_URL}/products`)
            .then((res) => {
                setProducts(res.data.products)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const onChangeSearch = (event) => {
        setSearchInput(event.target.value)
    }

    const addToCart = (productToAdd) => {
        const foundIndex = cart.findIndex((productInCart) => {
            return productInCart.name === productToAdd.name
        })

        if (foundIndex >= 0) {
            const newCart = [...cart]
            newCart[foundIndex].quantity += 1

            setCart(newCart)
        } else {
            const newCart = [...cart]
            const newProduct = {
                id: productToAdd.id,
                name: productToAdd.name,
                price: productToAdd.price,
                quantity: 1
            }

            newCart.push(newProduct)

            setCart(newCart)
        }

        console.log("carrinho", cart)
    }

    const removeFromCart = (productToRemove) => {

        if (productToRemove.quantity > 1) {
            const newCart = cart.map((product) => {
                if (product.name === productToRemove.name) {
                    product.quantity -= 1
                }

                return product
            })

            setCart(newCart)

        } else {
            const newCart = cart.filter((product) => {
                return product.name !== productToRemove.name
            })

            setCart(newCart)
        }
    }

    const showProductsCard = products?.filter((product) => {
        return product.name
            .toLowerCase()
            .includes(searchInput.toLowerCase())
    }).map((product) => {
        return (
            <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
            />
        )
    })

    return (
        <ContainerProducPage>
            <ContainerProducts>
                <input value={searchInput} onChange={onChangeSearch} />
                <div>
                    {showProductsCard}
                </div>
            </ContainerProducts>
            <div>
                <Cart
                    cart={cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            </div>
        </ContainerProducPage>
    )
}

export default ProductsPage