'use client';

import { Navbar, Footer } from '../components';
import { Menu } from '../sections';

const MenuPage = () => (
  <div className="min-h-screen overflow-x-clip">
    <Navbar />
    <main className="pb-4">
      <Menu />
    </main>
    <Footer />
  </div>
);

export default MenuPage;
