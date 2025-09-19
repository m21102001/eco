import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiLoader } from "react-icons/fi";
import { AiFillFrown } from "react-icons/ai";
import '../Pages/Product.css'
import { useCart, useProducts, } from './JS-Files/Hooks'
import "react-toastify/dist/ReactToastify.css";
const Product = () => {
  // const [loading, setLodaing] = useState(true);
  const [CategoryDropdown, setCategoryDropdown] = useState(false);
  const [PriceDropdown, setPriceDropdown] = useState(false);
  const [tempPriceRange, setTempPriceRange] = useState({ min: 0, max: 1000 });

  const [data, setData] = useState([]);

  const cut = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  // addtocart
  const { addToCart } = useCart();
  const handleAddToCart = (value) => {
    addToCart(value);
  };
  // FIlter
  const { allProducts, category, priceRange, searchTerm,
    filteredProducts, avalibleCategory,
    setProductsData,
    filterByCategory, filterByPriceRange, searchProducts,
    resetFilters } = useProducts();

  const applyPriceFilter = () => {
    filterByPriceRange(tempPriceRange.min, tempPriceRange.max);
    setShowPriceDropdown(false);
  };
  const handleSearch = (searchValue) => {
    searchProducts(searchValue);
  };
  // 

  useEffect(() => {
    const category = localStorage.getItem("selectedCategory");
    if (category) {
      filterByCategory(category);
      localStorage.removeItem("selectedCategory"); // امسحه عشان ما يفضلش متخزن
    }
  }, [filterByCategory]);
  return (
    <>
      <div className="page-container">

        <div className="CardsProduct container text-center">

          <div className="row align-items-start">

            {filteredProducts.length > 0 ? (
              filteredProducts.map((value, index) => (
                <div className="col" key={index}>
                  <div className="cardProduct" style={{ width: '18rem' }}>
                    <img src={value.image} className="card-img-top" width={200} height={200} alt={value.description} />
                    <div className="card-body">
                      <h5 className="card-title fw-bloder ">{value.title}</h5>
                      <p className="card-text">{cut(value.description, 40)}</p>
                      <p className='Price' style={{ color: 'Skyblue' }}>{value.price}$</p>

                      <div className="d-flex flex-column gap-2">
                        <Link to={'/Product/Details'} state={{ value }}>
                          <button className='proButton'>Details</button>
                        </Link>
                        <button onClick={() => handleAddToCart(value)} className='proButton '> Add to Card</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))




            ) : (

              <div className="emptycard text-center ">
                <div className="card-body">
                  <h5 className="card-title">This Product is not Found<AiFillFrown /></h5>
                  <p className="card-text">Try again or goShopping </p>
                  <Link to={'/Product'}>
                                <button className="cartButton">Go Shopping</button>
                              </Link>
                </div>
              </div>
            )
            }
          </div>
        </div >
      </div >
    </>
  )
}

export default Product
