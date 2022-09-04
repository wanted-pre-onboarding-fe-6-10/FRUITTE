import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ProductList from './pages/ProductList/ProductList';
import Order from './pages/Order/Order';
import OrderContent from './pages/OrderContent/OrderContent';
import ProductDetail from './pages/ProductDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/fruitstore" element={<ProductList />} />
        <Route path="/" element={<Order />} />
        <Route path="/ordercontent" element={<OrderContent />} />
        <Route path="/fruitstore/:idx" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
