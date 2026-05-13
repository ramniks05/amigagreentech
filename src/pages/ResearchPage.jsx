import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { COMPANY } from '../company'
import { RESEARCH_CATEGORY_THUMBS } from '../data/researchVisuals'
import '../components/AboutUs.css'
import './ResearchPage.css'

const CATEGORIES = [
  {
    key: 'ev',
    title: 'EV technology research',
    text: 'Battery chemistry, BMS, charging behaviour, and adoption patterns to support cleaner mobility.',
  },
  {
    key: 'battery',
    title: 'Battery innovation',
    text: 'Energy density, safety, lifecycle, and second-life pathways aligned with grid and EV use cases.',
  },
  {
    key: 'pollution',
    title: 'Pollution reduction systems',
    text: 'Monitoring, mitigation concepts, and integration with industrial and urban environments.',
  },
  {
    key: 'solar',
    title: 'Solar optimization',
    text: 'Generation forecasting, storage coupling, and cost-performance improvements for rooftop and utility-scale solar.',
  },
]

const CURRENT = [
  {
    icon: 'problem',
    title: 'Problem',
    text: 'Stakeholders need credible, India-relevant data on EV charging stress, solar integration, and pollution pathways.',
  },
  {
    icon: 'approach',
    title: 'Approach',
    text: 'Combine lab-style rigour with field surveys and partner pilots—documented for investors and policy conversations.',
  },
  {
    icon: 'impact',
    title: 'Expected impact',
    text: 'Sharper product roadmaps, stronger grant and investor narratives, and datasets that improve public awareness.',
  },
]

const UPCOMING = [
  'Product concepts and timelines will be published as they mature—without disclosing confidential IP.',
  'Market relevance: EV charging, distributed solar, and compliance-oriented pollution analytics remain priority themes.',
]

function CategoryThumb({ visualKey }) {
  const pack = RESEARCH_CATEGORY_THUMBS[visualKey]
  const [src, setSrc] = useState(pack.ai)
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="research-page__thumb-frame" aria-hidden>
      <img
        className={`research-page__thumb ${loaded ? 'is-loaded' : ''}`}
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setSrc(pack.fallback)
          setLoaded(false)
        }}
      />
    </div>
  )
}

function CategoryIcon({ name }) {
  const p = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 26,
    height: 26,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.65,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  switch (name) {
    case 'ev':
      return (
        <svg {...p}>
          <path d="M14 16h3a2 2 0 0 0 2-2v-2.18a2 2 0 0 0-.97-1.72l-2.52-1.51a2 2 0 0 0-2.06 0L9 11.11V9a1 1 0 0 0-1-1H6" />
          <path d="M7 16v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" />
          <circle cx="17" cy="16" r="2" />
          <circle cx="7" cy="16" r="2" />
        </svg>
      )
    case 'battery':
      return (
        <svg {...p}>
          <rect x="6" y="7" width="14" height="10" rx="2" />
          <path d="M10 7V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
          <path d="M12 11v4" />
        </svg>
      )
    case 'pollution':
      return (
        <svg {...p}>
          <path d="M9.59 4.59A2 2 0 1 1 11 8H7" />
          <path d="M14 8h4a2 2 0 1 1-.59 1.41" />
          <path d="M5 16h10a2 2 0 1 1-.59 1.41" />
          <path d="M4 12h12" />
        </svg>
      )
    case 'solar':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      )
    default:
      return null
  }
}

function PillarIcon({ type }) {
  const p = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.65,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  switch (type) {
    case 'problem':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v5" />
          <path d="M12 16h.01" />
        </svg>
      )
    case 'approach':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
        </svg>
      )
    case 'impact':
      return (
        <svg {...p}>
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M14 7h7v7" />
        </svg>
      )
    default:
      return null
  }
}

export default function ResearchPage() {
  return (
    <div className="page-wrap">
      <Header />
      <main className="static-page research-page">
        <header className="static-hero research-page__hero">
          <div className="research-page__hero-inner">
            <span className="research-page__eyebrow">Research &amp; development</span>
            <h1 className="static-hero__title">Research &amp; innovation</h1>
            <p className="static-hero__lead">Core strength of {COMPANY.shortName}</p>
          </div>
        </header>
        <div className="static-inner research-page__inner">
          <section className="static-section research-page__section">
            <h2>R&amp;D approach</h2>
            <div className="research-page__intro">
              <p>
                {COMPANY.shortName} prioritises evidence-led development: structured experiments, partner feedback loops, and public surveys
                (e.g. our <Link to="/survey">Green Energy &amp; EV survey</Link>) to ground roadmap decisions.
              </p>
            </div>
          </section>

          <section className="static-section research-page__section">
            <h2>Featured invention</h2>
            <Link to="/research/hybrid-battery" className="research-page__feature" aria-label="Read the Hybrid Battery System invention disclosure">
              <div className="research-page__feature-text">
                <span className="research-page__feature-tag">Invention disclosure · EV power management</span>
                <h3>Hybrid Battery System &amp; Charging Management System</h3>
                <p>
                  A swappable primary pack, a fixed secondary pack, and a cloud-managed swap ecosystem — built to remove range anxiety,
                  long charging waits and infrastructure friction. Prototype working and meeting all parameters.
                </p>
                <span className="research-page__feature-cta">Read the full disclosure →</span>
              </div>
              <div className="research-page__feature-media" aria-hidden>
                <CategoryThumb visualKey="battery" />
              </div>
            </Link>
          </section>
          <section className="static-section research-page__section">
            <h2>Research categories</h2>
            <ul className="values-grid research-page__category-grid">
              {CATEGORIES.map((c) => (
                <li key={c.key} className="values-card research-page__category-card">
                  <CategoryThumb visualKey={c.key} />
                  <div className="research-page__category-head">
                    <span className="research-page__category-icon">
                      <CategoryIcon name={c.key} />
                    </span>
                    <h3>{c.title}</h3>
                  </div>
                  <p>{c.text}</p>
                </li>
              ))}
            </ul>
          </section>
          <section className="static-section research-page__section">
            <h2>Current research (overview)</h2>
            <div className="research-page__pillars">
              {CURRENT.map((c) => (
                <article key={c.title} className="research-page__pillar">
                  <div className="research-page__pillar-head">
                    <span className="research-page__pillar-icon">
                      <PillarIcon type={c.icon} />
                    </span>
                    <span className="research-page__pillar-label">{c.title}</span>
                  </div>
                  <p>{c.text}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="static-section research-page__section">
            <h2>Upcoming products</h2>
            <div className="research-page__note">
              {UPCOMING.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </section>
          <div className="static-back research-page__footer-links">
            <Link to="/survey">Participate in survey →</Link>
            <Link to="/">← Home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
