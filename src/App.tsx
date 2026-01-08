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
  const [viewCart, setViewCart] = useState(false)

  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header viewCart={viewCart} setViewCart={setViewCart} />

          {/* Main content */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/list" element={<ProductList />} />
              {/* Optional: keep /cart route if you want a dedicated cart page */}
              {/* <Route path="/cart" element={<Cart />} /> */}
            </Routes>
          </main>

          <Footer />

          {/* Cart Overlay - shown when viewCart is true */}
          {viewCart && <Cart setViewCart={setViewCart} />}
        </div>
      </Router>
    </CartProvider>
  )
}

export default App