import { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.scss';
import { navLinks } from '../../data/siteData';
import logo from '../../assets/images/logo.svg';

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [mounted,  setMounted]    = useState(false);
  const indicatorRef = useRef(null);
  const linksRef     = useRef([]);

  // [ANIM] trigger slide-down on mount
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  // scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // [ANIM] move sliding indicator to hovered link
  const handleLinkEnter = (i) => {
    const el  = linksRef.current[i];
    const ind = indicatorRef.current;
    if (el && ind) {
      ind.style.width   = `${el.offsetWidth}px`;
      ind.style.left    = `${el.offsetLeft}px`;
      ind.style.opacity = '1';
    }
  };

  const handleLinksLeave = () => {
    if (indicatorRef.current) {
      indicatorRef.current.style.opacity = '0';
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${mounted ? styles.mounted : ''}`}>
      <div className={styles.inner}>

        {/* Logo */}
        <a href="/" className={styles.logo}>
          <img src={logo} alt="Olio Nexus" className={styles.logoImg} />
        </a>

        {/* Desktop links */}
        <ul className={styles.links} onMouseLeave={handleLinksLeave}>
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                ref={(el) => (linksRef.current[i] = el)}
                onMouseEnter={() => handleLinkEnter(i)}
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* [ANIM] sliding underline */}
          <span ref={indicatorRef} className={styles.indicator} />
        </ul>

        {/* CTA */}
        <a href="#contact" className={styles.ctaBtn}>
          <span className={styles.ctaBtnText}>Start Transformation</span>
          <span className={styles.ctaBtnArrow}>→</span>
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu — [ANIM] uses .menuOpen class for accordion + stagger */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}>
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{ '--i': i }}   // drives stagger delay in SCSS
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className={styles.ctaBtn}
          onClick={() => setMenuOpen(false)}
        >
          Start Transformation →
        </a>
      </div>
    </nav>
  );
}