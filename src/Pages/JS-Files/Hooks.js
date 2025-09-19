import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { avalibleCategorySelector, cartCount, cartState, categoryAtom, priceRangeState, productFilterSelector, productsState, searchAtom, totalCount, totalPrice } from "./Atoms";
import { useEffect } from "react";
import axios from "axios";

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

// Filter
export const useProducts = () => {
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        // console.log(res.data)
        setProductsData(res.data)
      })

      .catch((err) => {
        console.log(err)
      })
  }, [])
  const [allProducts, setallProducts] = useRecoilState(productsState);
  const [category, setcategory] = useRecoilState(categoryAtom);
  const [priceRange, setpriceRange] = useRecoilState(priceRangeState);
  const [searchTerm, setsearchTerm] = useRecoilState(searchAtom);
  const filteredProducts = useRecoilValue(productFilterSelector);
  const avalibleCategory = useRecoilValue(avalibleCategorySelector);
  // const stats = useRecoilValue(filterStatsSelector);
  // maxPrice
  const setProductsData = (productsData) => {
    setallProducts(productsData);
    // Set initial price range based on products
    if (productsData.length > 0) {
      const prices = productsData.map(p => p.price);
      const minPrice = Math.floor(Math.min(...prices));
      const maxPrice = Math.ceil(Math.max(...prices));
      setpriceRange(prev => ({ ...prev, max: maxPrice }));
    }
  };

  // functions
  const filterByCategory = (cat) => setcategory(cat);
  const filterByPriceRange = (min, max) => setpriceRange({ min, max });
  const searchProducts = (term) => setsearchTerm(term);

  // Reset
  const resetFilters = () => {
    setcategory('all');
    setpriceRange({ min: 0, max: 1000 });
    setsearchTerm('');
  };
  return {
    allProducts, setallProducts,
    category, setcategory,
    priceRange, setpriceRange,
    searchTerm, setsearchTerm,
    filteredProducts, avalibleCategory,
    setProductsData,
    filterByCategory, filterByPriceRange, searchProducts,
    resetFilters
  };

}
export const useRandomProducts = () => {
  const products = useRecoilValue(productsState);
  const categories = [...new Set(products.map(p => p.category))];
  const randomProducts = categories.map(cat => {
    const productsInCat = products.filter(p => p.category === cat);
    const randomIndex = Math.floor(Math.random() * productsInCat.length);
    return productsInCat[randomIndex];
  });

  return randomProducts;
};