import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import AddProductPage from "../pages/AddProductPage";
import { ProductContext } from "../context/ProductContext";

const mockAddProduct = vi.fn(() => Promise.resolve());

test("submits AddProduct form", async () => {
  render(
    <MemoryRouter>
      <ProductContext.Provider value={{ addProduct: mockAddProduct }}>
        <AddProductPage />
      </ProductContext.Provider>
    </MemoryRouter>
  );

  userEvent.type(screen.getByLabelText(/Product Name/i), "Test Product");
  userEvent.type(screen.getByLabelText(/Price/i), "99");
  userEvent.type(screen.getByLabelText(/Description/i), "Test description");
  userEvent.type(screen.getByLabelText(/Stock/i), "10");

  userEvent.click(screen.getByRole("button", { name: /Submit/i }));

  expect(mockAddProduct).toHaveBeenCalledWith({
    name: "Test Product",
    price: "99",
    description: "Test description",
    stock: "10"
  });
});
