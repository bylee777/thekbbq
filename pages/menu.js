'use client';

import { Navbar, Footer } from '../components';

const Menu = () => (
  <div className="bg-primary-black min-h-screen text-white">
    <Navbar />

    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Menu</h1>

      {/* Meat Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 border-b border-gray-500 pb-1">
          🥩 Meats
        </h2>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Beef Short Ribs</span>
            <span>$24.99</span>
          </li>
          <li className="flex justify-between">
            <span>Marinated Pork Belly</span>
            <span>$19.99</span>
          </li>
          <li className="flex justify-between">
            <span>Spicy Chicken Thighs</span>
            <span>$17.99</span>
          </li>
        </ul>
      </section>

      {/* Combos */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 border-b border-gray-500 pb-1">
          🍱 Combos
        </h2>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>BBQ for Two</span>
            <span>$42.99</span>
          </li>
          <li className="flex justify-between">
            <span>Family Feast</span>
            <span>$84.99</span>
          </li>
        </ul>
      </section>

      {/* Sides */}
      <section>
        <h2 className="text-2xl font-semibold mb-3 border-b border-gray-500 pb-1">
          🍚 Sides
        </h2>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Kimchi</span>
            <span>$4.99</span>
          </li>
          <li className="flex justify-between">
            <span>Steamed Rice</span>
            <span>$2.50</span>
          </li>
          <li className="flex justify-between">
            <span>Seaweed Salad</span>
            <span>$5.50</span>
          </li>
        </ul>
      </section>
    </div>

    <Footer />
  </div>
);

export default Menu;
