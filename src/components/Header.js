import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <a href='' className='HeaderLogo'>
        <img src={require('../img/logo.png')} alt='prospresso logo' />
        <h1>prospresso</h1>
      </a>
      
      <div className='HeaderLinks'>
        <a href=''>Home</a>
        <a href=''>Shop</a>
      </div>
    </header>
  );
};

export default Header;
