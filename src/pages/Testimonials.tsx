import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/siteData";

const filters = ["All", "Residential", "Commercial"] as const;

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = activeFilter === "All" ? testimonials : testimonials.filter((t) => t.category === activeFilter);

  return (
    <PageLayout
      title="Client Testimonials for Solar Services in Abuja | Zohar Energy"
      description="Read what clients in Abuja say about Zohar Energy's solar installation services. Discover why customers trust us for reliable, professional solar solutions."
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
            What Our Clients Say About Zohar Energy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-primary-foreground/70 max-w-xl mx-auto text-lg"
          >
            Real stories from real customers who chose Zohar Energy for their solar needs in Abuja.
          </motion.p>
        </div>
      </section>

      {/* Testimonials */}
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
            {filtered.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-card rounded-xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <span key={si} className="text-solar-gold text-lg">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">"{t.comment}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-heading font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.service}</p>
                  <span className="inline-block mt-2 text-xs font-medium text-solar-gold bg-accent/15 px-2 py-0.5 rounded">{t.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Experience */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionHeading
            title="Share Your Experience"
            subtitle="Had a great experience with Zohar Energy? We'd love to hear from you!"
          />
          <a
            href="https://wa.me/2348000000000?text=Hello%20Zohar%20Energy%2C%20I%20would%20like%20to%20share%20my%20experience."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-gold text-primary font-semibold hover:shadow-gold hover:scale-105 transition-all"
          >
            Share Your Story
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default Testimonials;
