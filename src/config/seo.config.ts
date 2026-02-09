// Comprehensive SEO Configuration for VIBGYOR Graphic Solutions
// This file contains all SEO-related configuration including detailed service information

export const seoConfig = {
  siteName: 'VIBGYOR Graphic Solutions',
  siteUrl: 'https://vibgyorgraphicsolutions.com',
  defaultTitle: 'VIBGYOR Graphic Solutions | Professional Graphic Design Services',
  defaultDescription: 'Professional graphic design services including Brand Identity, Logo Design, UI/UX, Social Media Design, Print Design, Motion Graphics, Illustration, Photo Editing, Web Design, App Design, Marketing Materials & Creative Consulting.',
  
  // All 12 services with comprehensive details
  services: [
    {
      name: 'Brand Identity Design',
      description: 'Logo design, color palettes, typography, and complete brand guidelines',
      keywords: ['brand identity', 'logo design', 'branding', 'color palettes', 'typography', 'brand guidelines', 'corporate identity', 'visual identity', 'brand development', 'brand strategy'],
      offers: ['Logo Design', 'Color Palette Design', 'Typography Design', 'Brand Guidelines']
    },
    {
      name: 'Social Media Design',
      description: 'Instagram posts, stories, Facebook covers, and social media templates',
      keywords: ['social media design', 'instagram design', 'facebook design', 'social media templates', 'stories design', 'social media graphics', 'social media marketing', 'instagram stories', 'facebook covers'],
      offers: ['Instagram Posts', 'Instagram Stories', 'Facebook Covers', 'Social Media Templates']
    },
    {
      name: 'UI/UX Design',
      description: 'User interface design, wireframes, prototypes, and user experience optimization',
      keywords: ['ui design', 'ux design', 'user interface', 'wireframes', 'prototypes', 'user experience', 'usability design', 'interaction design', 'user flow'],
      offers: ['User Interface Design', 'Wireframes', 'Prototypes', 'User Experience Optimization']
    },
    {
      name: 'Print Design',
      description: 'Business cards, brochures, flyers, posters, and packaging design',
      keywords: ['print design', 'business cards', 'brochures', 'flyers', 'posters', 'packaging design', 'stationery design', 'print materials', 'business card design', 'brochure design'],
      offers: ['Business Cards', 'Brochures', 'Flyers', 'Posters', 'Packaging Design']
    },
    {
      name: 'Marketing Materials',
      description: 'Presentations, infographics, banners, and promotional materials',
      keywords: ['marketing materials', 'presentations', 'infographics', 'banners', 'promotional materials', 'marketing collateral', 'advertising design', 'presentation design', 'infographic design'],
      offers: ['Presentations', 'Infographics', 'Banners', 'Promotional Materials']
    },
    {
      name: 'Motion Graphics',
      description: 'Animated logos, explainer videos, and social media animations',
      keywords: ['motion graphics', 'animated logos', 'explainer videos', 'animations', 'video design', '2d animation', 'motion design', 'animated content', 'video animation', 'logo animation'],
      offers: ['Animated Logos', 'Explainer Videos', 'Social Media Animations', '2D Animation']
    },
    {
      name: 'Illustration',
      description: 'Custom illustrations, icons, character design, and digital art',
      keywords: ['illustration', 'custom illustrations', 'icon design', 'character design', 'digital art', 'digital illustration', 'vector illustration', 'illustration services'],
      offers: ['Custom Illustrations', 'Icon Design', 'Character Design', 'Digital Art']
    },
    {
      name: 'Photo Editing',
      description: 'Retouching, color correction, compositing, and image manipulation',
      keywords: ['photo editing', 'retouching', 'color correction', 'compositing', 'image manipulation', 'photo retouching', 'image editing', 'image enhancement'],
      offers: ['Photo Retouching', 'Color Correction', 'Compositing', 'Image Manipulation']
    },
    {
      name: 'App Design',
      description: 'Mobile app interfaces, icons, and user flow design',
      keywords: ['app design', 'mobile app design', 'app interfaces', 'user flow', 'mobile design', 'ios design', 'android design', 'app interface', 'mobile ui', 'app icons'],
      offers: ['Mobile App Interfaces', 'App Icons', 'User Flow Design', 'Mobile UI Design']
    },
    {
      name: 'Web Design',
      description: 'Website layouts, landing pages, and responsive design systems',
      keywords: ['web design', 'website design', 'landing pages', 'responsive design', 'design systems', 'web layout', 'website development', 'responsive web design', 'landing page design'],
      offers: ['Website Layouts', 'Landing Pages', 'Responsive Design Systems', 'Web UI Design']
    },
    {
      name: 'Digital Marketing',
      description: 'Email templates, display ads, and digital campaign assets',
      keywords: ['digital marketing design', 'email templates', 'display ads', 'campaign assets', 'marketing design', 'email design', 'banner ads', 'digital advertising', 'digital marketing'],
      offers: ['Email Templates', 'Display Ads', 'Digital Campaign Assets', 'Banner Ads']
    },
    {
      name: 'Creative Consulting',
      description: 'Design strategy, brand workshops, and creative direction',
      keywords: ['creative consulting', 'design strategy', 'brand workshops', 'creative direction', 'brand consulting', 'design workshops', 'creative strategy'],
      offers: ['Design Strategy', 'Brand Workshops', 'Creative Direction', 'Brand Consulting']
    }
  ],
  
  // Comprehensive keyword list
  keywords: [
    // Primary keywords
    'graphic design services',
    'professional graphic design',
    'graphic design agency',
    'design agency',
    'professional designers',
    'visual design',
    'creative design solutions',
    
    // Service-specific keywords (all 12 services)
    'brand identity design',
    'logo design services',
    'branding services',
    'corporate identity',
    'social media design',
    'instagram design',
    'facebook design',
    'social media graphics',
    'ui ux design',
    'user interface design',
    'user experience design',
    'wireframes',
    'prototypes',
    'print design services',
    'business card design',
    'brochure design',
    'flyer design',
    'poster design',
    'packaging design',
    'marketing materials design',
    'infographic design',
    'presentation design',
    'motion graphics services',
    'animated logo design',
    'explainer videos',
    'video animation',
    'illustration services',
    'custom illustrations',
    'character design',
    'icon design',
    'photo editing services',
    'photo retouching',
    'image editing',
    'app design services',
    'mobile app design',
    'ios design',
    'android design',
    'web design services',
    'website design',
    'landing page design',
    'responsive web design',
    'digital marketing design',
    'email template design',
    'display ads design',
    'creative consulting services',
    'design strategy',
    'brand consulting'
  ]
};

export type ServiceConfig = typeof seoConfig.services[0];
