import React from 'react'
import { useProducts, useRandomProducts } from './JS-Files/Hooks';
import './Home.css'
import { Link, useNavigate } from 'react-router-dom';



const Home = () => {
  const randomProducts = useRandomProducts();
  // const { filterByCategory } = useProducts();
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    localStorage.setItem("selectedCategory", category);
    navigate('/products');
  };

  return (
    <>
      <section className="py-5">
        <div className="row align-items-center ">
          <div className="col-md-6 text-center ">
            <img src='src\img1.jpg' className="img-fluid "width={450} />
          </div>
          <div className="col-md-6">
            <h3 className="SEO d-flex fw-light fs-3" style={{ color: 'skyblue' }}>Why Choose Us?</h3>
            <h6 className="psec1 fw-lighter ">We make your shopping experience easier by offering carefully selected products
              at fair prices and guaranteed quality. Our goal is to provide you with everything
              you need quickly and effortlessly, with trusted service that makes shopping more convenient.</h6>

          </div>
        </div>
      </section>
      <div id="carouselExample" className="carousel slide">
        <h4 className='carouselTitel'>What do we have?</h4>
        <div className="carousel-inner">
          {randomProducts.map((value, index) => (
            <div
              key={value.id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="carousel-center">
                <Link to={'/Product/Details'} state={{value}}>
                <img
                  src={value.image}
                  className="imgCarousel"
                // onClick={() => handleCategoryClick(value.category)}
                />
                </Link>
                  <h3>{value.category}</h3>
              </div>
            </div>
          ))}
        </div>



        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div >
      <div className="go-shopping-wrapper">
        <Link to={'/Product'}>
          <button className="Button">Go Shopping</button>
        </Link>
      </div>

    </>
  )
}

export default Home
