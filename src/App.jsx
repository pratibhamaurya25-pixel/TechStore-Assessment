import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const Products = lazy(() => import("./pages/Products"));

const Checkout = lazy(() => import("./pages/Checkout"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback={<h2>Loading page...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/product/:id" element={<Products />} />

          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
