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
      <nav ref={navRef}>
      <button onClick={showNavbar}><Link to="/">Inicio</Link></button>
      <button onClick={showNavbar}><Link to="/Login">Cerámica</Link></button>
      <button><Link to="/#">Muebles</Link></button>
      <button><Link to="/#">Arte</Link></button>
      <button><Link to="/#">Nosotros</Link></button>
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
