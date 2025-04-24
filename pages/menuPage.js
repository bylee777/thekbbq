'use client';

import { Navbar, Footer } from '../components';
import { Menu } from '../sections';
import OrderAbout from '../sections/OrderAbout';

const MenuPage = () => (
  <div
    className="min-h-screen text-white"
    style={{
      background:
        'linear-gradient(180deg, #5c3b25 0%, #3b2c24 60%, #1e1a18 100%)',
    }}
  >
    <Navbar />
    <div className="relative">
      <OrderAbout />
      <Menu />
    </div>
    <Footer />
  </div>
);

export default MenuPage;
