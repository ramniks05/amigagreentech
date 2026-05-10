/** Pollinations.ai — AI-generated preview images (swap for local assets anytime). */

function aiImg(prompt, width = 1024, height = 640) {
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${width}&height=${height}&nologo=true`
}

/** Curated stock fallbacks if AI CDN is slow or blocked */
export const HERO_IMAGE_FALLBACK = {
  evIssue:
    'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=85',
  evResolution:
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=85',
  pollutionIssue:
    'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=85',
  pollutionResolution:
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=85',
  solarIssue:
    'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=85',
  solarResolution:
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=85',
}

/** Home hero carousel — copy + AI imagery hooks */
export const HERO_SLIDES = [
  {
    id: 'ev',
    issueBadge: 'Challenge · mobility',
    issueTitle: 'EV adoption bottlenecks',
    issueBody:
      'Charging gaps, range anxiety, and battery lifecycle concerns slow clean mobility for fleets and households.',
    resolutionBadge: 'R&D in motion',
    resolutionTitle: 'Team working toward resolution',
    resolutionBody:
      'Lab and field work on charging behaviour, storage coupling, and pilot routes—closing the gap between policy intent and on-ground adoption.',
    variant: 'ev',
    issueAi: aiImg(
      'Photorealistic scene electric vehicle charging shortage urban drivers waiting frustrated dusk cinematic mood olive green and warm beige color grading editorial photography no text',
      1024,
      640,
    ),
    resolutionAi: aiImg(
      'Professional diverse R&D engineers team working electric vehicle battery charging lab computers prototypes olive green beige interior soft lighting photorealistic no text',
      1024,
      640,
    ),
    issueFallback: HERO_IMAGE_FALLBACK.evIssue,
    resolutionFallback: HERO_IMAGE_FALLBACK.evResolution,
  },
  {
    id: 'pollution',
    issueBadge: 'Challenge · environment',
    issueTitle: 'Pollution loads remain critical',
    issueBody:
      'Industrial corridors and dense urban pockets still breach safe limits—monitoring alone is not enough.',
    resolutionBadge: 'Resolution status',
    resolutionTitle: 'Mitigation programme',
    resolutionBody:
      'Structured pilots for measurement, targeted intervention concepts, and partner rollout—with transparent milestones.',
    progressPercent: 50,
    variant: 'pollution',
    issueAi: aiImg(
      'Photorealistic industrial city smog air pollution haze aerial dramatic sky muted olive green beige tones environmental editorial no text',
      1024,
      640,
    ),
    resolutionAi: aiImg(
      'Environmental scientists technicians deploying air pollution monitoring sensors filtration prototype workshop hopeful olive green beige photorealistic teamwork no text',
      1024,
      640,
    ),
    issueFallback: HERO_IMAGE_FALLBACK.pollutionIssue,
    resolutionFallback: HERO_IMAGE_FALLBACK.pollutionResolution,
  },
  {
    id: 'solar',
    issueBadge: 'Challenge · energy',
    issueTitle: 'Solar must integrate cleanly',
    issueBody:
      'Rooftop economics, grid stability, and storage sizing still block faster solar uptake at scale.',
    resolutionBadge: 'R&D in motion',
    resolutionTitle: 'Optimisation & deployment',
    resolutionBody:
      'Yield forecasting, hybrid architectures, and hardware–software co-design so solar delivers predictable value.',
    variant: 'solar',
    issueAi: aiImg(
      'Residential rooftop solar panels partly cloudy sky realistic olive beige palette sustainability editorial photography wide angle no text',
      1024,
      640,
    ),
    resolutionAi: aiImg(
      'Technicians installing solar inverter smart grid renewable energy bright optimistic olive green beige tones photorealistic safety helmets no text',
      1024,
      640,
    ),
    issueFallback: HERO_IMAGE_FALLBACK.solarIssue,
    resolutionFallback: HERO_IMAGE_FALLBACK.solarResolution,
  },
]
