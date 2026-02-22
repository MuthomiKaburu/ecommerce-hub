import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import toast from "react-hot-toast";
import "./EditProductPage.css"

export default function EditProductModal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, updateProduct } = useContext(ProductContext);

  const productToEdit = products.find(
    (product) => product.id === (id)
  );

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    stock: ""
  });

  useEffect(() => {
    if (productToEdit) {
      setFormData(productToEdit);
    }
  }, [productToEdit]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateProduct(id, formData);
    toast.success("succesfully edited")
    navigate("/products");
  }

  if (!productToEdit) return <p>Loading...</p>;

  return (
    <div className="form-page">
    <div className="form-card">
      <h2 className="form-title">Edit Product</h2>

      <form onSubmit={handleSubmit} className="form">

        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="form-button">
          Save Changes
        </button>

      </form>
    </div>
  </div>
  )
}
