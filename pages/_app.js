// import Head from 'next/head';

// import '../styles/globals.css';

// const MyApp = ({ Component, pageProps }) => (
//   <>
//     <Head>
//       <title>The KBBQ</title>
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <link rel="icon" href="/logo.ico" />
//     </Head>
//     <Component {...pageProps} />
//   </>
// );

// export default MyApp;
import '../styles/globals.css'; // or './globals.css' if you're using Tailwind

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
