import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Data Plans", href: "/#data-plans" },
    { label: "Download", href: "/#download" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <nav className="container-max flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <a
            href="/"
            className="flex items-center gap-2"
            aria-label="Eskimo Home"
          >
            <img
              src="https://i.ibb.co/d4z3607G/eskimologo.png"
              alt="Eskimo Logo"
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Eskimo
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="px-5 py-2 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg font-semibold transition-all duration-300 relative group"
            >
              {link.label}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="/#data-plans"
            className="btn-primary inline-flex items-center gap-2 group font-bold shadow-lg hover:shadow-xl"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur animate-slideInUp"
        >
          <div className="container-max py-6 space-y-3">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-5 py-3 text-gray-700 font-semibold hover:bg-blue-50 hover:text-primary rounded-lg transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#data-plans"
              className="w-full btn-primary flex items-center justify-center gap-2 mt-6 font-bold"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
