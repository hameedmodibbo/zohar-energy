import { Link } from "react-router-dom";
import { Sun, Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#143621] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-serif text-2xl font-semibold">
              Zohar Energy
            </span>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Professional solar installation services in Abuja, Nigeria.
              Powering homes and businesses with reliable, clean energy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-base font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/projects", label: "Projects" },
                { to: "/testimonials", label: "Testimonials" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans text-base font-semibold mb-4 text-white">
              Services
            </h3>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <span>Solar Panel Installation</span>
              <span>Inverter Installation</span>
              <span>Battery Storage Systems</span>
              <span>System Maintenance</span>
              <span>Energy Consultation</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-base font-semibold mb-4 text-white">
              Contact
            </h3>
            <a
              href="https://wa.me/2348134978154"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#D4AF37] font-semibold hover:text-white transition-colors mb-4"
            >
              <FaWhatsapp className="w-5 h-5" /> Chat on WhatsApp
            </a>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a
                href="https://wa.me/2348134978154"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" /> WhatsApp Support
              </a>
              <a
                href="mailto:info@zoharenergy.com"
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" /> info@zoharenergy.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" /> Abuja, Nigeria
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://wa.me/2348134978154"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#143621] transition-all"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/zohar-energy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#143621] transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/zoharenergy01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#143621] transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © 2026 Zohar Energy. All rights reserved. made with ❤ by{" "}
          <a href="https://komsiri-technologies.vercel.app">
            komsiri technologies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
