// Dummy contact data – replace with real details when ready

export const CONTACT = {
  address: '123 Green Tech Park, Sector 5, Bangalore, Karnataka 560001, India',
  addressShort: '123 Green Tech Park, Bangalore 560001',
  mobile: '+91 98765 43210',
  mobileRaw: '919876543210',
  email: 'contact@amigagreentech.com',
  whatsappNumber: '919876543210',
}

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
  linkedin: 'https://www.linkedin.com/company/',
  instagram: 'https://www.instagram.com/',
}

export const whatsappUrl = (number = CONTACT.whatsappNumber, message = '') => {
  const text = message ? `&text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${number}${text}`
}
