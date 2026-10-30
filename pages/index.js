import { Footer, Navbar } from '../components';
import { About, Hero, MenuPreview } from '../sections';

const Home = () => (
  <div className="min-h-screen overflow-x-clip">
    <Navbar />
    <main>
      <Hero />
      <About />
      <MenuPreview />
    </main>
    <Footer />
  </div>
);

export default Home;
