import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sun, Lightbulb, Home, Droplets } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { projects, testimonials } from "@/data/siteData";
import heroImage from "@/assets/hero-solar.jpg";

const serviceItems = [
  {
    title: "Solar System Design",
    description: "Custom photovoltaic solutions for homes and businesses.",
    icon: Sun,
  },
  {
    title: "Streetlight Projects",
    description: "Reliable solar-powered street lighting for safer streets.",
    icon: Lightbulb,
  },
  {
    title: "Home & Community Solar",
    description: "Affordable solar energy systems for households and communities.",
    icon: Home,
  },
  {
    title: "Solar Water Heating",
    description: "Efficient solar water heating systems for everyday use.",
    icon: Droplets,
  },
];

const statsItems = [
  { value: "60+", label: "Projects Delivered" },
  { value: "1.2MW+", label: "System Capacity" },
  { value: "120+", label: "Happy Clients" },
  { value: "24/7", label: "Support Availability" },
];
const Index = () => {
  return (
    <PageLayout
      title="Zohar Energy | Reliable Solar Installation in Abuja"
      description="Zohar Energy provides professional solar installation services in Abuja. Showcase your projects, trust signals, and connect with clients via WhatsApp, Instagram, and Facebook."
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Solar panel installation on rooftop in Abuja"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center md:mx-0 md:text-left">
            <div className="mb-8 flex justify-center md:justify-start">
              <span className="inline-block h-1 w-20 rounded-full bg-[#D4AF37]" />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-5"
            >
              Powering Africa with Clean, Sustainable Energy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-white/90 text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed"
            >
              Zohar Energy designs and deploys high-performance solar and energy
              storage systems for homes, businesses, estates, and government
              institutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start"
            >
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#D4AF37] text-[#143621] font-semibold text-base transition-all duration-200 hover:bg-[#c39b2f]"
              >
                Explore Solutions
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-white text-white bg-transparent font-semibold text-base transition-all duration-200 hover:bg-white/10"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-[#F5F2EB] py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-serif text-4xl text-[#143621] font-semibold">
              Our Services
            </h2>
            <p className="mt-4 font-sans text-sm text-gray-600">
              Comprehensive renewable energy solutions tailored for Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {serviceItems.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-10 rounded-sm shadow-sm transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#143621]/10 text-[#143621]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-[#143621] mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#143621]">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {statsItems.map((item) => (
              <div key={item.label} className="rounded-sm px-6 py-10 text-center bg-[#143621]/10">
                <p className="font-sans text-5xl font-bold text-[#D4AF37]">
                  {item.value}
                </p>
                <p className="mt-3 text-sm font-sans uppercase text-white tracking-widest">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-[#F5F2EB] py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-4xl text-[#143621] font-semibold">
              Our Process
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understanding your energy needs.",
              },
              {
                step: "02",
                title: "Site Assessment",
                description: "Technical evaluation of your location.",
              },
              {
                step: "03",
                title: "Design & Install",
                description: "Custom engineering and professional setup.",
              },
              {
                step: "04",
                title: "Support",
                description: "Long-term maintenance and monitoring.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white p-8 rounded-sm shadow-sm overflow-hidden"
              >
                <span className="pointer-events-none absolute top-6 right-6 text-[5rem] font-serif font-bold text-[#D4AF37]/30 leading-none">
                  {item.step}
                </span>
                <div className="relative z-10">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#143621]/10 text-[#143621] font-serif text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl text-[#143621] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
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
                      <span className="text-4xl font-heading font-bold text-solar-gold">
                        {project.kw}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="h-48 bg-primary/10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-solar-navy to-solar-navy-light opacity-90" />
                    <span className="relative text-4xl font-heading font-bold text-solar-gold">
                      {project.kw}
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <span className="text-xs font-semibold text-solar-gold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-heading font-semibold text-base mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
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
                We partner with businesses, property developers, and government
                institutions to deliver reliable solar power systems that reduce
                energy costs and eliminate dependence on diesel generators.
              </p>
              <div className="space-y-4 mb-8">
                <h3 className="font-heading font-semibold text-lg">
                  Industries served:
                </h3>
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
                    <span key={si} className="text-solar-gold text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">
                  "{t.comment}"
                </p>
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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-solar-navy to-solar-navy-light">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Switch to Solar Energy?
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed">
              Let Zohar Energy design a reliable solar power solution for your
              home, business, or facility.
            </p>
            <motion.a
              href="https://wa.me/2348134978154?text=Hello%20Zohar%20Energy%2C%20I%20would%20like%20to%20request%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-gold font-semibold text-primary text-lg transition-all hover:shadow-gold"
            >
              <FaWhatsapp className="w-6 h-6" /> Request a Free Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
