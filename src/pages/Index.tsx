import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { services, projects, testimonials } from "@/data/siteData";
import heroImage from "@/assets/hero-solar.jpg";

const Index = () => {
  return (
    <PageLayout
      title="Zohar Energy | Reliable Solar Installation in Abuja"
      description="Zohar Energy provides professional solar installation services in Abuja. Showcase your projects, trust signals, and connect with clients via WhatsApp, Instagram, and Facebook."
    >
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Solar panel installation on rooftop in Abuja"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-5"
            >
              Reliable Solar Installation You Can Trust in{" "}
              <span className="text-gradient-gold">Abuja</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed"
            >
              Professional solar solutions for homes and businesses. Power your future with clean, dependable energy from Zohar Energy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://wa.me/2348134978154?text=Hello%20Zohar%20Energy%2C%20I%20would%20like%20to%20request%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-gold font-semibold text-primary transition-all hover:shadow-gold hover:scale-105"
              >
                <FaWhatsapp className="w-5 h-5" /> Request a Quote
              </a>
              <a
                href="tel:+2348134978154"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/30 text-white font-semibold transition-all hover:bg-white/10"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Our Services – High-Quality Solar Solutions"
            subtitle="From installation to maintenance, we deliver premium solar energy services across Abuja."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card rounded-xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-gradient-gold group-hover:text-primary transition-all">
                  <service.icon className="w-6 h-6 text-solar-gold group-hover:text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.short}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-solar-gold font-medium text-sm hover:gap-2 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Recent Projects in Abuja"
            subtitle="Explore our latest solar installations for homes and businesses across Abuja."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {projects.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                {project.image ? (
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = "none";
                        const fallback = img.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                    <div
                      style={{ display: "none" }}
                      className="absolute inset-0 bg-gradient-to-br from-solar-navy to-solar-navy-light flex items-center justify-center"
                    >
                      <span className="text-4xl font-heading font-bold text-solar-gold">{project.kw}</span>
                    </div>
                  </div>
                ) : (
                  <div className="h-48 bg-primary/10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-solar-navy to-solar-navy-light opacity-90" />
                    <span className="relative text-4xl font-heading font-bold text-solar-gold">{project.kw}</span>
                  </div>
                )}
                <div className="p-6">
                  <span className="text-xs font-semibold text-solar-gold uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-heading font-semibold text-base mt-1 mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:scale-105 transition-transform"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Hear from satisfied customers who trust Zohar Energy for their solar needs in Abuja."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl p-7 shadow-card"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <span key={si} className="text-solar-gold text-lg">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">"{t.comment}"</p>
                <div>
                  <p className="font-heading font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:scale-105 transition-transform"
            >
              See All Testimonials <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
