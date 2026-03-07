import { Link } from "react-router-dom";
import { Sun, Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-gold flex items-center justify-center">
                <Sun className="w-5 h-5 text-primary" />
              </div>
              <span className="font-heading font-bold text-lg">
                Zohar <span className="text-solar-gold">Energy</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Professional solar installation services in Abuja, Nigeria. Powering homes and businesses with reliable, clean energy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/projects", label: "Projects" },
                { to: "/testimonials", label: "Testimonials" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-primary-foreground/70 hover:text-solar-gold text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Services</h3>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <span>Solar Panel Installation</span>
              <span>Inverter Installation</span>
              <span>Battery Storage Systems</span>
              <span>System Maintenance</span>
              <span>Energy Consultation</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <a href="tel:+2348134978154" className="flex items-center gap-2 hover:text-solar-gold transition-colors">
                <Phone className="w-4 h-4" /> +234 813 4978 154
              </a>
              <a href="mailto:info@zoharenergy.com" className="flex items-center gap-2 hover:text-solar-gold transition-colors">
                <Mail className="w-4 h-4" /> info@zoharenergy.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" /> Abuja, Nigeria
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://wa.me/2348134978154" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-solar-gold hover:text-primary transition-all" aria-label="WhatsApp">
                <FaWhatsapp className="w-4 h-4" />
              </a>
  
              <a href="https://instagram.com/zoharenergy" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-solar-gold hover:text-primary transition-all" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com/zoharenergy" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-solar-gold hover:text-primary transition-all" aria-label="Facebook">
                <FaFacebookF className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Zohar Energy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
