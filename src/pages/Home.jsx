import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import bannerVideo from "../assets/banner.mp4";
import femaleImg from "../assets/female.jpg";
import maleImg from "../assets/male.jpg";
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
          <h2>Windbreakers Aesthetic</h2>
          <button onClick={scrollToProducts}><span>Ver colección</span></button>
        </div>
      </section>

      <section className="gender">
        <div className="circle">
          <img src={femaleImg} alt="Femenino" />
          <span>Femenino</span>
        </div>
        <div className="circle">
          <img src={maleImg} alt="Masculino" />
          <span>Masculino</span>
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
