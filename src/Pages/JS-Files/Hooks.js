import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartCount, cartState, totalCount, totalPrice } from "./Atoms";
// ده واخد ال atoms

// هو مش بيدعم  react

export const useCart = () => {
  const [cartt, setCartt] = useRecoilState(cartState);
  const cartCountV = useRecoilValue(cartCount);
  const totalPriceV = useRecoilValue(totalPrice);
  const totalCountV = useRecoilValue(totalCount);
  //
  const addToCart = (Product) => {
    setCartt((pCart) => {
      const exist = pCart.find((item) => item.id === Product.id);
      if (exist) {
        alert("This product is already in the cart ❌");
        return pCart; // ما تزودش الكمية
      } else {
        alert("The product has been added to the cart ✅");
        return [...pCart, { ...Product, qty: 1 }];
      }
    });
    // setCartt((pCart) => {
    //     const exist = pCart.find(item => item.id === Product.id);
    //     if (exist) {
    //         return pCart.map(item => item.id === Product.id ?
    //             { ...item, qty: item.qty + 1 }
    //             : item
    //         );
    //     } else {
    //         return [...pCart, { ...Product, qty: 1 }];
    //     }
    // }
    // )
  };
  // هنستخدمها غي زراير ال+-
  const removeCard = (id) => {
    setCartt((pCart) => pCart.filter((item) => item.id !== id));
  };
  const updateQty = (id, newqty) => {
    if (newqty == 0) {
      removeCard(id);
    } else {
      setCartt((pCart) =>
        pCart.map((item) => (item.id === id ? { ...item, qty: newqty } : item))
      );
    }
  };

  const clearCart = () => {
    setCartt([]);
  };

  return {
    cartt,
    setCartt,
    cartCountV,
    totalPriceV,
    totalCountV,
    addToCart,
    updateQty,
    removeCard,
    clearCart,
  };
};

// هو انهى واحد احنا عملنا لية
