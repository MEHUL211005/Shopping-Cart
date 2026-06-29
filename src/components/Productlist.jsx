import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-3 gap-6 justify-items-center p-5">
      {products.map((item) => (
        <ProductCard key={item.id} product={item}  addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;