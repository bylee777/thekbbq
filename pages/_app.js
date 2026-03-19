import Head from 'next/head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>The KBBQ – Korean BBQ in Toronto</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.ico" />
      <meta name="description" content="Authentic Korean BBQ in Toronto's Koreatown. Signature marinades, premium cuts, and warm table-side service at 730 Bloor St W." />

      {/* Open Graph */}
      <meta property="og:type" content="restaurant" />
      <meta property="og:title" content="The KBBQ – Korean BBQ in Toronto" />
      <meta property="og:description" content="Authentic Korean BBQ in Toronto's Koreatown. Signature marinades, premium cuts, and warm table-side service at 730 Bloor St W." />
      <meta property="og:image" content="/cover.png" />
      <meta property="og:url" content="https://thekbbq.ca" />
      <meta property="og:site_name" content="The KBBQ" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The KBBQ – Korean BBQ in Toronto" />
      <meta name="twitter:description" content="Authentic Korean BBQ in Toronto's Koreatown. Signature marinades, premium cuts, and warm table-side service at 730 Bloor St W." />
      <meta name="twitter:image" content="/cover.png" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
