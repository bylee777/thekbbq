'use client';

import { Navbar, Footer } from '../components';
import { Menu } from '../sections';

const MenuPage = () => (
  <div className="bg-primary-black min-h-screen text-white">
    <Navbar />
    <div className="relative">
      <Menu />
    </div>
    <Footer />
  </div>
);

export default MenuPage;
