import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="card">
      <img src={product.mainImage} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </Link>
  );
}
