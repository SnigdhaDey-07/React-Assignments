import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Rose Gold Headphones",
    category: "Electronics",
    price: 2499,
    image: "🎧",
  },
  {
    id: 2,
    name: "Lavender Smart Watch",
    category: "Electronics",
    price: 3299,
    image: "⌚",
  },
  {
    id: 3,
    name: "Blush Sneakers",
    category: "Fashion",
    price: 1999,
    image: "👟",
  },
  {
    id: 4,
    name: "Cute Everyday Bag",
    category: "Accessories",
    price: 1499,
    image: "👜",
  },
  {
    id: 5,
    name: "Pink Sunglasses",
    category: "Fashion",
    price: 999,
    image: "🕶️",
  },
  {
    id: 6,
    name: "Pastel Coffee Mug",
    category: "Home",
    price: 499,
    image: "☕",
  },
];

function ProductList() {
  return (
    <section className="products-section">
      <div className="section-title">
        <span>♡</span>
        <h2>Our Lovely Collection</h2>
        <span>♡</span>
      </div>

      <p className="section-subtitle">
        Little things that make every day prettier ✨
      </p>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;