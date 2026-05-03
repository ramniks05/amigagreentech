import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CONTACT } from './contactData'
import { COMPANY } from '../company'
import { WhatsAppButton } from './SocialIcons'
import './Header.css'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const path = location.pathname

  const Icon = ({ children, ...props }) => (
    <span className="header-icon" aria-hidden {...props}>{children}</span>
  )

  return (
    <>
      {/* Top bar: contact with icons + WhatsApp */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-actions">
            <a href={`mailto:${CONTACT.email}`} className="top-bar-item" aria-label="Email us">
              <Icon>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </Icon>
              <span className="top-bar-item__text">{CONTACT.email}</span>
            </a>
            <a href={`tel:${CONTACT.mobileRaw}`} className="top-bar-item" aria-label="Call us">
              <Icon>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </Icon>
              <span className="top-bar-item__text">{CONTACT.mobile}</span>
            </a>
            <WhatsAppButton message={`Hi, I have an enquiry for ${COMPANY.legalName}.`} className="top-bar-whatsapp" label="" />
          </div>
        </div>
      </div>

      {/* Main header: logo + nav */}
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
            <span className="logo-mark" aria-hidden>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="currentColor" />
                <path d="M16 8l-6 8h4v8h4v-8h4l-6-8z" fill="white" />
              </svg>
            </span>
            <span className="logo-text">
              <span className="logo-text__name">Amigas</span>{' '}
              <span className="logo-text__green">Green</span>{' '}
              <span className="logo-text__name">Tech</span>
            </span>
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
          <nav className={`main-nav ${mobileMenuOpen ? 'is-open' : ''}`}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className={path === '/' ? 'active' : ''}>Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={path === '/about' ? 'active' : ''}>About</Link>
            <Link to="/research" onClick={() => setMobileMenuOpen(false)} className={path === '/research' ? 'active' : ''}>Research</Link>
            <Link to="/survey" onClick={() => setMobileMenuOpen(false)} className={path === '/survey' ? 'active' : ''}>Survey</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={path === '/contact' ? 'active' : ''}>Contact</Link>
            <a href="/#objectives" onClick={() => setMobileMenuOpen(false)} className={path === '/' ? '' : 'main-nav__secondary'}>Objectives</a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
