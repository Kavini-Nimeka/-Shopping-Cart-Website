import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import Footer from './component/Footer'
import Cart from './component/Cart'
import ProductList from './component/ProductList'
import { CartProvider } from './context/CartProvider'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <CartProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/list' element={<ProductList/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
      </Router>
      </CartProvider>
    </div>
  )
}

export default App
