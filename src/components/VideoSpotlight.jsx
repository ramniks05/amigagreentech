import { useState } from 'react'
import { SOCIAL_LINKS } from './contactData'
import { FEATURED_VIDEOS } from '../data/media'
import './VideoSpotlight.css'

export default function VideoSpotlight() {
  const [i, setI] = useState(0)
  const v = FEATURED_VIDEOS[i]
  const n = FEATURED_VIDEOS.length

  const embedUrl = v.youtubeId ? `https://www.youtube.com/embed/${v.youtubeId}?rel=0` : null

  return (
    <section className="video-spotlight" aria-labelledby="video-spotlight-heading">
      <div className="video-spotlight__inner">
        <header className="video-spotlight__head">
          <span className="video-spotlight__kicker">Stories from the field</span>
          <h2 id="video-spotlight-heading" className="video-spotlight__title">Survey interviews &amp; conversations</h2>
          <p className="video-spotlight__lead">
            We conducted extensive interviews while running our Green Energy &amp; EV survey—capturing real voices on mobility, pollution, and solar.
            New clips appear on our{' '}
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">YouTube channel</a>
            {' '}and highlights on{' '}
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>.
          </p>
        </header>

        <div className="video-spotlight__stage">
          <div className="video-spotlight__frame">
            {embedUrl ? (
              <iframe
                title={v.title}
                src={embedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-spotlight__iframe"
              />
            ) : (
              <div className="video-spotlight__placeholder">
                <p className="video-spotlight__placeholder-title">{v.title}</p>
                <p className="video-spotlight__placeholder-text">{v.caption}</p>
                <a href={v.fallbackUrl} className="video-spotlight__placeholder-link" target="_blank" rel="noopener noreferrer">
                  Open YouTube channel →
                </a>
              </div>
            )}
          </div>

          <div className="video-spotlight__panel">
            <p className="video-spotlight__caption-label">Now playing</p>
            <h3 className="video-spotlight__video-title">{v.title}</h3>
            <p className="video-spotlight__caption">{v.caption}</p>
            <div className="video-spotlight__nav">
              <button type="button" className="video-spotlight__btn" onClick={() => setI((x) => (x - 1 + n) % n)} aria-label="Previous video">
                ← Prev
              </button>
              <span className="video-spotlight__counter">{i + 1} / {n}</span>
              <button type="button" className="video-spotlight__btn" onClick={() => setI((x) => (x + 1) % n)} aria-label="Next video">
                Next →
              </button>
            </div>
          </div>
        </div>

        <ul className="video-spotlight__thumbs" aria-label="Video playlist">
          {FEATURED_VIDEOS.map((item, idx) => (
            <li key={item.id}>
              <button
                type="button"
                className={`video-spotlight__thumb ${idx === i ? 'is-active' : ''}`}
                onClick={() => setI(idx)}
              >
                <span className="video-spotlight__thumb-num">{String(idx + 1).padStart(2, '0')}</span>
                <span className="video-spotlight__thumb-title">{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
