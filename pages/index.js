import { Footer, Navbar } from '../components';
import { About, Hero } from '../sections';

const Home = () => (
  <div className="min-h-screen overflow-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
    </main>
    <Footer />
  </div>
);

export default Home;
