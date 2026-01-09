import "./Footer.css";

export default function Footer() {
  const whatsappMessage = "Hola!%20Me%20gustaría%20conocer%20más%20sobre%20sus%20productos%20de%20Windbreakers.%20¿Podrían%20brindarme%20más%20información?%20Gracias!";
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Pistachio Store</h3>
          <p>Windbreakers minimalistas y elegantes para tu estilo único.</p>
        </div>

        <div className="footer-section">
          <h4>Navegación</h4>
          <a href="/">Home</a>
          <a 
            href={`https://wa.me/584129416016?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacto
          </a>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <a href="https://www.instagram.com/juanpistacchio/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/JohnBraandon" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.tiktok.com/@juan.pistacchio" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <a 
            href={`https://wa.me/584129416016?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp: +58 412-9416016
          </a>
          <a 
            href={`https://wa.me/584129416016?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escríbenos
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Pistachio Store. Todos los derechos reservados.</p>
        <p className="developer-credit">
          Desarrollado por{" "}
          <a 
            href="https://www.linkedin.com/in/victorleafar/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="developer-link"
          >
            Victor Martinez
          </a>
          {" • "}
          <a 
            href="https://www.instagram.com/vrmc.consultoria/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="developer-link"
          >
            @vrmc.consultoria
          </a>
        </p>
      </div>
    </footer>
  );
}
