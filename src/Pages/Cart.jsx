// import React from 'react'
//  import { useEffect, useState } from 'react'
// import { AiFillFrown } from "react-icons/ai";
// import { Link } from 'react-router-dom';
// import '../Pages/Cart.css';
// // import { getCart } from './CartFunctions';

// const Cart = () => {
 
//   // useEffect(() => {
//   //   setCart((getCart));
//   // }, [])
//   // console.log(cart);
//   return (
//     <>
//       <h2>Shopping Cart</h2>
//       <div className="container mt-5">
//         {Cart.length === 0 ? (
//           <div className="emptycard text-center ">
//             <div className="card-body">
//               <h5 className="card-title">Your cart is empty<AiFillFrown /></h5>
//               <p className="card-text">You haven't added any products yet...would you like to take a look?</p>
//               <Link to={'/Product'}>
//                 <button className="GoShopping">Go Shopping</button>
//               </Link>
//             </div>

//           </div>
//         )
//           : (
//             <ul>
//               {/* {cart.map((item) => (
//                 <li key={item.id}>
//                   <img src={item.image} width={50} alt={item.title} />
//                   {item.title} - {item.price}$
//                   <br />
//                   Quantity: {item.qty}
//                   <br />

//                 </li>
//               ))} */}
//             </ul>
//           )
//         }
//       </div >
//     </>
//   )
// }

// export default Cart

import React from "react";
import { useCart } from "./JS-Files/Hooks";

const Cart = () => {
  const { cartt, totalPriceV, totalCountV, removeCard, updateQty, clearCart } = useCart();

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalCountV}</p>
      <p>Total Price: {totalPriceV}$</p>
      
      {cartt.length === 0 ? (
        <p>No products in cart</p>
      ) : (
        cartt.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} width={50} />
            <h5>{item.title}</h5>
            <p>Price: {item.price}$</p>
            <p>Qty: {item.qty}</p>
            <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
            <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
            <button onClick={() => removeCard(item.id)}>Remove</button>
          </div>
        ))
      )}

      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
