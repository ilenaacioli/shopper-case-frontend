import React, { useContext } from 'react'
import { useProtectedPage } from "../../Hooks/useProtectPage"
import GlobalContext from '../../Global/GlobalContext'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { ContainerAdminPage, ContainerProducts } from "./AdminPage-styled"

function AdminPage() {
  useProtectedPage()
  const { products } = useContext(GlobalContext)

  const showProductsCard = products?.map((product) => {
    return (
      <ProductCard
        key={product.id}
        product={product}
      />
    )
  })


  return (
    <ContainerAdminPage>
      <ContainerProducts>{showProductsCard}</ContainerProducts>
    </ContainerAdminPage>
  )
}

export default AdminPage