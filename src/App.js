/* global $ */

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import ChatboxSidebar from "./components/ChatboxSidebar";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import Products from "./components/Products";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Categories from "./components/Categories";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

/**
 * Owl Carousel initialization function
 */
const initOwlCarousel = () => {
  if (window.$) {
    $(".service-carousel").owlCarousel({
      autoplay: true,
      dots: false,
      responsive: {
        0: {
          loop: true,
          items: 1,
        },
        768: {
          loop: false,
          items: 3,
        },
      },
    });

    $(".exclusive-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 20,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1200: {
          loop: false,
          items: 3,
        },
      },
    });

      $(".product-carousel").owlCarousel({
          loop: true,
          autoplay: true,
          margin: 20,
          dots: false,
          nav: true,
          responsive: {
              0: {
                  items: 1
              },
              768: {
                  items: 3
              },
              1200: {
                  items: 4
              }
          }
      });
  } else {
    console.error("jQuery not loaded.");
  }
};

/**
 * App component
 */
function App() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const toggleProductsWidth = (isOpen) => {
    setIsChatboxOpen(isOpen);
  };

  // Get current location to re-initialize Owl Carousel when the route changes
  const location = useLocation();

  useEffect(() => {
    initOwlCarousel(); // Initialize carousel on route change
  }, [location]); // Trigger on route change

  return (
    <div>
      <div>
        <ChatboxSidebar toggleProductsWidth={toggleProductsWidth} />
      </div>
      <div className={`custom-transition ${isChatboxOpen ? "custom-margin" : "mr-0"}`}>
        <Preloader />
        <Header />
        <Routes>
          <Route path="/" element={<Home isChatboxOpen={isChatboxOpen} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

/**
 * Main App wrapped with Router
 */
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
