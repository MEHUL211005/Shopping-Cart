const ProductCard = ({ product , addToCart}) => {
  return (
    <div className="flex flex-col rounded-xl border shadow-md p-4 gap-3 w-72 hover:shadow-xl">
      
      <div>{product.id}</div>

      <img
        className="h-48 w-full object-cover rounded-lg"
        src={product.image}
        alt={product.name}
      />

      <div>Item Name: {product.name}</div>

      <div>Price: ₹{product.price}</div>

      <button onClick={()=>addToCart(product)}className="bg-blue-600 rounded-lg text-white py-2 hover:bg-blue-700">
        Add to Cart
      </button>
      
    </div>
  );
};

export default ProductCard;