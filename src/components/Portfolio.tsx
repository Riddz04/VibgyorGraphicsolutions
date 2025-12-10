import { useEffect, useRef, useState } from 'react';
import type React from 'react';

interface Project {
  image: string;
  category: string;
  title?: string;
  description?: string;
  fit?: 'cover' | 'contain';
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  link?: string;
}

const projects: Project[] = [
  {
    image: '/Doggie Dabbas-1.jpeg',
    category: 'Special Feature',
    title: 'Doggie Dabbas Ad',
    description: 'Ad listed in The Archive magazine with recognition',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Doggie Dabbas-2.jpeg',
    category: 'Special Feature',
    title: 'Doggie Dabbas Ad',
    description: 'Ad listed in The Archive magazine with recognition',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Ministry of Jal Shakti Stamp.jpg',
    category: 'Special Feature',
    title: 'Jal Shakti Ministry Stamp',
    description: 'Presented by President Draupadi Murmu',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/The Silent Tribals of Bastar.jpeg',
    category: 'Special Feature',
    title:'The Silent Tribals of Bastar',
    description : 'Book presented by Minister of Road Transport & Highways of India - Mr. Nitin Gadkari',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Branding/BR.jpg',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Branding/Carmate.png',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Branding/BJE.jpg',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Branding/GROW.png',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Branding/hkx.png',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Branding/Jackway.jpg',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Branding/Jalsa.png',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Branding/JC.png',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Branding/KC.jpg',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Branding/Kosmyq.jpg',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Branding/FH.jpg',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Branding/Stone.jpg',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Branding/SGR.jpg',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Branding/SC.jpg',
    category: 'Branding',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/1 almond.png',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/1 gold-01.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/1 gold-03.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/2 berry blush.png',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/2.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/3 chco delight.png',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/3.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/4 fruity surprise.png',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/5 face souffle.png',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/7 papay face scrub.png',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/combine12.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/combine13.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/combine19.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/combine20.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/combine22.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/pack 8-01.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/pack4-08.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/pack4-06.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/PACK9-01.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/packagingi-06.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/packagingi-07.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Packaging/packagingi-08.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/Banners/Sanjay Dhawan_Page_3.jpg',
    category: 'Social Media and App Banners',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Banners/Sanjay Dhawan_Page_4.jpg',
    category: 'Social Media and App Banners',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Banners/Sanjay Dhawan_Page_5.jpg',
    category: 'Social Media and App Banners',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Banners/Sanjay Dhawan_Page_6.jpg',
    category: 'Social Media and App Banners',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Post/1.jpg',
    category: 'Social Media Post',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Post/2.jpg',
    category: 'Social Media Post',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Post/post 10.jpg',
    category: 'Social Media Post',
    fit: 'contain',
    position: 'center',
  },
  {
    image: ' /Reports/Screenshot 2025-12-10 at 21.38.47.png',
    category: 'Annual Reports',
    fit: 'contain',
    position: 'center',
    link: 'https://drive.google.com/file/d/1hvFmcnKL-Ny_OcmyLCHtWwycbr7LsyCw/view?usp=sharing',
  },
  {
    image: '/Reports/Screenshot 2025-12-10 at 21.39.24.png',
    category: 'Annual Reports',
    fit: 'contain',
    position: 'center',
    link:'https://drive.google.com/file/d/13YuByTG72j8_o5WT3PpF3hYETzKYkmhH/view?usp=sharing'
  },
  {
    image: '/Reports/Screenshot 2025-12-10 at 21.39.41.png',
    category: 'Annual Reports',
    fit: 'contain',
    position: 'center',
    link:'https://drive.google.com/file/d/1r_uJ8MX5NSrPOJ5WiHlhkm0sCG1OcLZC/view?usp=sharing'
  },
  {
    image: '/Reports/Screenshot 2025-12-10 at 21.40.25.png',
    category: 'Annual Reports',
    fit: 'contain',
    position: 'center',
    link:'https://drive.google.com/file/d/1qXZzZ2SKAjLzhc9iiAevklNDOb6y5KeY/view?usp=sharing'
  },
  {
    image: '/Reports/Screenshot 2025-12-10 at 21.40.31.png',
    category: 'Annual Reports',
    fit: 'contain',
    position: 'center',
    link:'https://drive.google.com/file/d/1JahU8RQ9T3Ym73uiLMS7U0WmEEjTEDhY/view?usp=sharing'
  },
  {
    image: '/Reports/Screenshot 2025-12-10 at 21.40.37.png',
    category: 'Annual Reports',
    fit: 'contain',
    position: 'center',
    link:'https://drive.google.com/file/d/1VT2prh2eLN6wXfgroGOn3AgMWa5dSeNt/view?usp=sharing'
  },
  {
    image: '/Reports/Screenshot 2025-12-10 at 21.40.50.png',
    category: 'Annual Reports',
    fit: 'contain',
    position: 'center',
    link:'https://drive.google.com/file/d/1Ecg2lAcp4BG8ec-eig_rp_UmJMThJSUz/view?usp=sharing'
  },
  {
    image: '/Reports/Screenshot 2025-12-10 at 21.40.57.png',
    category: 'Annual Reports',
    fit: 'contain',
    position: 'center',
    link:'https://drive.google.com/file/d/1ns4AHgbxiZVTe0sBwHWEtNULLvyL3rms/view?usp=sharing'
  },
  {
    image: '/Reports/Screenshot 2025-12-10 at 21.41.04.png',
    category: 'Annual Reports',
    fit: 'contain',
    position: 'center',
    link:'https://drive.google.com/file/d/1iZhaP7JyApw34EMjjnDoMzlJnG1gzwXV/view?usp=sharing'
  },
  {
    image: '/Reports/Screenshot 2025-12-10 at 21.41.11.png',
    category: 'Annual Reports',
    fit: 'contain',
    position: 'center',
    link:'https://drive.google.com/file/d/1H6BIRu1QEWOCDShQfNRnujNdMrjg9cKe/view?usp=sharing'
  },
  {
    image: '/Reports/Screenshot 2025-12-10 at 21.42.10.png',
    category: 'Annual Reports',
    fit: 'contain',
    position: 'center',
    link:'https://drive.google.com/file/d/1Tca6nZggeDRZ-lsqMPAbDn3s1hfT8oOo/view?usp=sharing'
  },
  {
    image: '/Reports/Screenshot 2025-12-10 at 21.42.02.png',
    category: 'Annual Reports',
    fit: 'contain',
    position: 'center',
    link:'https://drive.google.com/file/d/1kJQSBzCCe_-hCrO7wdJ1g2qFiBssNu-Q/view?usp=sharing'
  },
  {
    image: '/Reports/Screenshot 2025-12-10 at 21.41.55.png',
    category: 'Annual Reports',
    fit: 'contain',
    position: 'center',
    link:'https://drive.google.com/file/d/1UkCFEOj8cWHa_9upLV24vtiKphL8T-KF/view?usp=sharing'
  },
  {
    image: '/Reports/Screenshot 2025-12-10 at 21.41.47.png',
    category: 'Annual Reports',
    fit: 'contain',
    position: 'center',
    link:'https://drive.google.com/file/d/1DGsOUK7gCDfHsd_hBgwibHD8y6Xs-6mR/view?usp=sharing'
  },
  {
    image: '/Reports/Screenshot 2025-12-10 at 21.41.36.png',
    category: 'Annual Reports',
    fit: 'contain',
    position: 'center',
    link:'https://drive.google.com/file/d/1FvxQCzRVkm5Fug4kLCLDGyqIG4EyTmP9/view?usp=sharing'
  },
  {
    image: '/Reports/Screenshot 2025-12-10 at 21.41.24.png',
    category: 'Annual Reports',
    fit: 'contain',
    position: 'center',
    link:'https://drive.google.com/file/d/1XA3fMk3xeYZlHX0_rdtcEGOvrpFizTGU/view?usp=sharing'
  },
];

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Branding', 'Packaging','Social Media and App Banners','Social Media Post','Annual Reports','Magazine and Coffee Table Book'];
  const specialFeatureProjects = projects.filter(p => p.category === 'Special Feature');
  const filteredProjects = activeCategory === 'All' 
    ? projects.filter(p => p.category !== 'Special Feature')
    : projects.filter(p => p.category === activeCategory);

  const handleImageClick = (e: React.MouseEvent | React.KeyboardEvent, project: Project) => {
    e.preventDefault();
    e.stopPropagation();
    const url = project.link || project.image;
    if (url) {
      window.open(url, '_blank');
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent, project: Project) => {
    if (e.key === 'Enter') {
      handleImageClick(e, project);
    }
  };

  // Intersection Observer for animations
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


  // Clean up body styles when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, []);

  return (
    <>
      <section id="portfolio" className="py-32 bg-gradient-to-b from-white to-orange-50/20" ref={sectionRef}>
        <div className="container mx-auto px-6">
          <h2
            className={`text-5xl md:text-6xl font-bold text-center mb-4 text-gray-900 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            View My Work
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-12 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 scale-x-110' : 'opacity-0 scale-x-0'
            }`}
          ></div>

          <div
            className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/30 scale-110'
                    : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 border border-gray-200 hover:border-orange-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Special Feature Section - Only shown when 'All' is selected */}
          {activeCategory === 'All' && (
            <div className="w-full mb-20">
              <h3 className="text-4xl font-bold mb-2 text-gray-900">Special Features</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mb-8"></div>
              <p className="text-xl text-gray-600 mb-8 max-w-5xl">Showcasing our most prestigious and recognized works that highlight our expertise and achievements in the industry.</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {specialFeatureProjects.map((project, index) => (
                    <div
                      key={`featured-${index}`}
                      onClick={(e) => handleImageClick(e, project)}
                      onKeyDown={(e) => handleKeyDown(e, project)}
                      className="group relative overflow-hidden rounded-3xl cursor-pointer h-[500px] bg-white shadow-2xl hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="absolute inset-0">
                        <img 
                          src={project.image} 
                          alt={project.title || 'Featured project'}
                          className={`w-full h-full ${project.fit === 'contain' ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-700 ease-out`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                          <div className="space-y-4 w-full">
                            {project.title && (
                              <h4 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                                {project.title}
                              </h4>
                            )}
                            
                            {project.description && (
                              <p className="text-white/90 text-base md:text-lg leading-relaxed drop-shadow-md">
                                {project.description}
                              </p>
                            )}
                            
                            <div className="pt-2">
                              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 to-amber-500 text-white border border-amber-400/50 hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/30">
                                Special Feature
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
          </div>

          <div className="border-t border-gray-200 pt-16 mt-16 px-6 md:px-12 lg:px-24 xl:px-32">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              {activeCategory === 'All' ? 'All Projects' : activeCategory} {activeCategory === 'All' ? '' : 'Projects'}
            </h3>
            <p className="text-gray-600 mb-8">
              {activeCategory === 'All' 
                ? 'Browse through our selective collection of creative works and branding projects.'
                : `Showcasing our ${activeCategory.toLowerCase()} projects and creative solutions.`
              }
            </p>
          <div 
            className={`grid gap-4 md:gap-6 ${
              activeCategory === 'Social Media and App Banners' || activeCategory === 'Annual Reports'
                ? 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
                : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
            }`}
          >
            {filteredProjects.map((project, index) => {
              const fitClass = project.fit === 'contain' ? 'object-contain' : 'object-cover';
              const positionClass =
                project.position === 'top' ? 'object-top' :
                project.position === 'bottom' ? 'object-bottom' :
                project.position === 'left' ? 'object-left' :
                project.position === 'right' ? 'object-right' : 'object-center';
              return (
              <div
                key={index}
                onClick={(e) => handleImageClick(e, project)}
                onKeyDown={(e) => handleKeyDown(e, project)}
                role="button"
                tabIndex={0}
                className={`group relative overflow-hidden rounded-xl aspect-square cursor-pointer transition-all duration-700 bg-white shadow-lg hover:shadow-2xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt="Project image"
                    className={`w-full h-full ${fitClass} ${positionClass} transition-transform duration-700 ease-out group-hover:scale-150 will-change-transform`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;