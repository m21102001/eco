
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useProducts } from "./JS-Files/Hooks";

const SearchProduct = () => {
  const { searchProducts, filteredProducts } = useProducts();
  const location = useLocation();
  console.log(location);

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  useEffect(() => {
    if (query) {
      searchProducts(query);
    }
  }, [query]);

  return (
    <div className="container mt-4">
      <h2>Search Results for: "{query}"</h2>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div key={p.id} className="col-md-4 mb-3">
              <div className="card p-3">
                <h5>{p.name}</h5>
                <p>{p.description}</p>
                <strong>${p.price}</strong>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
