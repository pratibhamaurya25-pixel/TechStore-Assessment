import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from "./components/Navbar";

import {lazy, Suspense} from "react";

const Home = lazy(()=> import("./pages/Home"));
const Products = lazy(()=> import("./pages/Products"));
const Checkout = lazy(()=> import("./pages/Checkout"));

function App() {
  return (
    <Suspense fallback = {<p>Loading...</p>}>
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products/:id" element={<Products />}/>
          <Route path="/checkout" element={<Checkout />}/>

        </Routes>
    </BrowserRouter>
    </Suspense>
  )
}

export default App;