import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ProductList from './pages/ProductList/ProductList';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/fruitstore" element={<ProductList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
