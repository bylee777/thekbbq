import { Footer, Navbar } from '../components';
import { About, Menu, Feedback, Hero, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <Menu />
    </div>
    <div className="relative" />
    <World />
    <div className="relative">
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
