import { useCallback, useEffect, useState } from 'react'

const AUTO_MS = 5500

const SLIDES = [
  {
    id: 'rd',
    src: '/images/hero-slide-1.png',
    alt: 'Amigas Green Tech R&D team working on EV battery and charging solutions',
  },
  {
    id: 'solar',
    src: '/images/hero-slide-2.png',
    alt: 'Integrated solar grid network — share, store and use clean energy smarter',
  },
  {
    id: 'air',
    src: '/images/hero-slide-3.png',
    alt: 'Air pollution research lab — real-time monitoring and nature-based solutions',
  },
]

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = SLIDES.length

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + n) % n),
    [n],
  )

  useEffect(() => {
    if (paused) return undefined
    const t = setInterval(() => go(1), AUTO_MS)
    return () => clearInterval(t)
  }, [paused, go])

  return (
    <section
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="Amigas Green Tech highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-slider__viewport">
        <div
          className="hero-slider__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((s, i) => (
            <div
              key={s.id}
              className="hero-slider__slide"
              aria-hidden={i !== index}
            >
              <img
                src={s.src}
                alt={s.alt}
                className="hero-slider__image"
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="hero-slider__arrow hero-slider__arrow--prev"
          onClick={() => go(-1)}
          aria-label="Previous slide"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          className="hero-slider__arrow hero-slider__arrow--next"
          onClick={() => go(1)}
          aria-label="Next slide"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="hero-slider__dots" role="tablist" aria-label="Choose slide">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              className={`hero-slider__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
