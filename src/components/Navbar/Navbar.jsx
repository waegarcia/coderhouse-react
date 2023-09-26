import logo from "../../assets/compu-logo.png";
import CartWidget from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} className="logo" alt="logo" />
        <span className="name">CHMR-STORE</span>

        <nav className="navbar">
          <a href="#home" className="navbar__link">
            HOME
          </a>
          <a href="#productos" className="navbar__link">
            PRODUCTOS
          </a>
          <a href="#contacto" className="navbar__link">
            CONTACTO
          </a>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};
