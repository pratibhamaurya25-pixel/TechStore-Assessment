import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="navbar-section">
      <h1>TechStore</h1>

      <nav className="navbar">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/product/1">Products</NavLink>

        <NavLink to="/checkout">Checkout</NavLink>

        <span>Cart ({cartCount})</span>
      </nav>
    </div>
  );
}

export default Navbar;
