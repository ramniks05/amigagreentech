import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CONTACT } from '../components/contactData'
import { COMPANY } from '../company'
import '../components/AboutUs.css'
import './ContactPage.css'

const NOIDA_MAP =
  'https://www.openstreetmap.org/export/embed.html?bbox=77.36%2C28.52%2C77.44%2C28.60&layer=mapnik&marker=28.56%2C77.40'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Website contact from ${name || 'visitor'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    )
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="page-wrap">
      <Header />
      <main className="static-page contact-page">
        <header className="static-hero">
          <h1 className="static-hero__title">Contact us</h1>
          <p className="static-hero__lead">{COMPANY.legalName}</p>
        </header>
        <div className="static-inner contact-layout">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="c-name">Name</label>
            <input id="c-name" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />

            <label htmlFor="c-email">Email</label>
            <input id="c-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />

            <label htmlFor="c-phone">Phone</label>
            <input id="c-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />

            <label htmlFor="c-msg">Message</label>
            <textarea id="c-msg" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} required />

            <button type="submit" className="contact-submit">Send via email</button>
            <p className="contact-form-note">Opens your email app with this message addressed to {CONTACT.email}.</p>
          </form>
          <aside className="contact-aside">
            <h2>Office</h2>
            <p className="contact-address">{CONTACT.address}</p>
            <p><a href={`tel:${CONTACT.mobileRaw}`}>{CONTACT.mobile}</a></p>
            <p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
            <div className="contact-map">
              <iframe title="Office location — Noida" src={NOIDA_MAP} width="100%" height="200" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <p className="static-back">
              <Link to="/">← Home</Link>
            </p>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
