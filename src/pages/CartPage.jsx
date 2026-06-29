import React from "react";
import CartSection from "../components/CartSection";

const CartPage = ({
  cart,
  removeFromCart,
  increaseQty,
  decreaseQty,
}) => {
  return (
    <CartSection
      cart={cart}
      removeFromCart={removeFromCart}
      increaseQty={increaseQty}
      decreaseQty={decreaseQty}
    />
  );
};

export default CartPage;