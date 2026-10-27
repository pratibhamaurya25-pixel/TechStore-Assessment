import { useContext } from "react";
import { useParams } from "react-router-dom";

import useFetch from "../customHooks/useFetch";
import { CartContext } from "../context/CartContext";
import "../styles/products.css";

function Products() {
  const { id } = useParams();

  const { dispatch } = useContext(CartContext);

  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Something went wrong.</h2>;
  }

  function handleAddToCart() {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <img
          className="details-image"
          src={product.image}
          alt={product.title}
        />

        <div>
          <span className="details-category">{product.category}</span>

          <h1 className="details-title">{product.title}</h1>

          <h2 className="details-price">${product.price}</h2>

          <p className="details-description">{product.description}</p>

          <button className="details-add-btn" onClick={handleAddToCart}>
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;



