import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { COMPANY } from '../company'
import '../components/AboutUs.css'

const VALUES = [
  { title: 'Sustainability', text: 'Every initiative is measured against long-term environmental and social impact.' },
  { title: 'Innovation', text: 'R&D-first mindset—from EV and batteries to solar and pollution control systems.' },
  { title: 'Impact-driven R&D', text: 'Research that translates into credible products, partnerships, and policy-relevant insights.' },
]

export default function AboutPage() {
  return (
    <div className="page-wrap">
      <Header />
      <main className="static-page">
        <header className="static-hero">
          <h1 className="static-hero__title">About us</h1>
          <p className="static-hero__lead">{COMPANY.legalName}</p>
        </header>
        <div className="static-inner">
          <section className="static-section">
            <h2>Company introduction</h2>
            <p>
              {COMPANY.legalName} operates in <strong>{COMPANY.industry}</strong>. {COMPANY.vision}
            </p>
          </section>
          <section className="static-section">
            <h2>Vision</h2>
            <p className="static-pullquote">{COMPANY.tagline}</p>
          </section>
          <section className="static-section">
            <h2>Mission</h2>
            <p>
              Showcase ongoing research and innovations, run public surveys for research data, build trust with investors and government stakeholders, and grow awareness about sustainability across corporate and general audiences.
            </p>
          </section>
          <section className="static-section">
            <h2>Why {COMPANY.shortName}?</h2>
            <p>
              We combine clean-energy engineering with structured R&D narratives—so partners see both technical depth and market relevance, from EV and solar to pollution reduction and future technologies.
            </p>
          </section>
          <section className="static-section">
            <h2>Core values</h2>
            <ul className="values-grid">
              {VALUES.map((v) => (
                <li key={v.title} className="values-card">
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </li>
              ))}
            </ul>
          </section>
          <p className="static-back">
            <Link to="/">← Back to home</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
