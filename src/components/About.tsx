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
    <section id="about" className="py-32 bg-gradient-to-b from-white to-orange-50/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              About 
              <span className="overflow-hidden relative group cursor-pointer inline-block" style={{ height: '1.2em', lineHeight: '1.2em', minWidth: '440px' }}>
                <span className="flex flex-col transition-transform duration-500 ease-out group-hover:-translate-y-[1.2em]">
                  <span className="h-[1.2em] flex items-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent whitespace-nowrap" style={{ lineHeight: '1.2em' }}>
                    the Owner
                  </span>
                  <span className="h-[1.2em] flex items-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent whitespace-nowrap" style={{ lineHeight: '1.2em' }}>
                    Sanjay Dhawan
                  </span>
                </span>
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mb-8"></div>

            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Hi, I'm a passionate graphic designer with over 30 years of experience transforming ideas into stunning visual experiences. My approach combines creativity with strategic thinking to deliver designs that not only look beautiful but also achieve business goals.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I believe in the power of color, which is why VIBGYOR represents my philosophy – bringing together all the colors of creativity to create something truly unique and memorable. Every project is an opportunity to push boundaries and create something extraordinary.
            </p>

            <div className="flex flex-wrap gap-4">
              {['Adobe Creative Suite', 'Figma', 'CorelDRAW', 'Illustrator', 'After Effects', 'InDesign', 'Photoshop', 'Premiere Pro', 'Lightroom', 'Adobe Express'].map(
                (skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-full text-sm border border-orange-200 hover:border-orange-400 hover:bg-gradient-to-r hover:from-orange-100 hover:to-yellow-100 transition-all duration-300 text-gray-700 font-medium cursor-pointer hover:scale-105"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Photo Section with Cool Features */}
              <div className="relative group mb-16">
                  {/* Photo container with normal border */}
                <div className="relative">
                  <div className="w-80 h-80 mx-auto rounded-full overflow-hidden ring-4 ring-orange-600 group-hover:ring-red-600 transition-all duration-500">
                    <img 
                      src="papa.jpeg" 
                      alt="Sanjay Dhawan" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Decorative circles */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>

              {/* Stats below photo */}
              <div className="relative">
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