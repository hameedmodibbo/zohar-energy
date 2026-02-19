import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/siteData";

const filters = ["All", "Residential", "Commercial"] as const;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <PageLayout
      title="Solar Installation Projects in Abuja | Zohar Energy"
      description="View Zohar Energy's completed solar installation projects in Abuja. See residential and commercial solar systems we have installed for our satisfied clients."
    >
      {/* Hero */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl lg:text-5xl text-primary-foreground mb-4"
          >
            Our Completed Solar Projects in Abuja
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-primary-foreground/70 max-w-xl mx-auto text-lg"
          >
            Browse our portfolio of residential and commercial solar installations across Abuja.
          </motion.p>
        </div>
      </section>

      {/* Filters & Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-accent/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-52 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-solar-navy to-solar-navy-light" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <span className="text-5xl font-heading font-bold text-solar-gold mb-1">{project.kw}</span>
                    <span className="text-primary-foreground/70 text-sm font-medium">System Capacity</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-solar-gold uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-heading font-semibold text-base mt-1 mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Quote */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionHeading
            title="Request a Quote"
            subtitle="Interested in a solar installation? Contact us today for a free, no-obligation quote."
          />
          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-gold text-primary font-semibold hover:shadow-gold hover:scale-105 transition-all"
          >
            Get Your Free Quote <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
