import { Palette, Layout, Package, Zap, Share2, FileText, Pen, Image, Video, Smartphone, Monitor, Globe } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity Design',
    description: 'Logo design, color palettes, typography, and complete brand guidelines',
    gradient: 'from-orange-500 to-red-500',
    hoverGradient: 'from-orange-600 to-red-600',
  },
  {
    icon: Share2,
    title: 'Social Media Design',
    description: 'Instagram posts, stories, Facebook covers, and social media templates',
    gradient: 'from-red-500 to-rose-500',
    hoverGradient: 'from-red-600 to-rose-600',
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'User interface design, wireframes, prototypes, and user experience optimization',
    gradient: 'from-yellow-500 to-orange-500',
    hoverGradient: 'from-yellow-600 to-orange-600',
  },
  {
    icon: Package,
    title: 'Print Design',
    description: 'Business cards, brochures, flyers, posters, and packaging design',
    gradient: 'from-amber-500 to-orange-500',
    hoverGradient: 'from-amber-600 to-orange-600',
  },
  {
    icon: FileText,
    title: 'Marketing Materials',
    description: 'Presentations, infographics, banners, and promotional materials',
    gradient: 'from-orange-500 to-amber-500',
    hoverGradient: 'from-orange-600 to-amber-600',
  },
  {
    icon: Video,
    title: 'Motion Graphics',
    description: 'Animated logos, explainer videos, and social media animations',
    gradient: 'from-rose-500 to-red-500',
    hoverGradient: 'from-rose-600 to-red-600',
  },
  {
    icon: Pen,
    title: 'Illustration',
    description: 'Custom illustrations, icons, character design, and digital art',
    gradient: 'from-red-500 to-orange-500',
    hoverGradient: 'from-red-600 to-orange-600',
  },
  {
    icon: Image,
    title: 'Photo Editing',
    description: 'Retouching, color correction, compositing, and image manipulation',
    gradient: 'from-yellow-500 to-amber-500',
    hoverGradient: 'from-yellow-600 to-amber-600',
  },
  {
    icon: Smartphone,
    title: 'App Design',
    description: 'Mobile app interfaces, icons, and user flow design',
    gradient: 'from-orange-500 to-yellow-500',
    hoverGradient: 'from-orange-600 to-yellow-600',
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description: 'Website layouts, landing pages, and responsive design systems',
    gradient: 'from-amber-500 to-yellow-500',
    hoverGradient: 'from-amber-600 to-yellow-600',
  },
  {
    icon: Globe,
    title: 'Digital Marketing',
    description: 'Email templates, display ads, and digital campaign assets',
    gradient: 'from-red-500 to-orange-500',
    hoverGradient: 'from-red-600 to-orange-600',
  },
  {
    icon: Zap,
    title: 'Creative Consulting',
    description: 'Design strategy, brand workshops, and creative direction',
    gradient: 'from-amber-500 to-orange-500',
    hoverGradient: 'from-amber-600 to-orange-600',
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white to-orange-50/20" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center px-4 sm:px-0">
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-3 sm:mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Professional Services
          </h2>
          <p
            className={`text-center text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl md:max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Comprehensive graphic design solutions tailored to elevate your brand and captivate your audience
          </p>
          <div
            className={`w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          ></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-2 sm:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-gradient-to-br hover:from-orange-50/30 hover:to-yellow-50/30 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-lg sm:hover:shadow-2xl border border-gray-100 sm:border-gray-200 hover:border-orange-100 sm:hover:border-orange-200 relative overflow-hidden"
              style={{ 
                transitionDelay: `${index * 80}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(2.5rem)'
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md sm:shadow-lg group-hover:shadow-xl`}
                >
                  <service.icon size={24} className="text-white w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;