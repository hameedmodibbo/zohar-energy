import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import Gallery from "@/components/Gallery";
import { gallery } from "@/data/siteData";

const Projects = () => {
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
            Explore our portfolio of professional solar installations and energy solutions across Abuja.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <Gallery items={gallery} filters={["All", "Residential", "Commercial"]} />
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
