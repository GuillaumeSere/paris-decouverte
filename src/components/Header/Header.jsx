import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/paris.png";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Tour Eiffel" className="logo" />
        <h1 className="site-title">Paris</h1>
      </div>

      <nav className={`nav ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Accueil</Link>
        <Link to="/actualites" onClick={() => setOpen(false)}>Actualités</Link>
        <Link to="/sorties" onClick={() => setOpen(false)}>Sorties</Link>
        <Link to="/visite" onClick={() => setOpen(false)}>Visite</Link>
      </nav>

      <button className="burger" onClick={() => setOpen(!open)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
}
