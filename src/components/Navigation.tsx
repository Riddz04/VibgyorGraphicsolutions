import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  scrollY: number;
}

const Navigation = ({ scrollY }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = scrollY > 50;

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-lg py-3 md:py-4 shadow-lg' : 'bg-white/80 backdrop-blur-sm py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src="/logo2.png" 
              alt="VGS Logo" 
              className="h-8 w-auto sm:h-10 transition-transform duration-300 hover:scale-110" 
            />
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              VGS
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm sm:text-base text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 relative group px-2 py-1"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-red-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-900 hover:text-orange-600 transition-colors duration-300 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-white shadow-2xl transform transition-all duration-300 ease-in-out z-50 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-start space-y-4 p-6 pt-20">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left text-lg text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 relative group py-2"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-red-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;