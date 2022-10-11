import React, { useEffect, useState } from 'react'
import { ContainerCartItem } from "./Cart-styled"
import axios from 'axios'
import { BASE_URL } from '../../Constants/Urls'
import { makeAnOrder } from "../../Services/Orders"
import useForm from '../../Hooks/useForm'

function Cart(props) {
  const { cart, addToCart, removeFromCart } = props
  const [total, setTotal] = useState(0)

  const { form, onChange, cleanFields } = useForm({ userName: "", deliveryDate: "" })

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

  const onSubmitForm = (event) => {
    event.preventDefault()
    makeAnOrder(form,cart)
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

  return (
    <div>
      <h2>Cart</h2>
      {showCartItems}
      <p>Total: {total.toFixed(2)}</p>

      <form onSubmit={onSubmitForm}>
        <input name={"userName"}
          placeholder='nome'
          value={form.userName}
          onChange={onChange} />
        <input name={"deliveryDate"}
          type='date'
          value={form.deliveryDate}
          onChange={onChange} />
        <button >Fazer pedido</button>
      </form>
    </div>
  )
}

export default Cart