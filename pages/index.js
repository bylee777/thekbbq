// import { Footer, Navbar } from '../components';
// import { About, Menu, Hero } from '../sections';

// const Home = () => (
//   <div className="bg-primary-black overflow-hidden">
//     <Navbar />
//     <Hero />
//     <div className="relative">
//       <About />
//       <Menu />
//     </div>
//     <div className="relative" />
//     <Footer />
//   </div>
// );

// export default Home;

const Home = () => (
  <div
    style={{
      backgroundColor: '#000',
      color: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
    }}
  >
    <h1>Hello from The KBBQ!</h1>
    <p>If you can see this, your Vercel deployment is working 🎉</p>
  </div>
);

export default Home;
