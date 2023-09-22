import { useEffect, useState } from "react";
import "./Shop.css";

// Composant pour afficher un produit individuel
function Product({ product, addToCart }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const description = showFullDescription
    ? product.description
    : product.description.slice(0, 100) + "...";

  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <p>Price: ${product.price}</p>
        <h2>{product.title}</h2>
        <p className="product-description">{description}</p>
        {product.description.length > 100 && (
          <button onClick={toggleDescription}>
            {showFullDescription ? "Voir moins" : "Voir plus"}
          </button>
        )}
        <p>Category: {product.category}</p>
        <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        <button onClick={() => addToCart(product)}>Ajouter à mon panier</button>
      </div>
    </div>
  );
}

/**
 * Composant Shop qui affiche une liste de produits et un panier.
 * @returns {JSX.Element} Composant Shop.
 */
function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="shop-container">
      <div className="cart-button">
        <button onClick={toggleCart}>
          Cart ({cart.length})
        </button>
        {isCartOpen && (
          <div className="cart-popup">
            <h2 style={{color: "black"}}>Mon panier </h2>
            <button onClick={toggleCart}>Close</button>
            {cart.length === 0 ? (
              <p>Votre panier est vide.</p>
            ) : (
              <ul>
                {cart.map((product) => (
                  <li key={product.id}>
                    {product.title} - ${product.price}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
