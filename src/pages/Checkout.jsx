import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { CartContext } from "../context/CartContext";
import Cart from "../components/Cart";

import "../styles/checkout.css";

function Checkout() {
  const { dispatch } = useContext(CartContext);

  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);

    dispatch({
      type: "CLEAR_CART",
    });

    setSuccess("🎉 Order placed successfully!");
  }

  return (
    <div className="checkout-container">
      <Cart />

      <div className="checkout-card">
        <h1 className="checkout-title">Checkout</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              {...register("name", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />

            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />

            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label>Shipping Address</label>

            <textarea
              placeholder="Enter shipping address"
              {...register("address", {
                required: "Shipping address is required",
              })}
            />

            {errors.address && (
              <p className="error">{errors.address.message}</p>
            )}
          </div>

          <button className="submit-btn" type="submit">
            Place Order
          </button>
        </form>

        {success && <div className="success-message">{success}</div>}
      </div>
    </div>
  );
}

export default Checkout;
