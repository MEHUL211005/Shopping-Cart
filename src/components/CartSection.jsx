import { useState } from "react";
import Coupon from "./Coupon";
import { FaTrash } from "react-icons/fa";

const CartSection = ({ cart, removeFromCart, increaseQty, decreaseQty }) => {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isApplied, setIsApplied] = useState(false);
  const [message, setMessage] = useState("");

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const totalItems = cart.reduce(
    (acc, item) => acc + item.qty,
    0
  );

  const applyCoupon = () => {
    if (coupon === "FREE20") {
      setDiscount(totalPrice * 0.2);
      setIsApplied(true);
      setMessage("Coupon applied successfully!");
    } else {
      setDiscount(0);
      setIsApplied(false);
      setMessage("Invalid Coupon");
    }
  };

  return (
    <div className="p-5 flex flex-col gap-6">

      {/* CART ITEMS */}
      <div className="border rounded-xl p-4">
        <h2 className="text-xl font-semibold mb-3">Cart Items</h2>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-5 items-center border-b py-2 gap-4"
            >
              {/* NAME */}
              <span className="truncate">{item.name}</span>

              {/* PRICE */}
              <span>₹{item.price}</span>

              {/* QUANTITY */}
              <div className="flex items-center gap-2 justify-center">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-2 border"
                >
                  -
                </button>

                <span>Qty: {item.qty}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-2 border"
                >
                  +
                </button>
              </div>

              {/* EMPTY COLUMN (alignment fix) */}
              <div></div>

              {/* DELETE ICON */}
              <div className="flex justify-end">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* BILLING SECTION */}
      <div className="border rounded-xl p-4 flex flex-col gap-3">

        <h2 className="text-xl font-semibold">Billing Details</h2>

        <div>Total Items: {totalItems}</div>

        <div>Original Price: ₹{totalPrice}</div>
        <div>Discount: ₹{discount}</div>

        <hr />

        <div className="font-bold text-lg">
          Final Price: ₹{totalPrice - discount}
        </div>

        {/* MESSAGE */}
        {message && (
          <p className="text-sm font-medium">
            {message}
          </p>
        )}

        {/* COUPON */}
        <Coupon
          setCoupon={setCoupon}
          coupon={coupon}
          applyCoupon={applyCoupon}
        />
      </div>

    </div>
  );
};

export default CartSection;