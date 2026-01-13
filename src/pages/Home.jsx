import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import bannerVideo from "../assets/banner.mp4";
import femaleImg from "../assets/mujeres.jpg";
import maleImg from "../assets/hombres.jpg";
import "./Home.css";

export default function Home() {
  const scrollToProducts = () => {
    const productsSection = document.querySelector('.products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={bannerVideo} type="video/mp4" />
        </video>
        <div className="hero-content">
          <h2>
            <span className="hero-line-1">¡Te acompañamos en tu </span>
            <span className="hero-line-2">próxima aventura!</span>
          </h2>
          <button onClick={scrollToProducts}><span>Ver colección</span></button>
        </div>
      </section>

      <section className="gender">
        <div className="gender-card">
          <img src={maleImg} alt="Hombres" />
          <div className="gender-overlay">
            <h3>Hombres</h3>
          </div>
        </div>
        <div className="gender-card">
          <img src={femaleImg} alt="Mujeres" />
          <div className="gender-overlay">
            <h3>Mujeres</h3>
          </div>
        </div>
      </section>

      <section className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}
