import Header from './Header'
import Footer from './Footer'
import { SurveyQRBlock } from './SurveyQR'
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
  { value: '50+', label: 'Projects Delivered', icon: 'projects' },
  { value: '10+', label: 'Years Experience', icon: 'years' },
  { value: '100%', label: 'Clean Energy Focus', icon: 'clean' },
  { value: '24/7', label: 'Support', icon: 'support' },
]

const SERVICES = [
  { title: 'Solar Power Systems', short: 'Rooftop & utility-scale solar solutions', icon: 'solar', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&q=80' },
  { title: 'EV & Battery Solutions', short: 'EV batteries, BMS & charging infrastructure', icon: 'ev', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&q=80' },
  { title: 'Energy Storage', short: 'Grid storage & microgrid systems', icon: 'storage', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80' },
  { title: 'EPC & Consultancy', short: 'Feasibility, audits & project execution', icon: 'consult', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80' },
]

const HERO_IMAGE = 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=85'
const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1559302504-64aae0ca2a3d?w=600&q=80'

function AboutUs() {
  return (
    <div className="page-wrap">
      <Header />

      <main>
        {/* Hero: split layout with image */}
        <section className="hero" id="about">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="hero-label">About Us</p>
              <h1 className="hero-title">Powering a sustainable future with clean energy</h1>
              <p className="hero-lead">
                Amiga Green Tech is committed to research, development, and deployment of renewable energy technologies, advanced battery systems, and smart energy solutions for industrial, commercial, and domestic use.
              </p>
              <a href="#objectives" className="hero-cta">Our objectives</a>
            </div>
            <div className="hero-media">
              <img src={HERO_IMAGE} alt="Solar panels and renewable energy" className="hero-img" loading="lazy" />
              <div className="hero-media-badge">
                <span className="hero-badge-icon" aria-hidden>⚡</span>
                <span>Green Energy</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
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

        {/* About + image */}
        <section className="about-block">
          <div className="about-block-inner">
            <div className="about-media">
              <img src={ABOUT_IMAGE} alt="Renewable energy and technology" className="about-img" loading="lazy" />
            </div>
            <div className="about-content">
              <h2 className="about-title">Why Amiga Green Tech</h2>
              <p className="about-text">
                We combine expertise in solar power, EV batteries, and energy storage with end-to-end services—from design and manufacturing to EPC and consultancy—so our clients get reliable, sustainable power solutions.
              </p>
              <ul className="about-list">
                <li><span className="about-list-icon" aria-hidden>✓</span> Solar & photovoltaic systems</li>
                <li><span className="about-list-icon" aria-hidden>✓</span> EV batteries & charging infrastructure</li>
                <li><span className="about-list-icon" aria-hidden>✓</span> Energy storage & microgrids</li>
                <li><span className="about-list-icon" aria-hidden>✓</span> Feasibility studies & energy audits</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="objectives" id="objectives" aria-labelledby="objectives-heading">
          <div className="objectives-inner">
            <h2 id="objectives-heading" className="section-title">Main objectives of the company</h2>
            <p className="section-intro">Our corporate objectives define our mission to lead in renewable energy and sustainable power solutions.</p>
            <ul className="objectives-grid">
              {OBJECTIVES.map((obj) => (
                <li key={obj.id} className="objective-card">
                  <div className="objective-card-header">
                    <span className="objective-number">{String(obj.id).padStart(2, '0')}</span>
                    <span className="objective-icon" aria-hidden data-icon={obj.icon} />
                  </div>
                  <h3 className="objective-title">{obj.title}</h3>
                  <p className="objective-summary">{obj.summary}</p>
                  <p className="objective-description">{obj.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services / What we do */}
        <section className="services" aria-labelledby="services-heading">
          <div className="services-inner">
            <h2 id="services-heading" className="section-title">What we do</h2>
            <p className="section-intro">End-to-end solutions in renewable energy and sustainable power.</p>
            <div className="services-grid">
              {SERVICES.map((svc) => (
                <article key={svc.title} className="service-card">
                  <div className="service-card-image">
                    <img src={svc.image} alt="" loading="lazy" />
                    <span className="service-card-icon" aria-hidden data-icon={svc.icon} />
                  </div>
                  <div className="service-card-body">
                    <h3 className="service-card-title">{svc.title}</h3>
                    <p className="service-card-short">{svc.short}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SurveyQRBlock />

        {/* CTA */}
        <section className="cta" id="contact">
          <div className="cta-inner">
            <h2 className="cta-title">Partner with us</h2>
            <p className="cta-text">For enquiries on renewable energy solutions, EPC, consultancy, or collaboration opportunities.</p>
            <a href="mailto:contact@amigagreentech.com" className="cta-button">Get in touch</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default AboutUs
