import React, { useContext } from 'react'
import { useProtectedPage } from "../../Hooks/useProtectPage"
import GlobalContext from '../../Global/GlobalContext'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { ContainerAdminPage, ContainerEditProduct, ContainerProducts } from "./AdminPage-styled"
import useForm from '../../Hooks/useForm'
import { editProduct } from '../../Services/Products'

function AdminPage() {
  useProtectedPage()
  const { products, refreshPage, setRefreshPage } = useContext(GlobalContext)
  const { form, onChange,cleanFields } = useForm({ id: "", name: "", price:"", qty_stock:""})

  const showProductsCard = products?.map((product) => {
    return (
      <ProductCard
        key={product.id}
        product={product}
      />
    )
  })

  const onSubmitForm = (event) => {
    event.preventDefault()
    editProduct(form,cleanFields,refreshPage, setRefreshPage)
  }


  return (
    <ContainerAdminPage>
      <ContainerProducts>{showProductsCard}</ContainerProducts>
      <ContainerEditProduct>
        <h2>Atualizar Produto</h2>
        <form onSubmit={onSubmitForm}>
        <input name={"id"}
          placeholder='Id do produto'
          value={form.id}
          onChange={onChange} />
        <input name={"name"}
          placeholder='Nome do produto'
          value={form.name}
          onChange={onChange} />
          <input name={"price"}
          placeholder='Preço'
          value={form.price}
          onChange={onChange} />
          <input name={"qty_stock"}
          placeholder='Quantidade em estoque'
          value={form.qty_stock}
          onChange={onChange} />
        <button>Atualizar</button>
      </form>
      </ContainerEditProduct>
    </ContainerAdminPage>
  )
}

export default AdminPage