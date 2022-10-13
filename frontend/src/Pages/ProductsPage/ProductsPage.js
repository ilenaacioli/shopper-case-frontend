import React, { useContext } from 'react'
import Cart from '../../Components/Cart/Cart'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { useEffect, useState } from "react"
import { ContainerProducPage, ContainerProducts, CardDiv, BasketImg } from "./ProductsPage-styled"
import shoppingBasket from "../../Assets/shopping-basket.png"
import GlobalContext from '../../Global/GlobalContext'


function ProductsPage() {
    const { cart, setCart, products, loading } = useContext(GlobalContext)
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        if (cart.length > 0) {
            const newCart = JSON.parse(localStorage.getItem("cart"))
            setCart(newCart)
        }
    }, [])


    const onChangeSearch = (event) => {
        setSearchInput(event.target.value)
    }

    const addToCart = (productToAdd) => {
        const foundIndex = cart?.findIndex((productInCart) => {
            return productInCart.name === productToAdd.name
        })

        if (foundIndex >= 0) {
            const newCart = [...cart]
            newCart[foundIndex].quantity += 1

            setCart(newCart)
            localStorage.setItem("cart", JSON.stringify(newCart))
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
            localStorage.setItem("cart", JSON.stringify(newCart))
        }
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
            localStorage.setItem("cart", JSON.stringify(newCart))

        } else {
            const newCart = cart.filter((product) => {
                return product.name !== productToRemove.name
            })

            setCart(newCart)
            localStorage.setItem("cart", JSON.stringify(newCart))
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


    const showProductsSection = () => {
        if (loading) {
            return (<p>Página carregando</p>)
        } else if (showProductsCard?.length === 0) {
            return (<p>Produto não encontrado :(</p>)
        } else {
            return (
                <CardDiv>{showProductsCard}</CardDiv>
            )
        }
    }

    const showCartSection = () => {
        if (cart === null || cart.length === 0) {
            return (
                <div>
                    <BasketImg src={shoppingBasket} />
                </div>
            )
        }
        else {
            return (<div>
                <Cart
                    cart={cart}
                    setCart={setCart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            </div>)
        }
    }
    return (
        <ContainerProducPage>
            <ContainerProducts>
                <input value={searchInput} onChange={onChangeSearch} placeholder="Busca" />
                <div>
                    {showProductsSection()}
                </div>
            </ContainerProducts>
            {showCartSection()}
        </ContainerProducPage>
    )
}

export default ProductsPage