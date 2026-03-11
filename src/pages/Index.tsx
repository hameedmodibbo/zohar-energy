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
              Engineering Reliable Solar Energy Infrastructure
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed"
            >
              Zohar Energy designs and deploys high-performance solar and energy storage systems for homes, businesses, estates, and government institutions.
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
                <FaWhatsapp className="w-5 h-5" /> Request a Solar Proposal
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/30 text-white font-semibold transition-all hover:bg-white/10"
              >
                <ArrowRight className="w-5 h-5" /> View Our Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Trusted Solar Energy Partner for Homes, Businesses & Institutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              "Residential Solar Systems",
              "Commercial & Industrial Solar",
              "Estate Solar Infrastructure",
              "Solar Streetlight Projects",
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center hover:-translate-y-1"
              >
                <p className="font-heading font-semibold text-lg">{service}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "50+", label: "Installations" },
              { stat: "1MW+", label: "Installed Capacity" },
              { stat: "100+", label: "Satisfied Clients" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-card text-center"
              >
                <p className="font-heading font-bold text-4xl text-solar-gold mb-2">{item.stat}</p>
                <p className="text-muted-foreground font-medium">{item.label}</p>
              </motion.div>
            ))}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(0, 4).map((service, i) => (
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

      {/* Our Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Our Process"
            subtitle="From assessment to ongoing support, we guide you through every step of your solar journey."
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "1",
                title: "Energy Assessment",
                description: "Our engineers analyze your energy consumption and site conditions.",
              },
              {
                step: "2",
                title: "System Design",
                description: "We design a customized solar and energy storage solution.",
              },
              {
                step: "3",
                title: "Engineering & Procurement",
                description: "High-quality solar components are sourced and prepared for installation.",
              },
              {
                step: "4",
                title: "Installation & Commissioning",
                description: "Our team installs and commissions the solar system.",
              },
              {
                step: "5",
                title: "Monitoring & Support",
                description: "We provide ongoing monitoring and maintenance support.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center mb-4">
                    <span className="font-heading font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-solar-gold to-transparent transform -translate-y-1/2" />
                )}
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

      {/* Business Solutions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                Solar Energy for Businesses, Estates & Institutions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We partner with businesses, property developers, and government institutions to deliver reliable solar power systems that reduce energy costs and eliminate dependence on diesel generators.
              </p>
              <div className="space-y-4 mb-8">
                <h3 className="font-heading font-semibold text-lg">Industries served:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Real Estate Developers",
                    "Hotels & Hospitality",
                    "Schools & Universities",
                    "Hospitals",
                    "Manufacturing & Industrial Facilities",
                    "Government Agencies",
                  ].map((industry, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-solar-gold" />
                      <span className="text-foreground">{industry}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.a
                href="https://wa.me/2348134978154?text=Hello%20Zohar%20Energy%2C%20I%20would%20like%20to%20discuss%20a%20solar%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-gold font-semibold text-primary transition-all hover:shadow-gold"
              >
                <FaWhatsapp className="w-5 h-5" /> Discuss Your Project
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { count: "50+", label: "Projects Delivered" },
                { count: "1MW+", label: "Total Capacity" },
                { count: "100+", label: "Happy Clients" },
                { count: "99%", label: "System Uptime" },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-lg p-6 text-center shadow-card">
                  <p className="font-heading font-bold text-3xl text-solar-gold mb-2">{item.count}</p>
                  <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-secondary">
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
