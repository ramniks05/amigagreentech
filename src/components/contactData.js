/** India mobile without + (used for tel: and wa.me) — phone & WhatsApp use the same number */
const MOBILE_INTERNATIONAL = '919355532554'

export const CONTACT = {
  address: 'D2, D Block market, Sector 55, Noida, Uttar Pradesh, India',
  addressShort: 'D2, D Block market, Sector 55, Noida',
  mobile: '+91 93555 32554',
  mobileRaw: `+${MOBILE_INTERNATIONAL}`,
  email: 'keshavgupta@amigasgreentech.com',
  /** Same as phone — WhatsApp links use this */
  whatsappNumber: MOBILE_INTERNATIONAL,
}

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/1awDoCEpy9/',
  twitter: 'https://twitter.com/',
  linkedin: 'https://www.linkedin.com/company/',
  instagram: 'https://www.instagram.com/amigasgreentech/',
  youtube: 'https://www.youtube.com/@amigasgreentech?si=mIbaU0KFjG0LhnzA',
}

export const whatsappUrl = (number = CONTACT.whatsappNumber, message = '') => {
  const text = message ? `&text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${number}${text}`
}
