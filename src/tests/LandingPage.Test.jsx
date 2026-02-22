import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

test("renders landing page with buttons", () => {
  render(
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>
  );

  expect(screen.getByText(/E-Commerce Admin Portal/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /View Products/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Add Product/i })).toBeInTheDocument();
});
