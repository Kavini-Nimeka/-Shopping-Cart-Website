import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Cart from './component/Cart'
import ProductList from './component/ProductList'
import { useState } from 'react'

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false)

  const pageContent = viewCart ? <Cart/>:<Cart/>
  const content = (
    <>
    <Header viewCart = {viewCart} setViewCart = {setViewCart}/>
    {pageContent}
    <Footer viewCart = {viewCart}/>
    </>
  )

  return content
}

export default App
