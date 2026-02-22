import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1 className="landing-title">
          E-Commerce App
        </h1>


        <div className="landing-buttons">
          <Link to="/products">
            <button className="primary-btn">View Products</button>
          </Link>

          <Link to="/add-product">
            <button className="secondary-btn">Add Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
