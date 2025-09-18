import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Pages/Product.css'
import { useCart } from './JS-Files/Hooks'
 import { ToastContainer, toast } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css";

const Product = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        // console.log(res.data)
        setData(res.data)
      })

      .catch((err) => {
        console.log(err)
      })
  }, [])
  // console.log(data);
  const cut = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  const { addToCart } = useCart();
  const handleAddToCart = (value) => {
    addToCart(value);
     toast.success("The product has been added to the cart ✅");
    // alert("The product has been added to the cart.✅");
  };




  return (
    <>
      <div className=" CardsProduct container text-center">
        <div className="row align-items-start">
          {data.map((value, index) => (
            <div className="col" key={index}>
              <div className="cardProduct" style={{ width: '18rem' }}>
                <img src={value.image} className="card-img-top" width={200} height={200} alt={value.description} />
                <div className="card-body" key={value.id}>
                  <h5 className="card-title fw-bloder ">{value.title}</h5>
                  <p className="card-text">{cut(value.description, 40)}</p>
                  <p className='Price' style={{ color: 'Skyblue' }}>{value.price}$</p>
                  <Link to={'/Product/Details'} state={{ value }}>
                    <button className='proButton'>Details</button>
                  </Link>
                  <ToastContainer position="top-right" />
                  <button onClick={() => handleAddToCart(value)} className='proButton '> Add to Card</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Product
