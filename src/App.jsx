import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import Cart from "./pages/Cart";

import "./App.css";

function Home() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <>
      {!showProducts ? (
        <main className="landing-page background-image">
          <div className="landing-overlay">
            <div className="landing-content">
              <h1>Welcome to Paradise Nursery</h1>

              <p className="landing-description">
                Discover beautiful houseplants and bring a
                little piece of nature into your home.
              </p>

              <button
                className="get-started"
                onClick={handleGetStarted}
              >
                Get Started
              </button>
            </div>
          </div>
        </main>
      ) : (
        <ProductList />
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/plants"
          element={<ProductList />}
        />

        <Route
          path="/about"
          element={<AboutUs />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;