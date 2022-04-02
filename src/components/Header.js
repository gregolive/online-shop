import '../styles/Header.css';
import '@fortawesome/fontawesome-free/js/all';
import { Link } from "react-router-dom";

const Header = ({ handleClick }) => {
  return (
    <header className="SiteHeader">
      <Link to='/' className='HeaderLogo'>
        <img src={require('../img/logo.png')} alt='prospresso logo' />
        <h1>prospresso</h1>
      </Link>

      <div className='HeaderLinks'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <button type='button' className='Button TransparentButton' onClick={handleClick}>
          <i className='fa-solid fa-cart-shopping'></i>
          <span className='CartNum'>0</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
