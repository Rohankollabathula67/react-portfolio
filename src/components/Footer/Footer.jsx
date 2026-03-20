import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaArrowUp } from 'react-icons/fa'
import './Footer.css'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Rohankollabathula67', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/rohankollabathula1306', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://www.twitter.com', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://www.instagram.com/@raw_with_rohan', label: 'Instagram' },
  { icon: FaFacebook, href: 'https://www.facebook.com', label: 'Facebook' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer id="contact" className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <span className="footer-logo">RK<span className="footer-dot">.</span></span>
          <p className="footer-tagline">Building with passion, one line at a time.</p>
        </div>

        {/* Social links */}
        <div className="footer-socials">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="social-icon-btn"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Kollabathula Rohan. Built with React &amp; ❤️
        </p>
      </div>

      {/* Back to top */}
      <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  )
}
