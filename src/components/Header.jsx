import "./Header.css";

export default function Header() {
  const whatsappMessage = "Hola!%20Me%20gustaría%20conocer%20más%20sobre%20sus%20productos%20de%20Windbreakers.%20¿Podrían%20brindarme%20más%20información?%20Gracias!";
  
  return (
    <header className="header">
      <h1>Pistachio Store</h1>
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
