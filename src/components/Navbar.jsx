import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  return (
    <div className='flex justify-between items-center px-8 py-4 shadow-md bg-gray-200'>
      
      <div className='flex gap-3 items-center'>
        <FaShoppingCart className="text-3xl text-blue-600" />
        <h3>Shopping Cart</h3>
      </div>

      <div className='flex gap-6 items-center'>

        <Link
          to="/"
          className="cursor-pointer hover:text-blue-600 transition"
        >
          Home
        </Link>

        <h3 className="cursor-pointer hover:text-blue-600 transition">
          About Us
        </h3>

        <h3 className="cursor-pointer hover:text-blue-600 transition">
          Products
        </h3>

        <h3 className="cursor-pointer hover:text-blue-600 transition">
          Contact Us
        </h3>

        <Link
          to="/cart"
          className='cursor-pointer hover:text-blue-600 transition flex'
        >
          <FaShoppingCart size={20}/>({totalItems})
        </Link>

      </div>
    </div>
  )
}

export default Navbar