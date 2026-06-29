import React from "react";
import ProductList from "../components/Productlist";

const Home = ({ products, addToCart }) => {
  return (
    <ProductList
      products={products}
      addToCart={addToCart}
    />
  );
};

export default Home;