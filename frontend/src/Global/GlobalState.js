import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../Constants/Urls'
import GlobalContext from './GlobalContext'
import Swal from 'sweetalert2'

const GlobalState = (props) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(true)
    const [refreshPage, setRefreshPage] = useState(false)

    useEffect(() => {
        axios.get(`${BASE_URL}/products`)
            .then((res) => {
                setProducts(res.data.products)
                setLoading(false)
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err
                })
                setLoading(false)
            })
    }, [refreshPage])

    const Provider = GlobalContext.Provider

    const values = {
        cart,
        setCart,
        products,
        setProducts,
        loading,
        setLoading,
        refreshPage,
        setRefreshPage
    }

    return (
        <Provider value={values}>
            {props.children}
        </Provider>
    )
}

export default GlobalState