import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const handleClick = () => {
    // Guardar la posición actual del scroll
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
  };

  return (
    <Link to={`/product/${product.id}`} className="card" onClick={handleClick}>
      <img src={product.mainImage} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </Link>
  );
}
