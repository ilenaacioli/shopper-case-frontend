import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../Constants/Urls'
import GlobalContext from './GlobalContext'

const GlobalState = (props) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${BASE_URL}/products`)
            .then((res) => {
                setProducts(res.data.products)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    const Provider = GlobalContext.Provider

    const values = {
        cart,
        setCart,
        products,
        setProducts,
        loading,
        setLoading
    }

    return (
        <Provider value={values}>
            {props.children}
        </Provider>
    )
}

export default GlobalState