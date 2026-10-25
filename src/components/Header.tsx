import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { links, nav } from '../content/site';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => setOpen(false), [pathname, hash]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Tacitous home">
          <Logo />
        </Link>

        <nav className="primary-nav" aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.label} className={item.children ? 'has-menu' : undefined}>
                <NavLink to={item.to} className="nav-link">
                  {item.label}
                  {item.children && <ChevronDown size={15} aria-hidden="true" />}
                </NavLink>
                {item.children && (
                  <div className="menu">
                    {item.children.map((c) => (
                      <Link key={c.label} to={c.to} className="menu-item">
                        <strong>{c.label}</strong>
                        <span>{c.blurb}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href={links.app} className="btn btn-ghost-light btn-sm">Sign in</a>
          <Link to="/contact" className="btn btn-light btn-sm">Let’s talk</Link>
        </div>

        <button className="menu-toggle" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          {nav.map((item) => (
            <div key={item.label} className="mobile-group">
              <Link to={item.to} className="mobile-top">{item.label}</Link>
              {item.children?.map((c) => (
                <Link key={c.label} to={c.to} className="mobile-sub">{c.label}</Link>
              ))}
            </div>
          ))}
          <div className="mobile-actions">
            <Link to="/contact" className="btn btn-light">Let’s talk</Link>
            <a href={links.app} className="btn btn-ghost-light">Sign in</a>
          </div>
        </div>
      )}
    </header>
  );
}
