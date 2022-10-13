import React, { useContext, useEffect, useState } from 'react'
import { ContainerCartItem, ContainerCartSection, ItemSection, ButtonAdd, ButtonRemove, ProductName, OrderButton } from "./Cart-styled"
import { makeAnOrder } from "../../Services/Orders"
import useForm from '../../Hooks/useForm'
import GlobalContext from '../../Global/GlobalContext'

function Cart(props) {
  const { addToCart, removeFromCart } = props
  const { cart } = useContext(GlobalContext)
  const [total, setTotal] = useState(0)

  const { form, onChange } = useForm({ userName: "", deliveryDate: "" })

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
    makeAnOrder(form, cart)
  }

  const showCartItems = cart?.map((item) => {
    return (
      <ContainerCartItem key={item.name}>

        <ProductName>{item.name.toLowerCase()}</ProductName>
        <p>R$ {item.price}</p>
        <div>
          <ButtonAdd onClick={() => addToCart(item)}>+</ButtonAdd>
          <p>{item.quantity}</p>
          <ButtonRemove onClick={() => removeFromCart(item)}>-</ButtonRemove>
        </div>
      </ContainerCartItem>
    )
  })

  return (
    <ContainerCartSection>
      <h2>Carrinho</h2>
      <ItemSection>
        {showCartItems}
      </ItemSection>
      <h2>Total: R$ {total.toFixed(2)}</h2>

      <form onSubmit={onSubmitForm}>
        <input name={"userName"}
          placeholder='Nome'
          value={form.userName}
          onChange={onChange} />
        <input name={"deliveryDate"}
          type='date'
          value={form.deliveryDate}
          onChange={onChange} />
        <OrderButton>FAZER PEDIDO</OrderButton>
      </form>
    </ContainerCartSection>
  )
}

export default Cart