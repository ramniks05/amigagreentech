import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { COMPANY } from '../company'
import '../components/AboutUs.css'

const CATEGORIES = [
  { title: 'EV technology research', text: 'Battery chemistry, BMS, charging behaviour, and adoption patterns to support cleaner mobility.' },
  { title: 'Battery innovation', text: 'Energy density, safety, lifecycle, and second-life pathways aligned with grid and EV use cases.' },
  { title: 'Pollution reduction systems', text: 'Monitoring, mitigation concepts, and integration with industrial and urban environments.' },
  { title: 'Solar optimization', text: 'Generation forecasting, storage coupling, and cost-performance improvements for rooftop and utility-scale solar.' },
]

const CURRENT = [
  { title: 'Problem', text: 'Stakeholders need credible, India-relevant data on EV charging stress, solar integration, and pollution pathways.' },
  { title: 'Approach', text: 'Combine lab-style rigour with field surveys and partner pilots—documented for investors and policy conversations.' },
  { title: 'Expected impact', text: 'Sharper product roadmaps, stronger grant and investor narratives, and datasets that improve public awareness.' },
]

const UPCOMING = [
  'Product concepts and timelines will be published as they mature—without disclosing confidential IP.',
  'Market relevance: EV charging, distributed solar, and compliance-oriented pollution analytics remain priority themes.',
]

export default function ResearchPage() {
  return (
    <div className="page-wrap">
      <Header />
      <main className="static-page">
        <header className="static-hero">
          <h1 className="static-hero__title">Research &amp; innovation</h1>
          <p className="static-hero__lead">Core strength of {COMPANY.shortName}</p>
        </header>
        <div className="static-inner">
          <section className="static-section">
            <h2>R&amp;D approach</h2>
            <p>
              {COMPANY.shortName} prioritises evidence-led development: structured experiments, partner feedback loops, and public surveys
              (e.g. our <Link to="/survey">Green Energy &amp; EV survey</Link>) to ground roadmap decisions.
            </p>
          </section>
          <section className="static-section">
            <h2>Research categories</h2>
            <ul className="values-grid">
              {CATEGORIES.map((c) => (
                <li key={c.title} className="values-card">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </li>
              ))}
            </ul>
          </section>
          <section className="static-section">
            <h2>Current research (overview)</h2>
            <ul className="research-list">
              {CURRENT.map((c) => (
                <li key={c.title}>
                  <strong>{c.title}:</strong> {c.text}
                </li>
              ))}
            </ul>
          </section>
          <section className="static-section">
            <h2>Upcoming products</h2>
            {UPCOMING.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </section>
          <p className="static-back">
            <Link to="/survey">Participate in survey →</Link>
            {' · '}
            <Link to="/">← Home</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
