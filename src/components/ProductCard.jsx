import { useNavigate } from "react-router-dom";
import "./ProductCard.css"

export default function ProductCard({ product }) {
  const navigate = useNavigate();

    return (
    <div className="card">
      <div className="card-content">
        <h2>{product.name}</h2>
        <p className="price">${product.price}</p>
        <p>{product.description}</p>
        <p className="stock">Stock: {product.stock}</p>

        <button
          className="edit-btn"
          onClick={() => navigate(`/products/edit/${product.id}`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
