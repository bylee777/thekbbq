import { Footer, Navbar } from '../components';
import { About, Menu, Hero } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <Menu />
    </div>
    <div className="relative"></div>
    <Footer />
  </div>
);

export default Home;
