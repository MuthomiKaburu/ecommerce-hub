import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const API_URL = "https://ecommerce-hub-1.onrender.com/products";

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  // Fetch products when app loads
  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => setProducts(data))
      .catch((e) => console.error(e));
  }, []);

  // Add product
  function addProduct(newProduct) {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((r) => r.json())
      .then((data) => {
        setProducts((prev) => [...prev, data]);
        return data
      });
  }

  // Update product
  function updateProduct(id, updatedProduct) {
    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((r) => r.json())
      .then((data) => {
        setProducts((prev) =>
          prev.map((product) =>
product.id === (id) ? data : product          )
        );
      });
  }

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}
