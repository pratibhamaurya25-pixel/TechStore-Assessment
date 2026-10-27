import { memo } from "react";
import { Link } from "react-router-dom";
import "../styles/productCard.css";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <p className="product-price">${product.price}</p>

      <div className="product-buttons">
        <button className="add-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>

        <Link className="details-btn" to={`/product/${product.id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
}

export default memo(ProductCard);
