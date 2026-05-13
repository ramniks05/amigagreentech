import { useMemo, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { SurveyQR } from './SurveyQR'
import { COMPANY } from '../company'
import './SurveyForm.css'

/* ---------- Option lists ---------- */

const VEHICLE_TYPES = [
  'Petrol',
  'Diesel',
  'CNG',
  'Hybrid',
  'Electric Vehicle (EV)',
  'No personal vehicle',
]

const EV_INTEREST = [
  'Electric Scooter',
  'Electric Bike',
  'Electric Car',
  'Electric Commercial Vehicle',
  'Not interested in EVs',
]

const YES_NO = ['Yes', 'No']
const YES_NO_NOT_SURE = ['Yes', 'No', 'Not Sure']
const YES_NO_PARTIALLY_NOT_SURE = ['Yes', 'No', 'Partially', 'Not Sure']
const YES_NO_PARTIALLY = ['Yes', 'No', 'Partially']
const YES_NO_MAYBE = ['Yes', 'No', 'Maybe']

const POLLUTION_AWARENESS = ['Very aware', 'Somewhat aware', 'Not aware']

const EV_CONCERNS = [
  'Battery life',
  'Charging time',
  'High price',
  'Lack of charging stations',
  'Vehicle performance',
  'Safety concerns',
  'Resale value',
  'Maintenance',
  'Other',
]

const NOT_SWITCHED_REASONS = [
  'EVs are too expensive',
  'Charging infrastructure is poor',
  'Limited driving range',
  'Lack of trust in battery technology',
  'Lack of awareness',
  'ICE vehicles are more convenient',
  'Limited service centers',
  'Waiting for better technology',
]

const INFRA_IMPORTANCE = [
  'Extremely important',
  'Important',
  'Neutral',
  'Not important',
]

const CHARGING_PREFERENCE = [
  'Home charging',
  'Fast public charging',
  'Battery swapping',
  'Solar charging',
  'Combination of all',
]

const COMFORT_RANGE = ['Below 100 km', '100–200 km', '200–400 km', '400+ km']

const WAIT_TIME = [
  'Less than 15 minutes',
  '15–30 minutes',
  '30–60 minutes',
  'More than 1 hour',
]

const MOTIVATORS = [
  'Lower vehicle price',
  'Better charging network',
  'Longer battery life',
  'Lower electricity cost',
  'Better technology',
  'Environmental benefits',
  'Government incentives',
]

const FUTURE_IMPROVEMENTS = [
  'Faster charging',
  'Longer range',
  'Lower cost',
  'Better battery safety',
  'More service centers',
  'Better performance',
  'Solar integration',
]

const PURCHASE_INTENT = ['Definitely', 'Probably', 'Maybe', 'Unlikely', 'Never']

/* ---------- Initial state ---------- */

const initialForm = {
  // Personal
  fullName: '',
  mobileNumber: '',
  email: '',
  city: '',
  // Section A — Basic Information
  q1_currentVehicle: '',
  q2_evInterest: '',
  q3_drivenEv: '',
  // Section B — EV Awareness & Perception
  q4_pollutionSerious: '',
  q5_evHelpsPollution: '',
  q6_economicImpactAwareness: '',
  q7_evConcern: '',
  // Section C — EV Adoption Challenges
  q8_notSwitchedReason: '',
  q9_infraImportance: '',
  q10_enoughStations: '',
  q11_chargingPreference: '',
  q12_comfortRange: '',
  q13_waitTime: '',
  // Section D — Cost & Government Support
  q14_affordable: '',
  q15_subsidyEncouragement: '',
  q16_motivator: '',
  q17_batteryDisposalSafe: '',
  // Section E — Future Expectations
  q18_futureImprovement: '',
  q19_slowingFactor: '',
  q20_buyIntent3y: '',
  q21_trustFeedback: '',
}

const TOTAL_SECTIONS = 6
const SECTION_TITLES = {
  1: 'Section 1 · Personal Information',
  2: 'Section 2 · Basic Information',
  3: 'Section 3 · EV Awareness & Perception',
  4: 'Section 4 · EV Adoption Challenges',
  5: 'Section 5 · Cost & Government Support',
  6: 'Section 6 · Future Expectations',
}

/* ---------- Reusable bits ---------- */

function RadioGroup({ name, value, options, onChange, grid = false }) {
  return (
    <div className={`survey-options ${grid ? 'survey-options-grid' : ''}`}>
      {options.map((opt) => (
        <label key={opt} className="survey-radio">
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={(e) => onChange(e.target.value)}
          />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  )
}

function Question({ number, label, optional, children }) {
  return (
    <div className="survey-field">
      <label>
        <strong className="survey-qnum">Q{number}.</strong>{' '}
        {label}
        {optional && <span className="survey-optional"> (optional)</span>}
      </label>
      {children}
    </div>
  )
}

/* ---------- Main component ---------- */

function SurveyForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [currentSection, setCurrentSection] = useState(1)

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const progress = useMemo(
    () => (currentSection / TOTAL_SECTIONS) * 100,
    [currentSection],
  )

  const validatePersonal = () => {
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
    if (!validatePersonal()) {
      setCurrentSection(1)
      return
    }
    console.log('Survey submission (JSON):', JSON.stringify(form, null, 2))
    alert('Thank you! Your responses have been recorded.')
    setForm(initialForm)
    setErrors({})
    setCurrentSection(1)
  }

  const goNext = () => {
    if (currentSection === 1 && !validatePersonal()) return
    setCurrentSection((s) => Math.min(TOTAL_SECTIONS, s + 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goBack = () => {
    setCurrentSection((s) => Math.max(1, s - 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToSection = (n) => {
    if (n === 1 || (n > 1 && validatePersonal())) {
      setCurrentSection(n)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="survey-page">
      <Header />

      <main className="survey-main">
        <div className="survey-container">
          <h1 className="survey-title">Green Energy &amp; Electric Vehicle (EV) Survey</h1>
          <p className="survey-subtitle">Help us understand your experience, awareness and expectations around EVs.</p>
          <p className="survey-byline">Public research survey · {COMPANY.shortName}</p>

          <div className="survey-share-strip">
            <SurveyQR size={72} showLabel={false} variant="card" />
            <p className="survey-share-strip__text">
              Share this page — others can scan the QR code to open the survey directly.
            </p>
          </div>

          {/* Progress indicator */}
          <div
            className="survey-progress"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="survey-progress-bar" style={{ width: `${progress}%` }} />
            <div className="survey-progress-steps">
              {Array.from({ length: TOTAL_SECTIONS }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`survey-progress-dot ${currentSection === n ? 'active' : ''}`}
                  onClick={() => goToSection(n)}
                  aria-label={`Go to section ${n}`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <form className="survey-form" onSubmit={handleSubmit} noValidate>
            {/* Section 1: Personal Information */}
            <section
              className={`survey-card ${currentSection === 1 ? 'active' : ''}`}
              aria-labelledby="sec1-heading"
            >
              <h2 id="sec1-heading" className="survey-card-title">{SECTION_TITLES[1]}</h2>

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
                <button type="button" className="btn btn-primary" onClick={goNext}>
                  Next: Basic Information
                </button>
              </div>
            </section>

            {/* Section 2: Basic Information */}
            <section
              className={`survey-card ${currentSection === 2 ? 'active' : ''}`}
              aria-labelledby="sec2-heading"
            >
              <h2 id="sec2-heading" className="survey-card-title">{SECTION_TITLES[2]}</h2>

              <Question number={1} label="What type of vehicle do you currently use?">
                <RadioGroup
                  name="q1_currentVehicle"
                  value={form.q1_currentVehicle}
                  options={VEHICLE_TYPES}
                  onChange={(v) => update('q1_currentVehicle', v)}
                  grid
                />
              </Question>

              <Question number={2} label="Which type of EV are you most interested in?">
                <RadioGroup
                  name="q2_evInterest"
                  value={form.q2_evInterest}
                  options={EV_INTEREST}
                  onChange={(v) => update('q2_evInterest', v)}
                  grid
                />
              </Question>

              <Question number={3} label="Have you ever used or driven an EV?">
                <RadioGroup
                  name="q3_drivenEv"
                  value={form.q3_drivenEv}
                  options={YES_NO}
                  onChange={(v) => update('q3_drivenEv', v)}
                />
              </Question>

              <div className="survey-actions">
                <button type="button" className="btn btn-secondary" onClick={goBack}>Back</button>
                <button type="button" className="btn btn-primary" onClick={goNext}>Next: Awareness</button>
              </div>
            </section>

            {/* Section 3: EV Awareness & Perception */}
            <section
              className={`survey-card ${currentSection === 3 ? 'active' : ''}`}
              aria-labelledby="sec3-heading"
            >
              <h2 id="sec3-heading" className="survey-card-title">{SECTION_TITLES[3]}</h2>

              <Question number={4} label="Do you believe air pollution from petrol and diesel vehicles is a serious problem?">
                <RadioGroup
                  name="q4_pollutionSerious"
                  value={form.q4_pollutionSerious}
                  options={YES_NO_NOT_SURE}
                  onChange={(v) => update('q4_pollutionSerious', v)}
                />
              </Question>

              <Question number={5} label="Do you think EVs can help reduce pollution and improve public health?">
                <RadioGroup
                  name="q5_evHelpsPollution"
                  value={form.q5_evHelpsPollution}
                  options={YES_NO_PARTIALLY_NOT_SURE}
                  onChange={(v) => update('q5_evHelpsPollution', v)}
                />
              </Question>

              <Question number={6} label="How aware are you of the economic impact of importing petrol and diesel?">
                <RadioGroup
                  name="q6_economicImpactAwareness"
                  value={form.q6_economicImpactAwareness}
                  options={POLLUTION_AWARENESS}
                  onChange={(v) => update('q6_economicImpactAwareness', v)}
                />
              </Question>

              <Question number={7} label="What is your biggest concern about EVs?">
                <RadioGroup
                  name="q7_evConcern"
                  value={form.q7_evConcern}
                  options={EV_CONCERNS}
                  onChange={(v) => update('q7_evConcern', v)}
                  grid
                />
              </Question>

              <div className="survey-actions">
                <button type="button" className="btn btn-secondary" onClick={goBack}>Back</button>
                <button type="button" className="btn btn-primary" onClick={goNext}>Next: Challenges</button>
              </div>
            </section>

            {/* Section 4: EV Adoption Challenges */}
            <section
              className={`survey-card ${currentSection === 4 ? 'active' : ''}`}
              aria-labelledby="sec4-heading"
            >
              <h2 id="sec4-heading" className="survey-card-title">{SECTION_TITLES[4]}</h2>

              <Question number={8} label="What is the main reason you have not switched to an EV yet?">
                <RadioGroup
                  name="q8_notSwitchedReason"
                  value={form.q8_notSwitchedReason}
                  options={NOT_SWITCHED_REASONS}
                  onChange={(v) => update('q8_notSwitchedReason', v)}
                  grid
                />
              </Question>

              <Question number={9} label="How important is charging infrastructure in your decision to buy an EV?">
                <RadioGroup
                  name="q9_infraImportance"
                  value={form.q9_infraImportance}
                  options={INFRA_IMPORTANCE}
                  onChange={(v) => update('q9_infraImportance', v)}
                  grid
                />
              </Question>

              <Question number={10} label="Do you think there are enough public charging stations in your city?">
                <RadioGroup
                  name="q10_enoughStations"
                  value={form.q10_enoughStations}
                  options={YES_NO_NOT_SURE}
                  onChange={(v) => update('q10_enoughStations', v)}
                />
              </Question>

              <Question number={11} label="What charging option would you prefer?">
                <RadioGroup
                  name="q11_chargingPreference"
                  value={form.q11_chargingPreference}
                  options={CHARGING_PREFERENCE}
                  onChange={(v) => update('q11_chargingPreference', v)}
                  grid
                />
              </Question>

              <Question number={12} label="How much driving range would make you comfortable buying an EV?">
                <RadioGroup
                  name="q12_comfortRange"
                  value={form.q12_comfortRange}
                  options={COMFORT_RANGE}
                  onChange={(v) => update('q12_comfortRange', v)}
                  grid
                />
              </Question>

              <Question number={13} label="How long are you willing to wait for charging?">
                <RadioGroup
                  name="q13_waitTime"
                  value={form.q13_waitTime}
                  options={WAIT_TIME}
                  onChange={(v) => update('q13_waitTime', v)}
                  grid
                />
              </Question>

              <div className="survey-actions">
                <button type="button" className="btn btn-secondary" onClick={goBack}>Back</button>
                <button type="button" className="btn btn-primary" onClick={goNext}>Next: Cost &amp; Support</button>
              </div>
            </section>

            {/* Section 5: Cost & Government Support */}
            <section
              className={`survey-card ${currentSection === 5 ? 'active' : ''}`}
              aria-labelledby="sec5-heading"
            >
              <h2 id="sec5-heading" className="survey-card-title">{SECTION_TITLES[5]}</h2>

              <Question number={14} label="Do you think EVs are currently affordable for middle-class families?">
                <RadioGroup
                  name="q14_affordable"
                  value={form.q14_affordable}
                  options={YES_NO_PARTIALLY}
                  onChange={(v) => update('q14_affordable', v)}
                />
              </Question>

              <Question number={15} label="Would government subsidies or tax benefits encourage you to buy an EV?">
                <RadioGroup
                  name="q15_subsidyEncouragement"
                  value={form.q15_subsidyEncouragement}
                  options={YES_NO_MAYBE}
                  onChange={(v) => update('q15_subsidyEncouragement', v)}
                />
              </Question>

              <Question number={16} label="What would motivate you most to switch to an EV?">
                <RadioGroup
                  name="q16_motivator"
                  value={form.q16_motivator}
                  options={MOTIVATORS}
                  onChange={(v) => update('q16_motivator', v)}
                  grid
                />
              </Question>

              <Question number={17} label="Do you think EV batteries are environmentally safe after disposal?">
                <RadioGroup
                  name="q17_batteryDisposalSafe"
                  value={form.q17_batteryDisposalSafe}
                  options={YES_NO_NOT_SURE}
                  onChange={(v) => update('q17_batteryDisposalSafe', v)}
                />
              </Question>

              <div className="survey-actions">
                <button type="button" className="btn btn-secondary" onClick={goBack}>Back</button>
                <button type="button" className="btn btn-primary" onClick={goNext}>Next: Future</button>
              </div>
            </section>

            {/* Section 6: Future Expectations + Final Feedback */}
            <section
              className={`survey-card ${currentSection === 6 ? 'active' : ''}`}
              aria-labelledby="sec6-heading"
            >
              <h2 id="sec6-heading" className="survey-card-title">{SECTION_TITLES[6]}</h2>

              <Question number={18} label="What improvements do you expect most from future EVs?">
                <RadioGroup
                  name="q18_futureImprovement"
                  value={form.q18_futureImprovement}
                  options={FUTURE_IMPROVEMENTS}
                  onChange={(v) => update('q18_futureImprovement', v)}
                  grid
                />
              </Question>

              <Question number={19} label="In your opinion, what is slowing EV adoption the most in India?">
                <textarea
                  id="q19_slowingFactor"
                  value={form.q19_slowingFactor}
                  onChange={(e) => update('q19_slowingFactor', e.target.value)}
                  placeholder="Share your thoughts…"
                  rows={3}
                />
              </Question>

              <Question number={20} label="Would you consider buying an EV in the next 3 years?">
                <RadioGroup
                  name="q20_buyIntent3y"
                  value={form.q20_buyIntent3y}
                  options={PURCHASE_INTENT}
                  onChange={(v) => update('q20_buyIntent3y', v)}
                />
              </Question>

              <Question
                number={21}
                label="What changes would make you trust and adopt EV technology faster?"
                optional
              >
                <textarea
                  id="q21_trustFeedback"
                  value={form.q21_trustFeedback}
                  onChange={(e) => update('q21_trustFeedback', e.target.value)}
                  placeholder="Optional — your feedback helps us learn"
                  rows={3}
                />
              </Question>

              <div className="survey-actions survey-actions-submit">
                <button type="button" className="btn btn-secondary" onClick={goBack}>Back</button>
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
