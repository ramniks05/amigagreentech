import { SOCIAL_LINKS } from '../components/contactData'

/**
 * Featured videos — replace youtubeId with your published interview/survey clips.
 * When youtubeId is empty, the UI links to fallbackUrl (channel or specific video).
 */
export const FEATURED_VIDEOS = [
  {
    id: 'v1',
    title: 'Survey voices — mobility & EV',
    caption: 'Field perspectives from our Green Energy & EV survey outreach.',
    youtubeId: '',
    fallbackUrl: SOCIAL_LINKS.youtube,
  },
  {
    id: 'v2',
    title: 'Survey voices — environment',
    caption: 'Community interviews informing pollution and air-quality priorities.',
    youtubeId: '',
    fallbackUrl: SOCIAL_LINKS.youtube,
  },
  {
    id: 'v3',
    title: 'Survey voices — solar & grids',
    caption: 'Rooftop and MSME conversations on adoption barriers.',
    youtubeId: '',
    fallbackUrl: SOCIAL_LINKS.youtube,
  },
]
