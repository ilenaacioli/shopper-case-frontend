import axios from 'axios'
import React, { useContext } from 'react'
import {useProtectedPage} from "../../Hooks/useProtectPage"
import ProductCardAdminPage from "../../Components/ProductCardAdminPage/ProductCardAdminPage"
import GlobalContext from '../../Global/GlobalContext'

function AdminPage() {
  useProtectedPage()
  const {  products } = useContext(GlobalContext)
    
    const showProductsCard = products?.map((product) => {
      return (
          <ProductCardAdminPage
              key={product.id}
              product={product}
          />
      )
  })


  return (
    <div>
      <h2>AdminPage</h2>
      <div>{showProductsCard}</div>
    </div>
  )
}

export default AdminPage