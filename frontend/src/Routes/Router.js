import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Components/Header/Header'
import AdminLoginPage from '../Pages/AdminLoginPage/AdminLoginPage'
import AdminPage from '../Pages/AdminPage/AdminPage'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Home from "../Pages/Home/Home"
import ProductsPage from '../Pages/ProductsPage/ProductsPage'


function Router() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route index exact path ="/" element={<Home/>}/>
        <Route path ="/loginAdmin" element={<AdminLoginPage/>}/>
        <Route path ="/estoque" element={<AdminPage/>}/>
        <Route path ="/produtos" element={<ProductsPage/>}/>
        <Route path ="*" element={<ErrorPage/>}/>
    </Routes>
</BrowserRouter>
  )
}

export default Router