import { ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

const Hero = ({ scrollY }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-50/40"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            animationDelay: '1s',
          }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-red-500/15 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            animationDelay: '2s',
          }}
        ></div>
      </div>

      <div
        className="container mx-auto px-6 z-10 text-center"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 opacity-0 animate-fadeInUp animation-delay-300">
          <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
            VIBGYOR
          </span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-light mb-6 text-gray-800 opacity-0 animate-fadeInUp animation-delay-450">
          GRAPHIC SOLUTIONS
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto opacity-0 animate-fadeInUp animation-delay-600 leading-relaxed">
          Transforming your vision into stunning design with professional graphic solutions
        </p>
        <button
          onClick={() =>
            document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="relative px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 opacity-0 animate-fadeInUp animation-delay-900 inline-flex justify-center items-center rounded-lg shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden group"
        >
          <span className="relative z-10">View My Work</span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-10 flex items-center justify-center">
        <div className="container mx-auto px-6 flex justify-center">
          <ChevronDown size={40} className="text-orange-600 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;