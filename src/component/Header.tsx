import Nav from "./Nav"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './Header.css'

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({viewCart, setViewCart}: PropsType): JSX.Element => {

    const handleCartClick = () => {
        setViewCart(true)
    }

    return (
        <header className="header">
            <input type="checkbox" name="" id="toggler"/>
            <label htmlFor="toggler"><FontAwesomeIcon icon={faBars} /></label>

            <a href="#" className="logo">Serendib<span>.</span></a>

            <nav className="navbar">
                <Link to='/'>Home</Link>
                <Link to="/list" onClick={() => setViewCart(false)}>Shop</Link>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>

            <div className="icons">
                <a href="#" aria-label="Wishlist"><FontAwesomeIcon icon={faHeart} /></a>
                <a href="#" aria-label="User-Profile"><FontAwesomeIcon icon={faUser} /></a>
                <Link
                 to='cart'
                    className="icon-btn"
                    aria-label="Shopping Cart"
                    onClick={handleCartClick}
                >
                    <FontAwesomeIcon icon={faCartShopping} />
                </Link>
            </div>

            <Nav viewCart={viewCart} setViewCart={setViewCart} />
        </header>
    )
}

export default Header
