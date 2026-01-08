import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className='home' id='home'>

        <div className='content'>
            <h3>Serendib Perfumes</h3>
            <span>DISCOVER YOUR SIGNATURE SCENT</span>
            <p>Elegance in Every Drop</p>
            <Link to="/list" className='btn' onClick={() => setViewCart(false)}>Shop Now</Link>
        </div>
    </section>
  )
}

export default Home
