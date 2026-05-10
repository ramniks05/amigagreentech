import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { COMPANY } from '../company'
import '../components/AboutUs.css'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <div className="page-wrap">
      <Header />
      <main className="static-page">
        <header className="static-hero">
          <h1 className="static-hero__title">About Us – {COMPANY.shortName}</h1>
          <p className="static-hero__lead">{COMPANY.tagline}</p>
        </header>
        <div className="static-inner">
          <section className="about-visual" aria-label="Photography">
            <div className="about-visual__grid">
              <figure className="about-visual__figure">
                <img
                  className="about-visual__img"
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=80"
                  alt="Electric vehicle charging and clean mobility context"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="about-visual__cap">Mobility &amp; EV focus</figcaption>
              </figure>
              <figure className="about-visual__figure">
                <img
                  className="about-visual__img"
                  src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=900&q=80"
                  alt="Industrial environment and air quality challenges"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="about-visual__cap">Pollution &amp; environment</figcaption>
              </figure>
              <figure className="about-visual__figure">
                <img
                  className="about-visual__img"
                  src="/images/about-green-energy.png"
                  alt="Solar panels and renewable energy"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="about-visual__cap">Solar &amp; green energy</figcaption>
              </figure>
            </div>
          </section>

          <section className="static-section about-intro" aria-labelledby="about-intro-heading">
            <h2 id="about-intro-heading" className="about-section-title">Who we are</h2>
            <p>
              At {COMPANY.shortName}, we are committed to building innovative and sustainable green technology solutions for the future.
              Our company focuses on research and development (R&amp;D) in advanced environmental and energy technologies that can create a cleaner, smarter, and more self-reliant world.
            </p>
            <p>
              We believe that technology should not only improve lives but also protect the environment and reduce dependency on limited natural resources.
              Our dedicated R&amp;D team is continuously working on breakthrough solutions in the fields of electric mobility, clean energy, and pollution control.
            </p>
          </section>

          <section className="static-section" aria-labelledby="focus-areas-heading">
            <h2 id="focus-areas-heading" className="about-section-title">Our focus areas</h2>

            <article className="about-focus">
              <h3 className="about-focus__title">
                <span className="about-focus__num">1</span>
                EV tech solutions
              </h3>
              <p>
                One of the biggest challenges in the electric vehicle industry today is charging infrastructure and vehicle range limitations.
                At {COMPANY.shortName}, we are actively developing advanced EV technology solutions aimed at solving charging and range-related issues while also reducing dependency on crude oil and imported supply chains from other countries.
              </p>
              <p className="about-focus__note">
                Our current technology is in the prototype stage, and detailed technical information will be officially disclosed after the patent registration process is completed.
              </p>
            </article>

            <article className="about-focus">
              <h3 className="about-focus__title">
                <span className="about-focus__num">2</span>
                Air pollution solutions
              </h3>
              <p>
                Air pollution is one of the most critical environmental concerns affecting public health and climate conditions worldwide.
                Our R&amp;D team is actively working on sustainable and practical solutions to help reduce air pollution and improve environmental quality.
              </p>
              <p className="about-focus__note">
                The project is currently in the development phase, and we are optimistic about delivering impactful and measurable results in the near future.
              </p>
            </article>

            <article className="about-focus">
              <h3 className="about-focus__title">
                <span className="about-focus__num">3</span>
                Solar tech solutions
              </h3>
              <p>
                Our team is also working on creating an efficient and intelligent solar grid system that will help people generate, manage, store, and utilize energy more effectively according to their needs.
              </p>
              <p>
                The objective of this technology is to make renewable energy more accessible, reliable, and cost-efficient for individuals, businesses, and communities.
              </p>
            </article>
          </section>

          <section className="static-section" aria-labelledby="vision-heading">
            <h2 id="vision-heading" className="about-section-title">Our vision</h2>
            <p className="about-vision-text">{COMPANY.vision}</p>
          </section>

          <section className="static-section" aria-labelledby="mission-heading">
            <h2 id="mission-heading" className="about-section-title">Our mission</h2>
            <ul className="about-mission-list">
              <li>To develop innovative green technologies through advanced research and development.</li>
              <li>To create sustainable energy solutions for modern transportation and infrastructure.</li>
              <li>To support environmental protection through practical and scalable technologies.</li>
              <li>To promote energy independence and smarter resource utilization.</li>
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
