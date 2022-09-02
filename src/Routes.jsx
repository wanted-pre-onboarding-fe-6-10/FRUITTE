import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/common/Footer';
import Nav from './components/common/Nav';
import Order from './pages/Order/Order';

const Routes = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Order />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
