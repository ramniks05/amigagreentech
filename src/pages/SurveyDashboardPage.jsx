import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { COMPANY } from '../company'
import {
  DASHBOARD_META,
  SUMMARY_STATS,
  RESPONSES_BY_WEEK,
  CURRENT_VEHICLE,
  EV_INTEREST,
  TOP_CONCERNS,
  NOT_SWITCHED_REASONS,
  CHARGING_PREFERENCE,
  PURCHASE_INTENT_3Y,
  CITY_BREAKDOWN,
  RECENT_RESPONSES,
} from '../data/surveyDashboardSample'
import '../components/AboutUs.css'
import './SurveyDashboardPage.css'

const TREND_MAX = Math.max(...RESPONSES_BY_WEEK.map((w) => w.count))

function BarChart({ title, items }) {
  return (
    <article className="survey-dash__panel">
      <h2>{title}</h2>
      <div className="survey-dash__bars">
        {items.map((item) => (
          <div key={item.label} className="survey-dash__bar-row">
            <span className="survey-dash__bar-label">{item.label}</span>
            <div className="survey-dash__bar-track">
              <div className="survey-dash__bar-fill" style={{ width: `${item.pct}%` }} />
            </div>
            <span className="survey-dash__bar-pct">{item.pct}%</span>
          </div>
        ))}
      </div>
    </article>
  )
}

export default function SurveyDashboardPage() {
  return (
    <div className="page-wrap">
      <Header />
      <main className="static-page survey-dash">
        <header className="static-hero survey-dash__hero">
          <div className="survey-dash__hero-inner">
            <span className="survey-dash__eyebrow">Survey analytics</span>
            <h1 className="static-hero__title">Green Energy &amp; EV Survey</h1>
            <p className="static-hero__lead">Sample dashboard · {COMPANY.shortName}</p>
            <span className="survey-dash__badge" role="status">
              Demo data only — not live responses
            </span>
          </div>
        </header>

        <div className="static-inner survey-dash__inner">
          <div className="survey-dash__toolbar">
            <span>
              Period: <strong>{DASHBOARD_META.periodLabel}</strong>
            </span>
            <span>
              Last updated: <strong>{DASHBOARD_META.lastUpdated}</strong>
            </span>
          </div>

          <section aria-label="Summary statistics">
            <div className="survey-dash__stats">
              {SUMMARY_STATS.map((s) => (
                <article key={s.label} className="survey-dash__stat">
                  <span className="survey-dash__stat-label">{s.label}</span>
                  <span className="survey-dash__stat-value">{s.value}</span>
                  <span className="survey-dash__stat-detail">{s.detail}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="survey-dash__grid" aria-label="Response trends and geography">
            <article className="survey-dash__panel survey-dash__panel--wide">
              <h2>Responses per week</h2>
              <p className="survey-dash__panel-lead">Weekly submission volume (sample)</p>
              <div className="survey-dash__trend" role="img" aria-label="Bar chart of weekly response counts">
                {RESPONSES_BY_WEEK.map((w) => (
                  <div key={w.week} className="survey-dash__trend-col">
                    <span className="survey-dash__trend-count">{w.count}</span>
                    <div className="survey-dash__trend-bar-wrap">
                      <div
                        className="survey-dash__trend-bar"
                        style={{ height: `${(w.count / TREND_MAX) * 100}%` }}
                      />
                    </div>
                    <span className="survey-dash__trend-week">{w.week}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="survey-dash__panel">
              <h2>Top cities</h2>
              <div className="survey-dash__bars">
                {CITY_BREAKDOWN.map((c) => (
                  <div key={c.city} className="survey-dash__bar-row">
                    <span className="survey-dash__bar-label">
                      {c.city} ({c.count})
                    </span>
                    <div className="survey-dash__bar-track">
                      <div className="survey-dash__bar-fill" style={{ width: `${c.pct}%` }} />
                    </div>
                    <span className="survey-dash__bar-pct">{c.pct}%</span>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="survey-dash__grid" aria-label="Vehicle and EV interest">
            <BarChart title="Current vehicle type" items={CURRENT_VEHICLE} />
            <BarChart title="EV interest" items={EV_INTEREST} />
          </section>

          <section className="survey-dash__grid" aria-label="Awareness and adoption">
            <BarChart title="Top EV concerns" items={TOP_CONCERNS} />
            <BarChart title="Why respondents have not switched" items={NOT_SWITCHED_REASONS} />
          </section>

          <section className="survey-dash__grid" aria-label="Infrastructure and intent">
            <BarChart title="Preferred charging method" items={CHARGING_PREFERENCE} />
            <BarChart title="Purchase intent (next 3 years)" items={PURCHASE_INTENT_3Y} />
          </section>

          <article className="survey-dash__panel survey-dash__panel--wide">
            <h2>Recent responses</h2>
            <p className="survey-dash__panel-lead">Anonymised sample rows — personal details abbreviated</p>
            <div className="survey-dash__table-wrap">
              <table className="survey-dash__table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Respondent</th>
                    <th scope="col">City</th>
                    <th scope="col">Current vehicle</th>
                    <th scope="col">3-yr intent</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {RECENT_RESPONSES.map((r) => (
                    <tr key={r.id}>
                      <td>{r.id}</td>
                      <td>{r.name}</td>
                      <td>{r.city}</td>
                      <td>{r.vehicle}</td>
                      <td>
                        <span className="survey-dash__intent">{r.intent}</span>
                      </td>
                      <td>{r.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <p className="survey-dash__panel-lead" style={{ margin: 0 }}>
            {DASHBOARD_META.note}
          </p>

          <div className="static-back survey-dash__footer-links">
            <Link to="/survey">Open live survey →</Link>
            <Link to="/research">Research overview</Link>
            <Link to="/">← Home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
