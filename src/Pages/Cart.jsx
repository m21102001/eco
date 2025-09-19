import React from "react";
import { useCart } from "./JS-Files/Hooks";
import { AiFillFrown } from "react-icons/ai";
import { Link } from 'react-router-dom';
import '../Pages/Cart.css';

const Cart = () => {
  const { cartt, totalPriceV, totalCountV, removeCard, updateQty, clearCart } = useCart();

  return (<>
      <h2 className="shoppingCart">Your Cart</h2>
    <div className="container">

      {cartt.length === 0 ? (
        <div className="emptycard text-center ">
          <div className="card-body">
            <h5 className="card-title">Your cart is empty<AiFillFrown /></h5>
            <p className="card-text">You haven't added any products yet...would you like to take a look?</p>
            <Link to={'/Product'}>
              <button className="cartButton">Go Shopping</button>
            </Link>
          </div>
        </div>

      ) : (
        <>
          <p>Total Items:<span className="numbers">{totalCountV}</span></p>
          <p>Total Price: <span className="numbers">{totalPriceV}$</span></p>
          <ul>
            {cartt.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} width={50} />
                <h5>{item.title}</h5>
                <p>Price: {item.price}$</p>

                <button className="cartButton" onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                <span >Qty:<span className="numbers"> {item.qty}</span ></span>
                <button className="cartButton" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                <button className="cartButton" onClick={() => removeCard(item.id)}>Remove</button>
                <hr />
              </div>
            ))}
          </ul>
          <button className="cartButton" onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
    </>
  );
};

export default Cart;