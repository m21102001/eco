import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillShopping } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

import '../Pages/Basis.css'
import { useCart, useProducts } from './JS-Files/Hooks';
const Basis = () => {
  const { totalCountV } = useCart();
  const { searchProducts, searchTerm, filterByCategory, avalibleCategory } = useProducts();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [isIconSeach, setisIconSeach] = useState(false);
  const [navbarSearchTerm, setNavbarSearchTerm] = useState(
      localStorage.getItem('navbarSearchTerm') || ''
  );
  const navigate = useNavigate();

  // 
  useEffect(() => {
  localStorage.setItem('navbarSearchTerm', navbarSearchTerm);
}, [navbarSearchTerm]);

  const handleNavbarSearch = (e) => {
    e.preventDefault();
    if (navbarSearchTerm.trim()) {
      e
      searchProducts(navbarSearchTerm);
       navigate(`/Product`)
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* logo */}
          <div className="d-flex align-items-center gap-2" >
            <Link className='text-decoration-none' to={'/'}>
              <AiOutlineShoppingCart size={28} color="Skyblue" />
              <span style={{ fontWeight: "bold", fontSize: "20px", color: 'whitesmoke' }}>MyShop</span>
            </Link>
          </div>
          {/* Search */}
          <div className="d-flex align-items-center gap-3">
            <div className="navbar-search">
              <button
                className="search-icon-btn"
                onClick={() => setisIconSeach(!isIconSeach)}
              >
                <AiOutlineSearch color="skyblue" size={30} />
              </button>
              {isIconSeach && (
                <div className="search-dropdown p-3">
                  <form className="d-flex flex-column" role="search" onSubmit={handleNavbarSearch}>
                    <input
                      className="form-control mb-2"
                      type="search"
                      placeholder="Search products..."
                      value={navbarSearchTerm}
                      onChange={(e) => setNavbarSearchTerm(e.target.value)}
                    />
                    <button className="searchButton" type="submit">
                      Search
                    </button>
                    {searchTerm && (
                      <small className="text-muted mt-1">
                        searchTerm: "{searchTerm}"
                      </small>
                    )}
                  </form>
                </div>
              )}
            </div>
            {/* cartLogo */}

            <Link to={'/Cart'}>
              <div style={{ position: 'relative' }}>
                <button className='CartIcon'>
                  <AiFillShopping size={42} color="Skyblue" />
                  {totalCountV >= 0 && (
                    <span style={{
                      position: 'absolute',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      top: '60%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: 'black',
                    }}>
                      {totalCountV}
                    </span>
                  )}
                </button>
              </div>
            </Link>


          </div>

        </div>
      </nav>
      {/* sidebar */}
      <button className="sidebarOpen" onClick={() => setIsOpen(true)}>
        <span style={{ color: 'skyblue' }}>➤</span>
      </button>
      <div className={`sidebar-drawer ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}><AiOutlineClose /></button>
        <h3>Welcome 😊</h3>
        <ul>
          <li>
            <button
              className="linkSideBar"
              onClick={() => {
                navigate("/Home");
                setIsOpen(false);
              }}
            >

              🏠 Home
            </button>
          </li>
          <li>
            <button
              className="linkSideBar"
              onClick={() => setIsDropdown(!isDropdown)}
              style={{ display: "flex", justifyContent: "space-between", width: "100%" }}
            >
              🛍 Products {isDropdown ? "▲" : "▼"}
            </button>
            {isDropdown && (
              <ul className="dropdown-list">
                {avalibleCategory.map(cat => (
                  <li key={cat}>
                    <button
                      className="linkSideBar"
                      onClick={() => {
                        filterByCategory(cat);
                        navigate("/Product");
                        setIsOpen(false);
                      }}
                    >
                      {cat}
                    </button>
                  </li>
                )

                )

                }
              </ul>
            )}
          </li>




          <li>
            <button
              className="linkSideBar"
              onClick={() => {
                navigate("/Cart");
                setIsOpen(false);
              }}
            >

              🛒 Cart
            </button>


          </li>

        </ul>

      </div >


      <button id="top-bt" className="btntop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><AiOutlineArrowUp color="Skyblue" /></button>


    </>

  )
}

export default Basis