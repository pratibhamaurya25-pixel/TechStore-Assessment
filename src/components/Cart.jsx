import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/cart.css";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2 className="cart-title">🛒 Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} />

          <div className="cart-item-info">
            <h3>{item.title}</h3>

            <p className="cart-price">${item.price}</p>
          </div>

          <div className="quantity-buttons">
            <button
              onClick={() =>
                dispatch({
                  type: "UPDATE_QUANTITY",
                  payload: {
                    id: item.id,
                    change: -1,
                  },
                })
              }
            >
              −
            </button>

            <strong>{item.quantity}</strong>

            <button
              onClick={() =>
                dispatch({
                  type: "UPDATE_QUANTITY",
                  payload: {
                    id: item.id,
                    change: 1,
                  },
                })
              }
            >
              +
            </button>
          </div>

          <button
            className="remove-btn"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: item.id,
              })
            }
          >
            Remove
          </button>
        </div>
      ))}

      <div className="cart-total">Total: ${totalPrice.toFixed(2)}</div>
    </div>
  );
}

export default Cart;
