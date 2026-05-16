import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { COMPANY } from '../company'
import { INVENTION_VISUALS } from '../data/inventionVisuals'
import '../components/AboutUs.css'
import './InventionPage.css'

const ISSUES = [
  {
    icon: 'range',
    title: 'Limited driving range',
    text: 'Shorter usable range vs ICE vehicles makes long trips less convenient and triggers range anxiety.',
  },
  {
    icon: 'thermal',
    title: 'Thermal management',
    text: 'Battery cells are temperature sensitive — overheating reduces efficiency and can risk thermal runaway.',
  },
  {
    icon: 'weight',
    title: 'Battery weight & size',
    text: 'Heavy, bulky packs reduce vehicle efficiency and restrict design flexibility.',
  },
  {
    icon: 'temperature',
    title: 'Extreme weather drop',
    text: 'EV performance degrades in extreme cold or heat — users notice reduced range and slower charging.',
  },
  {
    icon: 'infra',
    title: 'Sparse infrastructure',
    text: 'Charging stations are unevenly distributed, often concentrated in urban hubs only.',
  },
  {
    icon: 'wait',
    title: 'Long charging time',
    text: 'Charging takes far longer than refuelling, causing downtime and disrupting trip planning.',
  },
  {
    icon: 'plug',
    title: 'Charger compatibility',
    text: 'Multiple standards and connectors create friction across manufacturers and stations.',
  },
  {
    icon: 'cost',
    title: 'High initial cost',
    text: 'Upfront price keeps EVs out of reach for many middle-class buyers.',
  },
  {
    icon: 'grid',
    title: 'Grid & peak load stress',
    text: 'Simultaneous charging can destabilise the grid and demand expensive infrastructure upgrades.',
  },
  {
    icon: 'renewable',
    title: 'Renewable integration gap',
    text: 'Aligning EV charging with solar and wind generation remains an evolving challenge.',
  },
]

const PILLARS = [
  {
    id: 1,
    tag: 'Pillar 1',
    title: 'Hybrid Battery System',
    image: INVENTION_VISUALS.hybridBattery,
    technical:
      'Each EV carries two complementary battery units — a swappable primary pack and a fixed secondary pack. The fixed pack is chargeable via every standard method (home, smart and fast chargers, public stations). The swappable pack uses modular 3 kWh / 4 kWh / 5 kWh blocks fitted with a liquid-cooled enclosure for safety and longevity.',
    process:
      'The vehicle draws energy from the primary (swappable) pack first. Once the primary pack drops to ~10% remaining (90% consumed), the system seamlessly transitions to the secondary (fixed) pack so the journey continues uninterrupted.',
    highlights: [
      'Two-pack hybrid architecture',
      'Modular 3 / 4 / 5 kWh swap blocks',
      'Liquid-cooled swap cases',
    ],
  },
  {
    id: 2,
    tag: 'Pillar 2',
    title: 'Intelligent Charging System',
    image: INVENTION_VISUALS.swapStation,
    technical:
      'A purpose-built swap architecture for the modular 3 / 4 / 5 kWh packs, linked to a centralised server for live monitoring of battery inventory at every station. An automated battery-health engine evaluates each pack against defined safety and performance criteria; non-compliant packs are auto-locked and flagged defective.',
    process:
      'When primary charge drops below 30%, or once the vehicle has moved to the secondary pack, the user opens the app, locates the nearest station with confirmed available batteries, drives in and completes a verified swap in under five minutes.',
    highlights: [
      'Real-time station & inventory view',
      'Automated health scoring',
      'Sub-5-minute verified swap',
    ],
  },
  {
    id: 3,
    tag: 'Pillar 3',
    title: 'Charging & Battery Management System',
    image: INVENTION_VISUALS.cloudPlatform,
    technical:
      'A cloud-based application that ties every stakeholder — charging stations, battery manufacturers, sellers, service centres, vehicle OEMs, and customers — into a single registered ecosystem. Vehicle and battery warranty data is captured at the point of sale and tracked through every swap cycle.',
    process:
      'During the warranty period (e.g. five years), the customer can perform unlimited verified swaps. Returned packs are routed through a diagnostic loop checking charging efficiency, thermal behaviour, voltage consistency, and overall health. Failures are auto-flagged, the station operator marks the pack as defective, and the manufacturer is obligated to repair or replace within the agreed SLA.',
    highlights: [
      'Single registered ecosystem',
      'Warranty-linked unlimited swaps',
      'SLA-backed defective handling',
    ],
  },
]

function AiImage({ pack, alt, className = '' }) {
  const [src, setSrc] = useState(pack.ai)
  const [loaded, setLoaded] = useState(false)
  return (
    <img
      className={`invention-page__img ${loaded ? 'is-loaded' : ''} ${className}`}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      onError={() => {
        setSrc(pack.fallback)
        setLoaded(false)
      }}
    />
  )
}

function IssueIcon({ name }) {
  const p = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  switch (name) {
    case 'range':
      return (
        <svg {...p}>
          <path d="M3 12h14" />
          <path d="M13 6l6 6-6 6" />
          <path d="M21 4v16" />
        </svg>
      )
    case 'thermal':
      return (
        <svg {...p}>
          <path d="M14 14.76V4a2 2 0 1 0-4 0v10.76a4 4 0 1 0 4 0z" />
        </svg>
      )
    case 'weight':
      return (
        <svg {...p}>
          <path d="M6 7h12l-1.5 12a2 2 0 0 1-2 1.8h-5a2 2 0 0 1-2-1.8L6 7z" />
          <path d="M9 7V5a3 3 0 0 1 6 0v2" />
        </svg>
      )
    case 'temperature':
      return (
        <svg {...p}>
          <path d="M12 2v6" />
          <path d="M9 5l3-3 3 3" />
          <path d="M5 14l-2 2 2 2" />
          <path d="M19 14l2 2-2 2" />
          <circle cx="12" cy="16" r="3" />
        </svg>
      )
    case 'infra':
      return (
        <svg {...p}>
          <path d="M3 21V8l9-5 9 5v13" />
          <path d="M9 21v-6h6v6" />
        </svg>
      )
    case 'wait':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
    case 'plug':
      return (
        <svg {...p}>
          <path d="M9 2v6" />
          <path d="M15 2v6" />
          <path d="M7 8h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5V8z" />
          <path d="M12 16v6" />
        </svg>
      )
    case 'cost':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M15 9.5C14.5 8.5 13 8 12 8c-1.5 0-3 .7-3 2.3 0 2.7 6 1.5 6 4.2 0 1.6-1.5 2.5-3 2.5-1 0-2.5-.5-3-1.5" />
          <path d="M12 6.5v1.5M12 16v1.5" />
        </svg>
      )
    case 'grid':
      return (
        <svg {...p}>
          <path d="M3 9h18" />
          <path d="M3 15h18" />
          <path d="M9 3v18" />
          <path d="M15 3v18" />
        </svg>
      )
    case 'renewable':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3a5 5 0 0 1 5 5" />
          <path d="M21 12a5 5 0 0 1-5 5" />
          <path d="M12 21a5 5 0 0 1-5-5" />
          <path d="M3 12a5 5 0 0 1 5-5" />
        </svg>
      )
    default:
      return null
  }
}

export default function InventionPage() {
  return (
    <div className="page-wrap">
      <Header />
      <main className="static-page invention-page">
        {/* Hero */}
        <header className="invention-page__hero">
          <div className="invention-page__hero-media" aria-hidden>
            <AiImage pack={INVENTION_VISUALS.hero} alt="" className="invention-page__hero-img" />
            <div className="invention-page__hero-overlay" />
          </div>
          <div className="invention-page__hero-inner">
            <span className="invention-page__eyebrow">Invention disclosure</span>
            <h1 className="invention-page__title">
              Hybrid Battery System &amp; <br className="invention-page__br" />
              Charging Management System
            </h1>
            <p className="invention-page__lead">
              A power-management invention from {COMPANY.shortName} combining a swappable primary pack,
              a fixed secondary pack, and a cloud-managed swap ecosystem — built to remove range anxiety,
              long charging waits, and infrastructure friction from electric vehicles.
            </p>
            <div className="invention-page__meta">
              <span className="invention-page__chip">
                <strong>Inventor:</strong>&nbsp;Keshav Gupta
              </span>
              <span className="invention-page__chip">
                <strong>Conceived:</strong>&nbsp;Aug 2025
              </span>
              <span className="invention-page__chip invention-page__chip--accent">
                <strong>Status:</strong>&nbsp;Prototype working
              </span>
            </div>
          </div>
        </header>

        <div className="invention-page__inner">
          {/* Field of Invention */}
          <section className="invention-page__section invention-page__field">
            <div className="invention-page__field-text">
              <span className="invention-page__kicker">Field of invention</span>
              <h2>EV power management — built for short trips and long journeys</h2>
              <p>
                The invention sits within the field of electric vehicles, and specifically a power-management
                system designed for efficient, seamless operation over both short and long distances. It
                introduces a hybrid battery architecture — a combination of fixed and swappable units — that
                switches dynamically based on the vehicle&apos;s operating requirements.
              </p>
              <p>
                The goal is to address the core friction points slowing EV adoption today: range limitations,
                long charging waits, sparse and inconsistent charging infrastructure, and the operational
                inefficiencies that follow.
              </p>
            </div>
            <div className="invention-page__field-media">
              <AiImage
                pack={INVENTION_VISUALS.field}
                alt="Illustration of EV power-management architecture with overlaid battery cells"
              />
            </div>
          </section>

          {/* Issues */}
          <section className="invention-page__section invention-page__issues-section">
            <span className="invention-page__kicker">Why this is needed</span>
            <h2>Major issues with electric vehicles today</h2>
            <p className="invention-page__section-lead">
              EVs are emerging as a sustainable alternative to fuel-based transport, but adoption is held back
              by a stack of overlapping problems across the vehicle, the network, and the grid.
            </p>

            <div className="invention-page__issues-layout">
              <div className="invention-page__issues-media" aria-hidden>
                <AiImage
                  pack={INVENTION_VISUALS.issues}
                  alt=""
                  className="invention-page__issues-img"
                />
              </div>
              <ul className="invention-page__issues-grid">
                {ISSUES.map((issue) => (
                  <li key={issue.title} className="invention-page__issue">
                    <span className="invention-page__issue-icon">
                      <IssueIcon name={issue.icon} />
                    </span>
                    <div>
                      <h3>{issue.title}</h3>
                      <p>{issue.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Our Invention — pillars */}
          <section className="invention-page__section invention-page__solution">
            <span className="invention-page__kicker">Our invention</span>
            <h2>Three systems, working as one</h2>
            <p className="invention-page__section-lead">
              The Hybrid Battery System and Charging Management System is built from three tightly integrated
              layers — together they remove range anxiety, eliminate long waits, and bring every stakeholder
              onto a single accountable platform.
            </p>

            <div className="invention-page__pillars">
              {PILLARS.map((pillar) => (
                <article key={pillar.id} className="invention-page__pillar">
                  <div className="invention-page__pillar-media">
                    <AiImage pack={pillar.image} alt={pillar.title} />
                    <span className="invention-page__pillar-tag">{pillar.tag}</span>
                  </div>
                  <div className="invention-page__pillar-body">
                    <h3>{pillar.title}</h3>
                    <div className="invention-page__pillar-block">
                      <span className="invention-page__pillar-label">Technical aspects</span>
                      <p>{pillar.technical}</p>
                    </div>
                    <div className="invention-page__pillar-block">
                      <span className="invention-page__pillar-label">Working process</span>
                      <p>{pillar.process}</p>
                    </div>
                    <ul className="invention-page__pillar-highlights">
                      {pillar.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="invention-page__section invention-page__conclusion">
            <div className="invention-page__conclusion-media">
              <AiImage
                pack={INVENTION_VISUALS.conclusion}
                alt="Electric vehicle on an open road with renewable energy infrastructure"
              />
            </div>
            <div className="invention-page__conclusion-text">
              <span className="invention-page__kicker">Outcome</span>
              <h2>An EV experience without the charging fear</h2>
              <p>
                A customer can buy an EV and drive or ride as much as they want, without the fear of finding —
                or waiting at — a charging station. Replace today&apos;s 45–120 minute charges with sub-5-minute
                verified swaps, and reduce overall vehicle cost in the process.
              </p>
              <p className="invention-page__conclusion-strong">
                A perfect charging infrastructure plus a well-architected battery system can resolve the bulk
                of EV adoption issues we see today.
              </p>
            </div>
          </section>

          <div className="invention-page__footer-links">
            <Link to="/research">← Back to research</Link>
            <Link to="/survey">Take the EV survey →</Link>
            <Link to="/contact">Contact the inventor</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
