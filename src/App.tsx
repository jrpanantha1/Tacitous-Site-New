import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { metaFor } from './routes';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Blueprint from './pages/Blueprint';
import Services from './pages/Services';
import Sectors from './pages/Sectors';
import Partners from './pages/Partners';
import Press from './pages/Press';
import PressPost from './pages/PressPost';
import Contact from './pages/Contact';
import { Privacy, Terms } from './pages/Legal';
import NotFound from './pages/NotFound';

function useRouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const meta = metaFor(pathname);
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
}

export default function App() {
  useRouteEffects();
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/blueprint" element={<Blueprint />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/press" element={<Press />} />
          <Route path="/press/:slug" element={<PressPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
