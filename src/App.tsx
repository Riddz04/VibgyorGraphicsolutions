import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Show splash screen for 3 seconds then fade out
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* Splash Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-white via-orange-50/30 to-yellow-50/20 splash-screen-container">
          {/* Logo with smooth entrance */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-red-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
            <img 
              src="/logo.png" 
              alt="VGS Logo" 
              className="relative h-36 w-88 splash-logo-main"
            />
          </div>

          {/* Tagline appears after logo */}
          <div className="splash-tagline">
            <p className="text-lg md:text-xl text-gray-600 font-light tracking-wide">
              Creating Visual Excellence
            </p>
          </div>

          {/* Minimal loading indicator */}
          <div className="splash-loader mt-8">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full loading-dot"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full loading-dot" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full loading-dot" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={isLoading ? 'main-content-fade' : 'main-content-visible'}>
        <Navigation scrollY={scrollY} />
        <Hero scrollY={scrollY} />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
