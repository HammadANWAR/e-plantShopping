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
  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <p className="welcome-text">WELCOME TO</p>

          <h1>Paradise Nursery</h1>

          <p className="landing-description">
            Discover beautiful houseplants and bring a little
            piece of nature into your home.
          </p>

          <Link to="/plants" className="get-started">
            Get Started
          </Link>
        </div>
      </div>
    </main>
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