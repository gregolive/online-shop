import '../styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import Product from './Product';
import Footer from './Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:productName' element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
