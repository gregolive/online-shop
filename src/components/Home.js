import '../styles/Home.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className='Home'>
      <div className='HomeWrapper'>
        <h2 className='HeroText'>Your one stop shop for high quality espresso tools!</h2>
        <Link to='/shop'>
          <button type='button' className='Button PrimaryButton'>Shop now</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
