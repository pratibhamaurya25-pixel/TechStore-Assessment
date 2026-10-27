import { useCallback, useContext, useMemo, useState } from "react";

import useFetch from "../customHooks/useFetch";
import useDebounce from "../customHooks/useDebounce";

import ProductCard from "../components/ProductCard";

import { CartContext } from "../context/CartContext";

import "../styles/home.css";

function Home() {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  const { dispatch } = useContext(CartContext);

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const addToCart = useCallback(
    (product) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    },
    [dispatch],
  );

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products.filter((product) =>
      product.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  }, [products, debouncedSearch]);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  if (error) {
    return <h2>Something went wrong.</h2>;
  }

  return (
    <div className="home-container">
      <h1 className="home-title">Discover Amazing Products</h1>

      <p className="home-subtitle">Find everything you need in one place</p>

      <input
        className="search-box"
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
