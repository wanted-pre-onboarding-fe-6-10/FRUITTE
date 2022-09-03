import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Order from './pages/Order/Order';
import RegisterList from './pages/RegisterList/RegisterList';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Order />} />
        <Route path="/register_list" element={<RegisterList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
