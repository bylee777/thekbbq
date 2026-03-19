import Link from 'next/link';
import { Navbar } from '../components';

const NotFound = () => (
  <div className="min-h-screen overflow-hidden">
    <Navbar />
    <main className="site-shell section-wrap flex flex-col items-center justify-center py-32 text-center">
      <span className="section-tag">404</span>
      <h1 className="mt-4 text-[64px] font-semibold leading-none text-[var(--text-primary)]">
        Page not found
      </h1>
      <p className="mt-4 max-w-[48ch] text-[16px] leading-7 text-[var(--text-muted)]">
        The page you're looking for doesn't exist. Head back home or browse our menu.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="primary-btn">Go Home</Link>
        <Link href="/menuPage#menu" className="secondary-btn">View Menu</Link>
      </div>
    </main>
  </div>
);

export default NotFound;
