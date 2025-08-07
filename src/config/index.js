// Centralized configuration
const config = {
  siteName: process.env.REACT_APP_SITE_NAME || 'ON IT Solutions',
  siteTagline: process.env.REACT_APP_SITE_TAGLINE || 'Managed IT Services',
  siteUrl: process.env.REACT_APP_SITE_URL || 'https://onitsolutions.com',
  
  contact: {
    email: process.env.REACT_APP_CONTACT_EMAIL || 'info@onitsolutions.com',
    phone: process.env.REACT_APP_CONTACT_PHONE || '(555) 123-4567',
    address: process.env.REACT_APP_CONTACT_ADDRESS || '123 Business Drive, Suite 100, Your City, ST 12345',
    supportEmail: 'support@onitsolutions.com',
    emergencyPhone: '(555) 123-4568'
  },
  
  features: {
    enableContactForm: process.env.REACT_APP_ENABLE_CONTACT_FORM === 'true',
    showTeamProfiles: process.env.REACT_APP_SHOW_TEAM_PROFILES === 'true'
  },
  
  businessHours: {
    weekdays: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Emergency Only'
  }
};

export default config;
