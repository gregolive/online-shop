import '../styles/Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to='/' className='HeaderLogo'>
        <img src={require('../img/logo.png')} alt='prospresso logo' />
        <h1>prospresso</h1>
      </Link>

      <div className='HeaderLinks'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
      </div>
    </header>
  );
};

export default Header;
