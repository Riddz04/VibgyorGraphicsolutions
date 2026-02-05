// SEO Configuration and Utility Functions

export const SEO_CONFIG = {
  siteName: 'VIBGYOR Graphic Solutions',
  siteUrl: 'https://vibgyorgraphicsolutions.com',
  defaultTitle: 'VIBGYOR Graphic Solutions - Professional Graphic Design Services',
  defaultDescription: 'VIBGYOR Graphic Solutions - Professional graphic design services including branding, logo design, marketing materials, and creative visual solutions. Creating visual excellence for your business.',
  defaultImage: '/logo.png',
  author: 'Sanjay Dhawan',
  keywords: 'graphic design, branding, logo design, visual design, marketing materials, creative solutions, graphic solutions, design agency, UI/UX design, print design, social media design',
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

// Generate Organization Schema
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SEO_CONFIG.siteName,
  url: SEO_CONFIG.siteUrl,
  logo: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`,
  description: SEO_CONFIG.defaultDescription,
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

// Generate WebSite Schema
export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SEO_CONFIG.siteName,
  url: SEO_CONFIG.siteUrl,
  description: SEO_CONFIG.defaultDescription,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SEO_CONFIG.siteUrl}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

// Generate Service Schema
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

// Generate all services schemas
export const getAllServicesSchemas = () => {
  const services = [
    { name: 'Brand Identity Design', description: 'Logo design, color palettes, typography, and complete brand guidelines' },
    { name: 'Social Media Design', description: 'Instagram posts, stories, Facebook covers, and social media templates' },
    { name: 'UI/UX Design', description: 'User interface design, wireframes, prototypes, and user experience optimization' },
    { name: 'Print Design', description: 'Business cards, brochures, flyers, posters, and packaging design' },
    { name: 'Marketing Materials', description: 'Presentations, infographics, banners, and promotional materials' },
    { name: 'Motion Graphics', description: 'Animated logos, explainer videos, and social media animations' },
    { name: 'Illustration', description: 'Custom illustrations, icons, character design, and digital art' },
    { name: 'Photo Editing', description: 'Retouching, color correction, compositing, and image manipulation' },
    { name: 'App Design', description: 'Mobile app interfaces, icons, and user flow design' },
    { name: 'Web Design', description: 'Website layouts, landing pages, and responsive design systems' },
    { name: 'Digital Marketing', description: 'Email templates, display ads, and digital campaign assets' },
    { name: 'Creative Consulting', description: 'Design strategy, brand workshops, and creative direction' },
  ];

  return services.map(service => getServiceSchema(service.name, service.description));
};

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
