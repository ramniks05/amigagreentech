import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { SurveyQRBlock } from './SurveyQR'
import { COMPANY, FOCUS_AREAS, RESEARCH_HIGHLIGHTS } from '../company'
import './AboutUs.css'

const OBJECTIVES = [
  { id: 1, title: 'Renewable & Green Energy Technologies', summary: 'End-to-end business in clean energy solutions', description: 'To carry on the business of research, design, development, manufacturing, assembling, testing, installation, commissioning, operation, maintenance, import, export, trading and dealing in renewable and green energy technologies including but not limited to solar power systems, solar panels, photovoltaic modules, inverters, charge controllers, electric vehicle (EV) batteries, lithium-ion batteries, sodium-ion batteries, battery management systems (BMS), energy storage systems and allied equipment for industrial, commercial, institutional and domestic use.', icon: 'energy' },
  { id: 2, title: 'Research & Development', summary: 'Advancement and innovation in clean energy', description: 'To undertake research and development activities for advancement, innovation, performance enhancement, lifecycle improvement, recycling, refurbishment and sustainable utilization of renewable energy systems and advanced battery technologies.', icon: 'research' },
  { id: 3, title: 'Energy Storage & Smart Systems', summary: 'Infrastructure and microgrid solutions', description: 'To design, develop and implement energy storage solutions, EV charging infrastructure, battery swapping stations, microgrid systems, hybrid power systems and smart energy management systems.', icon: 'storage' },
  { id: 4, title: 'Consultancy & EPC Services', summary: 'Advisory and project execution', description: 'To provide consultancy, technical services, project management, engineering, procurement and construction (EPC), feasibility studies, energy audits, and advisory services in the field of renewable energy and sustainable power solutions.', icon: 'consultancy' },
  { id: 5, title: 'Collaboration & Partnerships', summary: 'Global cooperation for clean energy', description: 'To collaborate, partner, or enter into agreements with government bodies, research institutions, universities, corporations, and other organizations in India or abroad for promoting innovation and development in clean energy technologies.', icon: 'partnership' },
  { id: 6, title: 'Intellectual Property & Technology Rights', summary: 'Patents and innovation protection', description: 'To apply for, obtain, register, purchase, license or otherwise acquire patents, trademarks, copyrights, designs, technology rights and intellectual property related to renewable energy and battery technologies.', icon: 'ip' },
]

const STATS = [
  { value: '4', label: 'R&D focus areas', icon: 'projects' },
  { value: '6', label: 'Corporate pillars', icon: 'clean' },
  { value: '100%', label: 'Sustainability led', icon: 'years' },
  { value: '24/7', label: 'Public engagement', icon: 'support' },
]

const HERO_IMAGE = '/images/about-green-energy.png'

function AboutUs() {
  return (
    <div className="page-wrap">
      <Header />

      <main>
        <section className="hero" id="about" aria-labelledby="hero-heading">
          <div className="hero-bg" aria-hidden>
            <span className="hero-blob hero-blob--1" />
            <span className="hero-blob hero-blob--2" />
            <span className="hero-grid" />
          </div>

          <div className="hero-inner">
            <div className="hero-content">
              <span className="hero-eyebrow">
                <span className="hero-eyebrow__pulse" aria-hidden />
                {COMPANY.industry}
              </span>

              <h1 id="hero-heading" className="hero-title">
                Innovating{' '}
                <span className="hero-title__accent">green technology</span>
                {' '}for a{' '}
                <span className="hero-title__under">sustainable tomorrow</span>.
              </h1>

              <p className="hero-lead">{COMPANY.vision}</p>

              <div className="hero-actions">
                <Link to="/research" className="hero-cta hero-cta--primary">
                  <span>Explore our research</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/survey" className="hero-cta hero-cta--ghost">
                  Participate in survey
                </Link>
              </div>

              <ul className="hero-meta-list" aria-label="Quick links">
                <li><a href="#objectives">Corporate objectives</a></li>
                <li><Link to="/about">About the company</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="hero-media">
              <div className="hero-media-frame">
                <span className="hero-media-glow" aria-hidden />
                <img src={HERO_IMAGE} alt="Illustration: solar landscape and clean energy" className="hero-img" loading="eager" />

                <div className="hero-floating hero-floating--badge" aria-hidden>
                  <span className="hero-floating__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <div>
                    <strong>R&amp;D ongoing</strong>
                    <span>EV · Solar · Storage</span>
                  </div>
                </div>

                <div className="hero-floating hero-floating--stat" aria-hidden>
                  <span className="hero-floating__num">{FOCUS_AREAS.length}</span>
                  <span className="hero-floating__lbl">focus areas<br />driving impact</span>
                </div>
              </div>

              <ul className="hero-tags" aria-label="Focus areas">
                {FOCUS_AREAS.map((f) => (
                  <li key={f.key}>{f.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="stats" aria-label="Key highlights">
          <div className="stats-inner">
            {STATS.map((item) => (
              <div key={item.label} className="stat-item">
                <span className="stat-icon" aria-hidden data-icon={item.icon} />
                <span className="stat-value">{item.value}</span>
                <span className="stat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="snapshot" aria-labelledby="snapshot-heading">
          <div className="snapshot-inner">
            <h2 id="snapshot-heading" className="snapshot-title">About {COMPANY.shortName}</h2>
            <p className="snapshot-text">
              {COMPANY.legalName} builds credibility as an R&amp;D-driven green technology company—showcasing research, running public surveys for data, and engaging investors, partners, government stakeholders, and the wider public on sustainability.
            </p>
          </div>
        </section>

        <section className="focus-section" aria-labelledby="focus-heading">
          <div className="focus-inner">
            <header className="focus-head">
              <span className="focus-kicker">What we work on</span>
              <h2 id="focus-heading" className="focus-title">Key focus areas</h2>
            </header>
            <ul className="focus-grid">
              {FOCUS_AREAS.map((f) => (
                <li key={f.key} className="focus-card">
                  <span className="focus-icon" aria-hidden data-icon={f.icon} />
                  <h3 className="focus-card-title">{f.title}</h3>
                  <p className="focus-card-text">{f.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="research-teaser" aria-labelledby="research-teaser-heading">
          <div className="research-teaser-inner">
            <header className="research-teaser-head">
              <span className="research-teaser-kicker">R&amp;D</span>
              <h2 id="research-teaser-heading" className="research-teaser-title">Current research highlights</h2>
              <p className="research-teaser-lead">A snapshot of themes we communicate to partners and the public—full detail on the research page.</p>
            </header>
            <ul className="research-teaser-grid">
              {RESEARCH_HIGHLIGHTS.map((r) => (
                <li key={r.title} className="research-teaser-card">
                  <h3 className="research-teaser-card-title">{r.title}</h3>
                  <p className="research-teaser-card-text">{r.text}</p>
                </li>
              ))}
            </ul>
            <div className="research-teaser-cta">
              <Link to="/research" className="research-teaser-btn">Research &amp; innovation →</Link>
            </div>
          </div>
        </section>

        <section className="objectives" id="objectives" aria-labelledby="objectives-heading">
          <div className="objectives-inner">
            <header className="objectives-head">
              <span className="objectives-kicker">Our mandate</span>
              <h2 id="objectives-heading" className="objectives-title">Corporate objectives</h2>
              <p className="objectives-lead">
                Six pillars of our memorandum of association—renewable energy, batteries, storage, services, partnerships, and IP. Tap a card to read the full legal wording.
              </p>
            </header>
            <div className="objectives-grid">
              {OBJECTIVES.map((obj) => (
                <details key={obj.id} name="corp-objectives" className="objective-card">
                  <summary className="objective-card__summary">
                    <span className="objective-num">{String(obj.id).padStart(2, '0')}</span>
                    <span className="objective-icon" aria-hidden data-icon={obj.icon} />
                    <div className="objective-card__titles">
                      <h3 className="objective-card__name">{obj.title}</h3>
                      <p className="objective-card__tagline">{obj.summary}</p>
                    </div>
                    <span className="objective-chevron" aria-hidden />
                  </summary>
                  <div className="objective-card__panel">
                    <p className="objective-card__legal">{obj.description}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <SurveyQRBlock />
      </main>

      <Footer />
    </div>
  )
}

export default AboutUs
