import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { COMPANY } from '../company'
import { HERO_SLIDES } from '../data/heroSlides'

const AUTO_MS = 7000

const THEME_LABEL = {
  ev: 'Mobility · EV',
  pollution: 'Environment · Air',
  solar: 'Energy · Solar',
}

function SlidePhoto({ aiSrc, fallbackSrc }) {
  const [src, setSrc] = useState(aiSrc)

  useEffect(() => {
    setSrc(aiSrc)
  }, [aiSrc])

  return (
    <img
      className="hero-slide__photo"
      src={src}
      alt=""
      role="presentation"
      loading="lazy"
      decoding="async"
      onError={() => setSrc(fallbackSrc)}
    />
  )
}

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = HERO_SLIDES.length

  const go = useCallback(
    (dir) => {
      setIndex((i) => (i + dir + n) % n)
    },
    [n],
  )

  useEffect(() => {
    if (paused) return undefined
    const t = setInterval(() => go(1), AUTO_MS)
    return () => clearInterval(t)
  }, [paused, go])

  return (
    <section className="hero" id="about" aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden>
        <span className="hero-blob hero-blob--1" />
        <span className="hero-blob hero-blob--2" />
        <span className="hero-grid" />
      </div>

      <div className="hero-shell">
        <div className="hero-split">
          <div className="hero-brand">
            <span className="hero-eyebrow">
              <span className="hero-eyebrow__pulse" aria-hidden />
              {COMPANY.industry}
            </span>

            <h1 id="hero-heading" className="hero-title hero-title--compact">
              <span className="hero-title__line">
                Innovating <span className="hero-title__accent">Green Technology</span>
              </span>
              <span className="hero-title__line">
                for a <span className="hero-title__under">Sustainable Tomorrow</span>
              </span>
            </h1>

            <p className="hero-lead hero-lead--compact">
              Research, prototypes and field pilots in clean mobility, air quality and solar — built for measurable, on‑ground impact.
            </p>

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
          </div>

          <div
            className="hero-carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Research focus slides"
          >
          <div className="hero-carousel__viewport">
            <button
              type="button"
              className="hero-carousel__arrow hero-carousel__arrow--prev"
              onClick={() => go(-1)}
              aria-label="Previous slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className="hero-carousel__arrow hero-carousel__arrow--next"
              onClick={() => go(1)}
              aria-label="Next slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <div
              className="hero-carousel__track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {HERO_SLIDES.map((slide) => (
                <article
                  key={slide.id}
                  className={`hero-slide hero-slide--${slide.variant}`}
                  aria-hidden={HERO_SLIDES[index].id !== slide.id}
                >
                  <div className="hero-slide__media">
                    <SlidePhoto
                      aiSrc={slide.resolutionAi}
                      fallbackSrc={slide.resolutionFallback}
                    />
                    <div className="hero-slide__media-scrim" aria-hidden />
                    <span className="hero-slide__chip">
                      {THEME_LABEL[slide.variant] || slide.variant}
                    </span>
                  </div>

                  <div className="hero-slide__caption">
                    <h3 className="hero-slide__title">{slide.resolutionTitle}</h3>
                    <p className="hero-slide__text">{slide.issueBody}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-carousel__dots" role="tablist" aria-label="Slide">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}: ${s.issueTitle}`}
                className={`hero-carousel__dot ${i === index ? 'is-active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
