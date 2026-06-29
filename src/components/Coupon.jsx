import React from "react";

const Coupon = ({setCoupon, coupon, applyCoupon}) => {
  return (
    <div className="rounded-xl border shadow-md p-5 bg-white w-full mx-auto mt-6 flex flex-col gap-3">
      
      <h2 className="text-lg font-semibold text-center">
        Apply Coupon Code
      </h2>

      <input
        type="text"
        placeholder="Enter Coupon Code"
        className="border p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
         value={coupon}
    onChange={(e) => setCoupon(e.target.value)}
      />

      <button onClick={applyCoupon} className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        Apply
      </button>

    </div>
  );
};

export default Coupon;