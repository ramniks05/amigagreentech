import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { SurveyQR } from './SurveyQR'
import { COMPANY } from '../company'
import './SurveyForm.css'

const VEHICLE_TYPES = [
  { value: 'ev', label: 'Electric Vehicle (EV)' },
  { value: 'petrol', label: 'Petrol Vehicle' },
  { value: 'diesel', label: 'Diesel Vehicle' },
  { value: 'cng', label: 'CNG Vehicle' },
  { value: 'hybrid', label: 'Hybrid Vehicle' },
]

const EV_TYPES = [
  { value: 'two-wheeler', label: 'Two-Wheeler' },
  { value: 'three-wheeler', label: 'Three-Wheeler' },
  { value: 'four-wheeler', label: 'Four-Wheeler' },
  { value: 'commercial', label: 'Commercial Vehicle' },
]

const EV_CHALLENGES = [
  'Limited charging stations',
  'Long charging time',
  'Battery performance issues',
  'High battery replacement cost',
  'Lack of service centers',
  'High purchase cost',
  'No major challenges',
]

const CHARGING_LOCATIONS = [
  { value: 'home', label: 'Home' },
  { value: 'office', label: 'Office' },
  { value: 'public', label: 'Public station' },
  { value: 'swapping', label: 'Battery swapping station' },
]

const REASONS_NOT_EV = [
  'Expensive',
  'Lack of charging infrastructure',
  'Range anxiety',
  'Long charging time',
  'Lack of awareness',
]

const SATISFACTION_LEVELS = [
  { value: '1', label: '1 - Very dissatisfied' },
  { value: '2', label: '2' },
  { value: '3', label: '3 - Neutral' },
  { value: '4', label: '4' },
  { value: '5', label: '5 - Very satisfied' },
]

const initialForm = {
  fullName: '',
  mobileNumber: '',
  email: '',
  city: '',
  ownVehicle: '',
  vehicleType: '',
  evType: '',
  evFacingIssues: '',
  evChallenges: [],
  chargingLocation: '',
  satisfactionLevel: '',
  recommendEv: '',
  evSuggestions: '',
  awareOfEv: '',
  reasonNotUsingEv: '',
  futureEvPlan: '',
  reasonNotUsingEvList: [],
  awareOfRenewable: '',
  interestedInRenewable: '',
  greenSuggestions: '',
}

function SurveyForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [currentSection, setCurrentSection] = useState(1)

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const toggleChallenge = (challenge) => {
    setForm((prev) => ({
      ...prev,
      evChallenges: prev.evChallenges.includes(challenge)
        ? prev.evChallenges.filter((c) => c !== challenge)
        : [...prev.evChallenges, challenge],
    }))
  }

  const isEvUser = form.vehicleType === 'ev'
  const totalSections = 4
  const hasVehicleSection = form.ownVehicle === 'yes'
  const displaySection = currentSection === 3 && !hasVehicleSection ? 4 : currentSection
  const progress = (displaySection / totalSections) * 100

  const validate = () => {
    const next = {}
    if (!form.fullName.trim()) next.fullName = 'Full name is required'
    if (!form.mobileNumber.trim()) next.mobileNumber = 'Mobile number is required'
    else if (!/^[6-9]\d{9}$/.test(form.mobileNumber.replace(/\s/g, '')))
      next.mobileNumber = 'Enter a valid 10-digit mobile number'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) {
      setCurrentSection(1)
      return
    }
    const payload = { ...form, reasonNotUsingEv: form.reasonNotUsingEvList.join(', ') }
    delete payload.reasonNotUsingEvList
    console.log('Survey submission (JSON):', JSON.stringify(payload, null, 2))
    alert('Thank you! Your responses have been recorded. Check the browser console for JSON output.')
    setForm(initialForm)
    setErrors({})
    setCurrentSection(1)
  }

  const goToSection = (n) => {
    if (n === 1) setCurrentSection(1)
    else if (n === 2) setCurrentSection(2)
    else if (n === 3 && form.ownVehicle === 'yes') setCurrentSection(3)
    else if (n === 4) setCurrentSection(4)
  }

  return (
    <div className="survey-page">
      <Header />

      <main className="survey-main">
        <div className="survey-container">
          <h1 className="survey-title">Green Energy & Electric Vehicle (EV) Survey</h1>
          <p className="survey-subtitle">Help us understand your experience and awareness.</p>
          <p className="survey-byline">Public research survey · {COMPANY.shortName}</p>

          <div className="survey-share-strip">
            <SurveyQR size={72} showLabel={false} variant="card" />
            <p className="survey-share-strip__text">Share this page: others can scan the QR code to open the survey directly.</p>
          </div>

          {/* Progress indicator */}
          <div className="survey-progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div className="survey-progress-bar" style={{ width: `${progress}%` }} />
            <div className="survey-progress-steps">
              {[1, 2, 3, 4].map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`survey-progress-dot ${displaySection === n ? 'active' : ''}`}
                  onClick={() => goToSection(n)}
                  aria-label={`Go to section ${n}`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <form className="survey-form" onSubmit={handleSubmit} noValidate>
            {/* Section 1: Basic Information */}
            <section className={`survey-card ${displaySection === 1 ? 'active' : ''}`} aria-labelledby="sec1-heading">
              <h2 id="sec1-heading" className="survey-card-title">Section 1: Basic Information</h2>
              <div className="survey-field">
                <label htmlFor="fullName">Full Name <span className="required">*</span></label>
                <input
                  id="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={(e) => update('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  className={errors.fullName ? 'error' : ''}
                  autoComplete="name"
                />
                {errors.fullName && <span className="survey-error">{errors.fullName}</span>}
              </div>
              <div className="survey-field">
                <label htmlFor="mobileNumber">Mobile Number <span className="required">*</span></label>
                <input
                  id="mobileNumber"
                  type="tel"
                  value={form.mobileNumber}
                  onChange={(e) => update('mobileNumber', e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="10-digit mobile number"
                  className={errors.mobileNumber ? 'error' : ''}
                  autoComplete="tel"
                />
                {errors.mobileNumber && <span className="survey-error">{errors.mobileNumber}</span>}
              </div>
              <div className="survey-field">
                <label htmlFor="email">Email Address (Optional)</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="your@email.com"
                  autoComplete="email"
                />
              </div>
              <div className="survey-field">
                <label htmlFor="city">City / Location</label>
                <input
                  id="city"
                  type="text"
                  value={form.city}
                  onChange={(e) => update('city', e.target.value)}
                  placeholder="City or area"
                  autoComplete="address-level2"
                />
              </div>
              <div className="survey-actions">
                <button type="button" className="btn btn-primary" onClick={() => goToSection(2)}>
                  Next: Vehicle Information
                </button>
              </div>
            </section>

            {/* Section 2: Vehicle Information */}
            <section className={`survey-card ${displaySection === 2 ? 'active' : ''}`} aria-labelledby="sec2-heading">
              <h2 id="sec2-heading" className="survey-card-title">Section 2: Vehicle Information</h2>
              <div className="survey-field">
                <label>Do you currently own or use a vehicle?</label>
                <div className="survey-options">
                  {['Yes', 'No'].map((opt) => (
                    <label key={opt} className="survey-radio">
                      <input
                        type="radio"
                        name="ownVehicle"
                        value={opt.toLowerCase()}
                        checked={form.ownVehicle === opt.toLowerCase()}
                        onChange={(e) => update('ownVehicle', e.target.value)}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              {form.ownVehicle === 'yes' && (
                <div className="survey-field">
                  <label>What type of vehicle do you currently use?</label>
                  <div className="survey-options survey-options-grid">
                    {VEHICLE_TYPES.map(({ value, label }) => (
                      <label key={value} className="survey-radio">
                        <input
                          type="radio"
                          name="vehicleType"
                          value={value}
                          checked={form.vehicleType === value}
                          onChange={(e) => update('vehicleType', e.target.value)}
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              <div className="survey-actions">
                <button type="button" className="btn btn-secondary" onClick={() => setCurrentSection(1)}>Back</button>
                <button type="button" className="btn btn-primary" onClick={() => setCurrentSection(form.ownVehicle === 'yes' ? 3 : 4)}>
                  Next
                </button>
              </div>
            </section>

            {/* Section 3A: For EV Users Only */}
            {isEvUser && (
              <section className={`survey-card ${displaySection === 3 ? 'active' : ''}`} aria-labelledby="sec3a-heading">
                <h2 id="sec3a-heading" className="survey-card-title">Section 3A: For EV Users Only</h2>
                <div className="survey-field">
                  <label>Type of EV</label>
                  <div className="survey-options survey-options-grid">
                    {EV_TYPES.map(({ value, label }) => (
                      <label key={value} className="survey-radio">
                        <input
                          type="radio"
                          name="evType"
                          value={value}
                          checked={form.evType === value}
                          onChange={(e) => update('evType', e.target.value)}
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="survey-field">
                  <label>Facing issues with EV?</label>
                  <div className="survey-options">
                    {['Yes', 'No'].map((opt) => (
                      <label key={opt} className="survey-radio">
                        <input
                          type="radio"
                          name="evFacingIssues"
                          value={opt.toLowerCase()}
                          checked={form.evFacingIssues === opt.toLowerCase()}
                          onChange={(e) => update('evFacingIssues', e.target.value)}
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="survey-field">
                  <label>Challenges (select all that apply)</label>
                  <div className="survey-checkboxes">
                    {EV_CHALLENGES.map((ch) => (
                      <label key={ch} className="survey-checkbox">
                        <input
                          type="checkbox"
                          checked={form.evChallenges.includes(ch)}
                          onChange={() => toggleChallenge(ch)}
                        />
                        <span>{ch}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="survey-field">
                  <label>Charging location</label>
                  <div className="survey-options survey-options-grid">
                    {CHARGING_LOCATIONS.map(({ value, label }) => (
                      <label key={value} className="survey-radio">
                        <input
                          type="radio"
                          name="chargingLocation"
                          value={value}
                          checked={form.chargingLocation === value}
                          onChange={(e) => update('chargingLocation', e.target.value)}
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="survey-field">
                  <label htmlFor="satisfactionLevel">Satisfaction level</label>
                  <select
                    id="satisfactionLevel"
                    value={form.satisfactionLevel}
                    onChange={(e) => update('satisfactionLevel', e.target.value)}
                  >
                    <option value="">Select</option>
                    {SATISFACTION_LEVELS.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>
                <div className="survey-field">
                  <label>Recommend EV?</label>
                  <div className="survey-options">
                    {['Yes', 'No', 'Maybe'].map((opt) => (
                      <label key={opt} className="survey-radio">
                        <input
                          type="radio"
                          name="recommendEv"
                          value={opt.toLowerCase()}
                          checked={form.recommendEv === opt.toLowerCase()}
                          onChange={(e) => update('recommendEv', e.target.value)}
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="survey-field">
                  <label htmlFor="evSuggestions">Suggestions</label>
                  <textarea
                    id="evSuggestions"
                    value={form.evSuggestions}
                    onChange={(e) => update('evSuggestions', e.target.value)}
                    placeholder="Your suggestions for EV experience..."
                    rows={3}
                  />
                </div>
                <div className="survey-actions">
                  <button type="button" className="btn btn-secondary" onClick={() => setCurrentSection(2)}>Back</button>
                  <button type="button" className="btn btn-primary" onClick={() => setCurrentSection(4)}>Next: Green Energy</button>
                </div>
              </section>
            )}

            {/* Section 3B: For Fossil Fuel Vehicle Users */}
            {form.ownVehicle === 'yes' && !isEvUser && (
              <section className={`survey-card ${displaySection === 3 ? 'active' : ''}`} aria-labelledby="sec3b-heading">
                <h2 id="sec3b-heading" className="survey-card-title">Section 3B: For Fossil Fuel Vehicle Users</h2>
                <div className="survey-field">
                  <label>Aware of EVs?</label>
                  <div className="survey-options">
                    {['Yes', 'No'].map((opt) => (
                      <label key={opt} className="survey-radio">
                        <input
                          type="radio"
                          name="awareOfEv"
                          value={opt.toLowerCase()}
                          checked={form.awareOfEv === opt.toLowerCase()}
                          onChange={(e) => update('awareOfEv', e.target.value)}
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="survey-field">
                  <label>Reason for not using EV (select if applicable)</label>
                  <div className="survey-checkboxes">
                    {REASONS_NOT_EV.map((r) => (
                      <label key={r} className="survey-checkbox">
                        <input
                          type="checkbox"
                          checked={form.reasonNotUsingEvList.includes(r)}
                          onChange={() => {
                            const next = form.reasonNotUsingEvList.includes(r)
                              ? form.reasonNotUsingEvList.filter((x) => x !== r)
                              : [...form.reasonNotUsingEvList, r]
                            setForm((prev) => ({ ...prev, reasonNotUsingEvList: next }))
                          }}
                        />
                        <span>{r}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="survey-field">
                  <label htmlFor="futureEvPlan">Future EV purchase plan</label>
                  <input
                    id="futureEvPlan"
                    type="text"
                    value={form.futureEvPlan}
                    onChange={(e) => update('futureEvPlan', e.target.value)}
                    placeholder="e.g. Planning in 1–2 years"
                  />
                </div>
                <div className="survey-actions">
                  <button type="button" className="btn btn-secondary" onClick={() => setCurrentSection(2)}>Back</button>
                  <button type="button" className="btn btn-primary" onClick={() => setCurrentSection(4)}>Next: Green Energy</button>
                </div>
              </section>
            )}

            {/* Section 4: Green Energy Awareness */}
            <section className={`survey-card ${displaySection === 4 ? 'active' : ''}`} aria-labelledby="sec4-heading">
              <h2 id="sec4-heading" className="survey-card-title">Section 4: Green Energy Awareness</h2>
              <div className="survey-field">
                <label>Aware of renewable energy?</label>
                <div className="survey-options">
                  {['Yes', 'No'].map((opt) => (
                    <label key={opt} className="survey-radio">
                      <input
                        type="radio"
                        name="awareOfRenewable"
                        value={opt.toLowerCase()}
                        checked={form.awareOfRenewable === opt.toLowerCase()}
                        onChange={(e) => update('awareOfRenewable', e.target.value)}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="survey-field">
                <label htmlFor="interestedInRenewable">Interested in renewable energy installation?</label>
                <input
                  id="interestedInRenewable"
                  type="text"
                  value={form.interestedInRenewable}
                  onChange={(e) => update('interestedInRenewable', e.target.value)}
                  placeholder="e.g. Solar for home, Rooftop solar..."
                />
              </div>
              <div className="survey-field">
                <label htmlFor="greenSuggestions">Suggestions</label>
                <textarea
                  id="greenSuggestions"
                  value={form.greenSuggestions}
                  onChange={(e) => update('greenSuggestions', e.target.value)}
                  placeholder="Your suggestions for green energy..."
                  rows={3}
                />
              </div>
              <div className="survey-actions survey-actions-submit">
                <button type="button" className="btn btn-secondary" onClick={() => setCurrentSection(form.ownVehicle === 'yes' ? 3 : 2)}>
                  Back
                </button>
                <button type="submit" className="btn btn-submit">Submit Survey</button>
              </div>
            </section>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default SurveyForm
