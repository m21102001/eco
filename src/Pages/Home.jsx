import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1> Welcome to our Shop</h1>
    <Link to={'./Product'}> 
    <button>
Start Shopping
    </button>
    </Link>
    </>
  )
}

export default Home