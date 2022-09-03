import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Order from './pages/Order/Order';
import OrderContent from './pages/OrderContent/OrderContent';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Order />} />
        <Route path="/ordercontent" element={<OrderContent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
