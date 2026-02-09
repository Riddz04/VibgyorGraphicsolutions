// SEO Configuration and Utility Functions
import { seoConfig } from '../config/seo.config';

export const SEO_CONFIG = {
  siteName: 'VIBGYOR Graphic Solutions',
  siteUrl: 'https://vibgyorgraphicsolutions.com',
  defaultTitle: 'VIBGYOR Graphic Solutions | Professional Graphic Design Services',
  defaultDescription: 'Professional graphic design services including Brand Identity, Logo Design, UI/UX, Social Media Design, Print Design, Motion Graphics, Illustration, Photo Editing, Web Design, App Design, Marketing Materials & Creative Consulting.',
  defaultImage: '/logo.png',
  author: 'Sanjay Dhawan',
  keywords: seoConfig.keywords.join(', '),
  email: 'vibgyorgs2@gmail.com',
  phone: '+91 9811365168',
  location: 'New Delhi, India',
  socialMedia: {
    // Add social media profile URLs when available
  },
};

// Generate LocalBusiness Schema
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SEO_CONFIG.siteName,
  image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`,
  description: SEO_CONFIG.defaultDescription,
  url: SEO_CONFIG.siteUrl,
  telephone: SEO_CONFIG.phone,
  email: SEO_CONFIG.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Delhi',
    addressCountry: 'IN',
  },
  priceRange: '$$',
});

// Generate Organization Schema with knowsAbout field
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
  name: SEO_CONFIG.siteName,
  alternateName: 'VGS',
  url: SEO_CONFIG.siteUrl,
  logo: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`,
  image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`,
  description: SEO_CONFIG.defaultDescription,
  priceRange: '$$',
  knowsAbout: [
    'Graphic Design',
    'Brand Identity Design',
    'Logo Design',
    'Social Media Design',
    'UI/UX Design',
    'Print Design',
    'Motion Graphics',
    'Illustration',
    'Photo Editing',
    'Web Design',
    'App Design',
    'Digital Marketing Design',
    'Creative Consulting'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    contactType: 'Customer Service',
    areaServed: 'IN',
    availableLanguage: 'English',
  },
  founder: {
    '@type': 'Person',
    name: SEO_CONFIG.author,
  },
});

// Generate WebSite Schema with Search Action
export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SEO_CONFIG.siteName,
  url: SEO_CONFIG.siteUrl,
  description: SEO_CONFIG.defaultDescription,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SEO_CONFIG.siteUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

// Generate Service Schema with OfferCatalog
export const getServiceSchemaWithOffers = (serviceName: string, serviceDescription: string, offers: string[]) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: serviceName,
  provider: {
    '@type': 'Organization',
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
  },
  description: serviceDescription,
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: `${serviceName} Services`,
    itemListElement: offers.map(offer => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: offer,
      },
    })),
  },
});

// Generate Service Schema (simple version)
export const getServiceSchema = (serviceName: string, serviceDescription: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: serviceDescription,
  provider: {
    '@type': 'Organization',
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
});

// Generate all services schemas with OfferCatalog
export const getAllServicesSchemas = () => {
  return seoConfig.services.map(service => 
    getServiceSchemaWithOffers(service.name, service.description, service.offers)
  );
};

// Generate ItemList Schema for all services
export const getServicesItemListSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Graphic Design Services',
  description: 'Complete list of professional graphic design services offered by VIBGYOR Graphic Solutions',
  itemListElement: seoConfig.services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.name,
      description: service.description,
    },
  })),
});

// Generate ContactPoint Schema
export const getContactPointSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPoint',
  contactType: 'Customer Service',
  telephone: SEO_CONFIG.phone,
  email: SEO_CONFIG.email,
  areaServed: 'IN',
  availableLanguage: 'English',
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
});

// Generate CreativeWork Schema for portfolio items
export const getCreativeWorkSchema = (title: string, description: string, imageUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: title,
  description: description,
  image: imageUrl,
  creator: {
    '@type': 'Person',
    name: SEO_CONFIG.author,
  },
  provider: {
    '@type': 'Organization',
    name: SEO_CONFIG.siteName,
  },
});
