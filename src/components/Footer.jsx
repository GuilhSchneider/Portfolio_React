import githubIcon from "../assets/icons/github.png"
import instagramIcon from "../assets/icons/instagram.png"
import linkedinIcon from "../assets/icons/linkedin.png"

export default function Footer() {
  return (
    <footer id="footer" className="footer" role="contentinfo">
      <h2>Contato</h2>
      <p className="contatoP">Entre em contato:</p>

      <div className="contato-container">

        <a 
          href="https://www.instagram.com/guilhemeschneider?igsh=MXRzMHRka3c5aWp0NA" 
          target="_blank" 
          className="contato-item"
          aria-label="Instagram de Guilherme Schneider"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a 
          href="https://www.linkedin.com/in/guilherme-schneider-5a5a42340/" 
          target="_blank" 
          className="contato-item"
          aria-label="LinkedIn de Guilherme Schneider"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>

        <a 
          href="https://github.com/GuilhSchneider" 
          target="_blank" 
          className="contato-item"
          aria-label="GitHub de Guilherme Schneider"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>

      <p className="footerCopyright">
        © 2025 Guilherme Schneider. Todos os direitos reservados.
      </p>
    </footer>
  );
}
