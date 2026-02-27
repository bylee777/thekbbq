'use client';

import { Navbar, Footer } from '../components';
import { Menu } from '../sections';
import OrderAbout from '../sections/OrderAbout';

const MenuPage = () => (
  <div className="min-h-screen overflow-hidden">
    <Navbar />
    <main className="pb-4">
      <OrderAbout />
      <Menu />
    </main>
    <Footer />
  </div>
);

export default MenuPage;
