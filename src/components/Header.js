import { useState } from 'react';
import '../styles/Header.css';
import '@fortawesome/fontawesome-free/js/all';
import { Link } from "react-router-dom";

const Header = ({ openCart, itemCount }) => {
  const [links, setLinks] = useState(false);

  const headerLinks = (links) ? 'HeaderLinks Open' : 'HeaderLinks';

  return (
    <header className="SiteHeader">
      <button type='button' className='Button TransparentButton MenuButton' onClick={() => setLinks(!links)}>
        <i className='fa-solid fa-bars'></i>
      </button>

      <Link to='/' className='HeaderLogo'>
        <img src={require('../img/logo.png')} alt='prospresso logo' />
        <h1>prospresso</h1>
      </Link>

      <div className={headerLinks}>
        <Link to='/' onClick={() => setLinks(false)}>Home</Link>
        <Link to='/shop' onClick={() => setLinks(false)}>Shop</Link>
      </div>

      <button type='button' className='Button TransparentButton CartButton' onClick={openCart}>
        <i className='fa-solid fa-cart-shopping'></i>
        <span className='CartNum'>{itemCount}</span>
      </button>
    </header>
  );
};

export default Header;
