import { Footer, Navbar } from '../components';
import {
  About,
  Menu,
  Feedback,
  GetStarted,
  Hero,
  WhatsNew,
  World,
} from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />

      <Menu />
    </div>
    <div className="relative">
      {/* <GetStarted />

      <WhatsNew /> */}
    </div>
    <World />
    <div className="relative">
      {/* <Insights /> */}

      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
