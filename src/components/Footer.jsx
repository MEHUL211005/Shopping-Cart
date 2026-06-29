import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-10 py-6 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">

        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold">MyShop</h2>
          <p className="text-sm text-gray-300 mt-2">
            Your one-stop solution for all shopping needs.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm text-gray-300">Email: support@myshop.com</p>
          <p className="text-sm text-gray-300">Phone: +91 98765 43210</p>
          <p className="text-sm text-gray-300">Delhi, India</p>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <p className="text-sm text-gray-300">Home</p>
          <p className="text-sm text-gray-300">Products</p>
          <p className="text-sm text-gray-300">Cart</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-400 text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;