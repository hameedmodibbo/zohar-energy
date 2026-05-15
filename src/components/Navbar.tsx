import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/testimonials", label: "Testimonials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "bg-[#143621] border-b border-[#143621]/20 shadow-xl"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="Zohar Energy Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm uppercase tracking-wider font-sans text-white transition-colors duration-200 ${
                  location.pathname === link.to
                    ? "opacity-100"
                    : "opacity-90 hover:opacity-100 hover:text-[#D4AF37]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/2348134978154?text=Hello%20Zohar%20Energy%2C%20I%20would%20like%20to%20request%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2.5 rounded-sm bg-[#D4AF37] text-[#143621] font-semibold text-sm transition-all duration-200 hover:bg-[#c39b2f]"
            >
              Early Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#D4AF37] p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#143621] border-t border-[#143621]/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm uppercase tracking-wider font-sans text-white transition-colors ${
                    location.pathname === link.to
                      ? "bg-white/10 text-white"
                      : "text-white hover:text-[#D4AF37] hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/2348134978154?text=Hello%20Zohar%20Energy%2C%20I%20would%20like%20to%20request%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-3 rounded-sm bg-[#D4AF37] text-[#143621] font-semibold text-sm text-center"
              >
                Early Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
