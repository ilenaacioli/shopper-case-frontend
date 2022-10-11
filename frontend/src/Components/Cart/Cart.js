import React, { useContext, useEffect, useState } from 'react'
import { ContainerCartItem, ContainerCartSection } from "./Cart-styled"
import { makeAnOrder } from "../../Services/Orders"
import useForm from '../../Hooks/useForm'
import GlobalContext from '../../Global/GlobalContext'

function Cart(props) {
   const {  addToCart, removeFromCart } = props
  const { cart, setCart } = useContext(GlobalContext)
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
    <ContainerCartSection>
      <h2>Carrinho</h2>
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
    </ContainerCartSection>
  )
}

export default Cart