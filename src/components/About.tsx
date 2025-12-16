import { useEffect, useRef, useState } from 'react';
import { Users } from 'lucide-react';

const stats = [
  { icon: Users, value: '150+', label: 'Happy Clients' },
  { icon: Users, value: '30+', label: 'Years of Experience' },
];

const About = () => {
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
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white to-orange-50/30" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-gray-900">
              <span className="inline-flex items-baseline gap-3 whitespace-nowrap">
                <span>About</span>

                {/* Sliding text */}
                <span className="relative group cursor-pointer overflow-hidden h-[1.6em] leading-[1.6em]">
                  <span className="flex flex-col transition-transform duration-500 ease-out group-hover:-translate-y-[1.6em]">
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      the Owner
                    </span>
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      Sanjay Dhawan
                    </span>
                  </span>
                </span>
              </span>
            </h2>


            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-orange-600 to-red-600 mb-6 sm:mb-8"></div>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              Hi, I'm a passionate graphic designer with over 30 years of experience transforming ideas into stunning visual experiences. My approach combines creativity with strategic thinking to deliver designs that not only look beautiful but also achieve business goals.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              I believe in the power of color, which is why VIBGYOR represents my philosophy – bringing together all the colors of creativity to create something truly unique and memorable. Every project is an opportunity to push boundaries and create something extraordinary.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['Adobe Creative Suite', 'Figma', 'CorelDRAW', 'Illustrator', 'After Effects', 'InDesign', 'Photoshop', 'Premiere Pro', 'Lightroom', 'Adobe Express'].map(
                (skill, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 sm:py-2 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-full text-xs sm:text-sm border border-orange-100 sm:border-orange-200 hover:border-orange-400 hover:bg-gradient-to-r hover:from-orange-100 hover:to-yellow-100 transition-all duration-300 text-gray-700 font-medium cursor-pointer hover:scale-105 whitespace-nowrap"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 lg:delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } lg:block`}
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Photo Section with Cool Features */}
              <div className="relative group">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden ring-3 sm:ring-4 ring-orange-500/90 group-hover:ring-red-600 transition-all duration-500 shadow-xl flex items-center justify-center">
                    <img 
                      src="papa.jpeg" 
                      alt="Sanjay Dhawan" 
                      className="min-w-full min-h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Decorative circles */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>

              {/* Stats below photo */}
              <div className="relative mt-12 md:mt-16">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-red-400/10 to-yellow-400/10 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-orange-100 shadow-xl">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => {
                      const gradients = [
                        'from-orange-500 to-red-500',
                        'from-red-500 to-rose-500',
                        'from-yellow-500 to-orange-500',
                        'from-amber-500 to-yellow-500'
                      ];
                      return (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-orange-50/50 to-white rounded-2xl p-6 text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-orange-100 hover:border-orange-300 hover:shadow-lg group"
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <div className="flex justify-center mb-4">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                              <stat.icon size={24} className="text-white" />
                            </div>
                          </div>
                          <div className={`text-3xl font-bold bg-gradient-to-r ${gradients[index % gradients.length]} bg-clip-text text-transparent mb-2`}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;