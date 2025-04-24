import { Footer, Navbar } from '../components';
import { About, Hero } from '../sections';

const Home = () => (
  <div className="bg-kbbq-gradient overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
    </div>
    <div className="relative" />
    <Footer />
  </div>
);

export default Home;
