import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../stylesCss/NavbarStyles.css";
import logo from "../assets/logo.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
      <nav className="nav" ref={navRef}>
      <button className="btn-link" onClick={showNavbar}><Link to="/">Inicio</Link></button>
      <button className="btn-link" ><Link to="/ItemListContainer/Mobiliario">Muebles</Link></button>
      <button className="btn-link" ><Link to="/ItemListContainer/Ceramica">Cerámica</Link></button>
      <button className="btn-link" ><Link to="/ItemListContainer/Varios">Deco</Link></button>
      <button className="btn-link"  onClick={showNavbar}><Link to="/Login">Ingresa</Link></button>
       <ion-icon name="cart"></ion-icon>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
