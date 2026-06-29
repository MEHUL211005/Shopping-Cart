import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, qty: 1 }];
    });

    alert(`${product.name} added to cart`);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const totalItems = cart.reduce(
    (acc, item) => acc + item.qty,
    0
  );

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
    {
      id: 2,
      name: "Phone",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 4,
      name: "Watch",
      price: 5000,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 5,
      name: "Tablet",
      price: 30000,
      image:
        "https://images.unsplash.com/photo-1587033411391-5d9e51cce126",
    },
    {
      id: 6,
      name: "Camera",
      price: 40000,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    },
  ];

  return (
    <div>
      <Navbar totalItems={totalItems} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;