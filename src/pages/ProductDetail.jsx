import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../data/products";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(product.mainImage);
  const [selectedSize, setSelectedSize] = useState("");

  // Scroll para o topo ao entrar na página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Generar mensaje de WhatsApp
  const generateWhatsAppMessage = () => {
    let message = `Hola!%20Me%20interesa%20el%20producto:%20*${encodeURIComponent(product.name)}*%0APrecio:%20${encodeURIComponent(product.price)}`;
    
    if (selectedSize) {
      message += `%0ATalla:%20*${selectedSize}*`;
    }
    
    message += `%0A%0AMe%20gustaría%20obtener%20más%20información%20y%20realizar%20la%20compra.%20Gracias!`;
    
    return message;
  };

  return (
    <>
      <button className="back-button" onClick={() => navigate('/')}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Volver al Catálogo</span>
      </button>
      
      <section className="detail">
        <div className="gallery">
          <img className="main-img" src={activeImage} alt="" />
          <div className="thumbs">
            {product.images.map((img, i) => (
            <img key={i} src={img} onClick={() => setActiveImage(img)} />
          ))}
        </div>
      </div>

      <div className="info">
        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>
        <p className="short-description">{product.description}</p>
        {product.detailedDescription && (
          <p className="detailed-description">{product.detailedDescription}</p>
        )}

        <div className="sizes">
          {product.availableSizes && product.availableSizes.map(size => (
            <button 
              key={size}
              className={selectedSize === size ? "selected" : ""}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <a
          className="whatsapp"
          href={`https://wa.me/584129416016?text=${generateWhatsAppMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Continuar Compra en WhatsApp
        </a>
      </div>
    </section>
    </>
  );
}
