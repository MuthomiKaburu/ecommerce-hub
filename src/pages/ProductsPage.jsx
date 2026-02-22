import { useState, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import "./ProductsPage.css";


export default function ProductsPage() {
  const { products } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredProducts = products.filter(product =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
  <div className="products-page">

    <div className="products-header">
      <h1>Products</h1>

      <div className="header-actions">
        <input
          type="text"
          className="search-input"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          className="add-btn"
          onClick={() => navigate("/add-product")}
        >
          Add Product
        </button>
      </div>
    </div>

    <div className="products-grid">
      {filteredProducts.length === 0 && (
        <p className="no-products">No products found.</p>
      )}

      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>

    <Outlet />
  </div>
);
}
