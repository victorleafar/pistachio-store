import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const whatsappMessage = "Hola!%20Me%20gustaría%20conocer%20más%20sobre%20sus%20productos%20de%20Windbreakers.%20¿Podrían%20brindarme%20más%20información?%20Gracias!";
  
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Limpiar la posición guardada para evitar conflictos
    sessionStorage.removeItem('scrollPosition');
  };

  return (
    <header className="header">
      <Link to="/" onClick={handleLogoClick}>
        <img src="/logo.png" alt="Pistacho Store" className="header-logo" />
      </Link>
      <nav>
        <a href="/">Home</a>
        <a 
          href={`https://wa.me/584129416016?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}
