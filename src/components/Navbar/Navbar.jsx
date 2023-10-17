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
                    <Link to='/productos/verduleria' className="navbar__link">Verduleria</Link>
                    <Link to='/productos/panaderia' className="navbar__link">Panaderia</Link>
                    <Link to='/productos/carniceria' className="navbar__link">Carniceria</Link>
                </nav>
                <CartWidget />
            </div>
        </header >
    )
}