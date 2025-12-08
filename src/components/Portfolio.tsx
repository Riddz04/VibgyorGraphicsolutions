import { useEffect, useRef, useState } from 'react';
import type React from 'react';

interface Project {
  image: string;
  category: string;
  title?: string;
  description?: string;
  fit?: 'cover' | 'contain';
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
}

const projects: Project[] = [
  {
    image: '/Doggie Dabbas-1.jpeg',
    category: 'Special Feature',
    title: 'Doggie Dabbas Ad',
    description: 'Ad listed in ',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Doggie Dabbas-2.jpeg',
    category: 'Special Feature',
    title: 'Doggie Dabbas Ad',
    description: 'Sustainable packaging design with a focus on premium feel and functionality',
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
    image: '/BR.jpg',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Carmate.png',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/BJE.jpg',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/GROW.png',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/hkx.png',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Jackway.jpg',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Jalsa.png',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/JC.png',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/KC.jpg',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Kosmyq.jpg',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/FH.jpg',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/Stone.jpg',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/SGR.jpg',
    category: 'Branding',
    fit: 'contain',
    position: 'center',
  },
  {
    image: '/SC.jpg',
    category: 'Branding',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/1 almond.png',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/1 gold-01.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/1 gold-03.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/2 berry blush.png',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/2.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/3 chco delight.png',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/3.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/4 fruity surprise.png',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/5 face souffle.png',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/7 papay face scrub.png',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/combine12.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/combine13.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/combine19.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/combine20.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/combine22.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/pack 8-01.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/pack4-08.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/pack4-06.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/PACK9-01.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/packagingi-06.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/packagingi-07.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  {
    image: '/packagingi-08.jpg',
    category: 'Packaging',
    fit: 'cover',
    position: 'center',
  },
  
];

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Branding', 'Packaging', 'Special Feature'];
  const filteredProjects = activeCategory === 'All' 
    ? projects.filter(p => p.category !== 'Special Feature')
    : projects.filter(p => p.category === activeCategory);

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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

          {/* Special Feature Section */}
          {activeCategory === 'All' && (
            <div className="w-full mb-16">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Featured Projects</h3>
              <p className="text-gray-600 mb-6">Highlighting some of our most impactful work</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {projects
                  .filter(project => project.category === 'Special Feature')
                  .slice(0, 4)
                  .map((project, index) => (
                    <div
                      key={`featured-${index}`}
                      onClick={handleImageClick}
                      onKeyDown={(e) => e.key === 'Enter' && handleImageClick(e as any)}
                      role="button"
                      tabIndex={0}
                      className="group relative overflow-hidden rounded-2xl cursor-pointer h-80 md:h-96 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                      <div className="absolute inset-0">
                        <img 
                          src={project.image} 
                          alt={project.title || 'Featured project'}
                          className={`w-full h-full ${project.fit === 'contain' ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-700 ease-out`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                          <div className="space-y-3 w-full">
                            {project.title && (
                              <h4 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                                {project.title}
                              </h4>
                            )}
                            
                            {project.description && (
                              <p className="text-white/90 text-sm md:text-base leading-relaxed drop-shadow-md">
                                {project.description}
                              </p>
                            )}
                            
                            {project.category && (
                              <div className="pt-1">
                                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-orange-500 to-amber-500 text-white border border-amber-400/50 hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-orange-500/30">
                                  {project.category}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          <h3 className="text-2xl font-bold mb-6 text-gray-800">All Projects</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
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
                onClick={handleImageClick}
                onKeyDown={(e) => e.key === 'Enter' && handleImageClick(e as any)}
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