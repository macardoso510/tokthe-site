import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <a href="/">
              <img src="/toktheLogo.png" alt="Tokthe Sushi" />
            </a>
          </div>
          <nav className={`nav-links ${menuAberto ? "aberto" : ""}`}>
            <Link to="/sobre" onClick={() => setMenuAberto(false)}>
              Sobre
            </Link>
            <Link to="/valores" onClick={() => setMenuAberto(false)}>
              Valores
            </Link>
            <Link to="/cardapio" onClick={() => setMenuAberto(false)}>
              Cardápio
            </Link>
            <Link to="/trabalhe" onClick={() => setMenuAberto(false)}>
              Trabalhe Conosco
            </Link>
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
            {/* Ícone do menu hambúrguer */}
            <button
              className="menu-hamburger"
              onClick={() => setMenuAberto((v) => !v)}
              aria-label="Abrir menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </>
  );
}
