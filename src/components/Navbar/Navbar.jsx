import '../../styles/Navbar/_navbar.scss'
import logo from '../../assets/compu-logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <Link to='/'><img src={logo} className="logo__navbar" alt='logo' /></Link>
                <span className="name">CHMR-STORE</span>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Home</Link>
                    <Link to='/productos/componentes' className="navbar__link">Componentes</Link>
                    <Link to='/productos/equipos' className="navbar__link">Equipos</Link>
                    <Link to='/productos/notebooks' className="navbar__link">Notebooks</Link>
                </nav>
                <CartWidget />
            </div>
        </header >
    )
}
