import React, { useState, useEffect, useId, useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import "../components/EditProductPage.css"
import { ProductContext } from "../context/ProductContext";


export default function AddProductPage() {
    const [formData, setFormdata] = useState({
        name: "",
        price: "",
        description: "",
        stock: ""
    });
    const { addProduct } = useContext(ProductContext);


    const ref = useRef()
    const userId = useId()
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        ref.current.focus()
    }, [])


    function handleChange(e) {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value

        });

    }

    function handleSubmit(e) {
        e.preventDefault()
        const newErrors = {}

        if (!formData.name.trim()) newErrors.name = "please ente the product name";
        if (!formData.price.trim()) newErrors.price = "please a valid price";
        if (!formData.description.trim()) newErrors.description = "please enter a valid description";
        if (!formData.stock.trim()) newErrors.stock = "please enter the stock available";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            addProduct(formData);
  toast.success("Successfully posted!");
  navigate("/products");

            setFormdata({
                name: "",
                price: "",
                description: "",
                stock: ""
            })




        }





    }
return (
  <div className="form-page">
    <div className="form-card">
      <h2 className="form-title">Add New Product</h2>

      <form onSubmit={handleSubmit} className="form">

        <div className="form-group">
          <label htmlFor={userId}>Product Name</label>
          <input
            type="text"
            id={userId}
            name="name"
            value={formData.name}
            ref={ref}
            onChange={handleChange}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
          {errors.price && <p className="error-text">{errors.price}</p>}
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && <p className="error-text">{errors.description}</p>}
        </div>

        <div className="form-group">
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
          />
          {errors.stock && <p className="error-text">{errors.stock}</p>}
        </div>

        <button type="submit" className="form-button">
          Add Product
        </button>

      </form>
    </div>
  </div>
);


}
