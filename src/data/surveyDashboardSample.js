/** Dummy sample data for the survey dashboard (demonstration only). */

export const DASHBOARD_META = {
  lastUpdated: '16 May 2026',
  periodLabel: 'Last 90 days',
  note: 'Sample data for demonstration — not connected to live submissions.',
}

export const SUMMARY_STATS = [
  { label: 'Total responses', value: '1,284', detail: '+12% vs prior period' },
  { label: 'Completion rate', value: '78%', detail: '1,002 finished all sections' },
  { label: 'Avg. time to complete', value: '6m 40s', detail: 'Median 5m 55s' },
  { label: 'Cities represented', value: '47', detail: 'Top: Noida, Delhi, Gurugram' },
]

export const RESPONSES_BY_WEEK = [
  { week: '14 Apr', count: 68 },
  { week: '21 Apr', count: 92 },
  { week: '28 Apr', count: 105 },
  { week: '5 May', count: 118 },
  { week: '12 May', count: 134 },
]

export const CURRENT_VEHICLE = [
  { label: 'Petrol', pct: 32 },
  { label: 'Diesel', pct: 24 },
  { label: 'CNG', pct: 11 },
  { label: 'Hybrid', pct: 6 },
  { label: 'Electric Vehicle (EV)', pct: 9 },
  { label: 'No personal vehicle', pct: 18 },
]

export const EV_INTEREST = [
  { label: 'Electric Scooter', pct: 28 },
  { label: 'Electric Bike', pct: 22 },
  { label: 'Electric Car', pct: 31 },
  { label: 'Electric Commercial Vehicle', pct: 7 },
  { label: 'Not interested in EVs', pct: 12 },
]

export const TOP_CONCERNS = [
  { label: 'Lack of charging stations', pct: 41 },
  { label: 'High price', pct: 38 },
  { label: 'Charging time', pct: 34 },
  { label: 'Battery life', pct: 29 },
  { label: 'Limited driving range', pct: 26 },
]

export const NOT_SWITCHED_REASONS = [
  { label: 'EVs are too expensive', pct: 44 },
  { label: 'Charging infrastructure is poor', pct: 39 },
  { label: 'Limited driving range', pct: 31 },
  { label: 'ICE vehicles are more convenient', pct: 22 },
  { label: 'Waiting for better technology', pct: 18 },
]

export const CHARGING_PREFERENCE = [
  { label: 'Home charging', pct: 36 },
  { label: 'Fast public charging', pct: 28 },
  { label: 'Battery swapping', pct: 19 },
  { label: 'Solar charging', pct: 9 },
  { label: 'Combination of all', pct: 8 },
]

export const PURCHASE_INTENT_3Y = [
  { label: 'Definitely', pct: 14 },
  { label: 'Probably', pct: 31 },
  { label: 'Maybe', pct: 28 },
  { label: 'Unlikely', pct: 17 },
  { label: 'Never', pct: 10 },
]

export const CITY_BREAKDOWN = [
  { city: 'Noida', count: 214, pct: 17 },
  { city: 'Delhi', count: 198, pct: 15 },
  { city: 'Gurugram', count: 156, pct: 12 },
  { city: 'Ghaziabad', count: 89, pct: 7 },
  { city: 'Other', count: 627, pct: 49 },
]

export const RECENT_RESPONSES = [
  { id: 'R-1284', name: 'A. S.', city: 'Noida', vehicle: 'Petrol', intent: 'Probably', date: '15 May 2026' },
  { id: 'R-1283', name: 'R. K.', city: 'Delhi', vehicle: 'Diesel', intent: 'Maybe', date: '15 May 2026' },
  { id: 'R-1282', name: 'P. M.', city: 'Gurugram', vehicle: 'Electric Vehicle (EV)', intent: 'Definitely', date: '14 May 2026' },
  { id: 'R-1281', name: 'S. T.', city: 'Ghaziabad', vehicle: 'CNG', intent: 'Unlikely', date: '14 May 2026' },
  { id: 'R-1280', name: 'V. N.', city: 'Noida', vehicle: 'No personal vehicle', intent: 'Probably', date: '13 May 2026' },
  { id: 'R-1279', name: 'K. G.', city: 'Delhi', vehicle: 'Hybrid', intent: 'Maybe', date: '13 May 2026' },
]
