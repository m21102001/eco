import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';
import '../Pages/Product.css'
import { useCart } from './JS-Files/Hooks';


const ProductDetails = () => {
  const value = useLocation().state.value
  
   const { addToCart } = useCart();
      const handleAddToCart = () => {
          addToCart(value);
          alert("The product has been added to the cart.✅");
      };
  return (
    <div>
      <div className="cardProduct mb-3" style={{ maxwidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={value.image} className="img-fluid rounded-start" width={250} alt={value.description} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <ul>
                <p className="card-title"><span className='fw-bolder' style={{ color: '#085e9c' }}>{value.title}</span></p>
                <li>
                  <p className="card-description">{value.description}</p>
                </li>
                <li>
                  <p className="card-category"><span className='fontDetail'>category:</span>{value.category}</p>
                </li>
                <li>
                  <p className="card-rating"><span className='fontDetail'>Rating:</span>{value.rating.rate}</p>
                </li>

                <p className="card-Price"><span className='fontDetail'>{value.price}$</span></p>


                <p className="card-text"></p>
              </ul>
              <Link to={'/Cart'} >
                <button onClick={handleAddToCart} className='proButton'>ِAdd to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProductDetails