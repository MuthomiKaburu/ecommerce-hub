import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AddProductPage from "./pages/AddProductPage";
import ProductsPage from "./pages/ProductsPage";
import EditProductModal from "./components/EditProductModal";
import { Toaster } from "react-hot-toast";
import { ProductProvider } from "./context/ProductContext";

export default function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/edit/:id" element={<EditProductModal />} />




        </Routes>

        <Toaster position="top-center" />
      </BrowserRouter>

    </ProductProvider>


  )
}