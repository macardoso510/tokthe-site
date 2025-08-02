import { Outlet, Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <a href="/">
              <img src="/toktheLogo.png" alt="Tokthe Sushi" />
            </a>
          </div>
          <nav className="nav-links">
            <Link to="/sobre">Sobre</Link>
            <Link to="/valores">Valores</Link>
            <Link to="/cardapio">Cardápio</Link>
            <Link to="/trabalhe">Trabalhe Conosco</Link>
          </nav>
          <div className="header-actions">
            <button className="reservas-btn">RESERVAS</button>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-tripadvisor"></i>
            </a>
          </div>
        </div>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </>
  );
}
