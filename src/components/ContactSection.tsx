import { Phone } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary-foreground mb-4">
            Ready to Go Solar in Abuja?
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-10">
            Contact Zohar Energy today for a free consultation. We'll help you find the perfect solar solution for your home or business.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="https://wa.me/2348134978154"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[hsl(142,70%,45%)] text-white font-semibold text-sm hover:scale-105 transition-transform"
            >
              <FaWhatsapp className="w-5 h-5" /> Contact Us via WhatsApp
            </a>
            <a
              href="tel:+2348134978154"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/20 transition-colors"
            >
              <Phone className="w-5 h-5" /> Call Zohar Energy Today
            </a>
          </div>

          <h3 className="font-heading font-semibold text-lg text-primary-foreground mb-4">
            Follow Us on Instagram and Facebook
          </h3>
          <div className="flex justify-center gap-4">
            <a href="https://instagram.com/zoharenergy" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-solar-gold hover:text-primary transition-all" aria-label="Instagram">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/zoharenergy" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-solar-gold hover:text-primary transition-all" aria-label="Facebook">
              <FaFacebookF className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
