import { useState, useEffect, useRef } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [visible, setVisible]     = useState([])
  const linksRef = useRef([])

  /* Reveal nav links with staggered animation */
  useEffect(() => {
    navLinks.forEach((_, i) => {
      setTimeout(() => {
        setVisible(prev => [...prev, i])
      }, 300 + i * 120)
    })
  }, [])

  /* Thicken nav on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo / Brand */}
        <a href="#home" className="navbar-brand" onClick={e => handleNavClick(e, '#home')}>
          <span className="brand-text">RK</span>
          <span className="brand-dot">.</span>
        </a>

        {/* Desktop links */}
        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${visible.includes(i) ? 'visible' : ''}`}
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-link"
            onClick={e => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
