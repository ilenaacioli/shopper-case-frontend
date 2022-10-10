import React, { useEffect, useState } from 'react'
import { ContainerCartItem } from "./Cart-styled"
import axios from 'axios'
import { BASE_URL } from '../../Constants/Urls'

function Cart(props) {
  const { cart, addToCart, removeFromCart } = props
  const [total, setTotal] = useState(0)
  const [userName, setUserName] = useState("")
  const [deliveryDate, setDeliveryDate] = useState("")

  const calculateTotal = () => {
    let total = 0

    cart.map((item) => {
      total = total + item.quantity * item.price
      return total
    })

    setTotal(total)
  }

  useEffect(() => {
    calculateTotal()
  }, [cart])

  const onChangeUserName = (event) => {
    setUserName(event.target.value)
  }

  const onChangeDeliveryDate = (event) => {
    setDeliveryDate(event.target.value)
  }

  const makeAnOrder = () => {
    const body ={
      userName: userName,
    deliveryDate: deliveryDate,
    products: 
        cart
    
    }
    console.log(body)

    axios.post(`${BASE_URL}/orders`,body)
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err.response.data.message)
    })
   
  }

  const showCartItems = cart?.map((item) => {
    return (
      <ContainerCartItem key={item.name}>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <button onClick={() => addToCart(item)}>+</button>
        <p>{item.quantity}</p>
        <button onClick={() => removeFromCart(item)}>-</button>
      </ContainerCartItem>
    )
  })

  console.log(cart)

  return (
    <div>
      <h2>Cart</h2>
      {showCartItems}
      <p>Total: {total.toFixed(2)}</p>
      <input placeholder='nome'
        value={userName}
        onChange={onChangeUserName} />
      <input type='date'
        value={deliveryDate}
        onChange={onChangeDeliveryDate} />
      <button onClick={makeAnOrder}>Fazer pedido</button>
    </div>
  )
}

export default Cart