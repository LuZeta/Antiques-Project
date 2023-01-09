import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
        <a href="/">Inicio</a>
        <a href="/Login">Cerámica</a>
        <a href="/#">Muebles</a>
        <a href="/#">Arte</a>
        <a href="/#">Nosotros</a>
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
