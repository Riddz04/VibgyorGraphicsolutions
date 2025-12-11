import { ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

const Hero = ({ scrollY }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-50/40 pt-20 md:pt-0"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            animationDelay: '1s',
          }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-red-500/15 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * 0.25}px)`,
            animationDelay: '2s',
          }}
          aria-hidden="true"
        ></div>
      </div>

      {/* Main content */}
      <div
        className="container mx-auto px-4 sm:px-6 z-10 text-center py-16 md:py-0"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 opacity-0 animate-fadeInUp animation-delay-300">
          <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
            VIBGYOR
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-gray-800 opacity-0 animate-fadeInUp animation-delay-450">
          GRAPHIC SOLUTIONS
        </h2>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 md:mb-12 max-w-2xl md:max-w-3xl mx-auto opacity-0 animate-fadeInUp animation-delay-600 leading-relaxed px-4">
          Transforming your vision into stunning design with professional graphic solutions
        </p>
        
        <div className="opacity-0 animate-fadeInUp animation-delay-900">
          <button
            onClick={() =>
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold text-base sm:text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 inline-flex justify-center items-center rounded-lg shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden group w-full max-w-xs mx-auto"
            aria-label="View our portfolio"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-10 flex items-center justify-center">
        <button 
          onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center group"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} className="text-orange-600 group-hover:text-orange-700 transition-colors duration-300 animate-bounce" />
          <span className="text-sm text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll Down
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;