import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/siteData";

const Services = () => {
  return (
    <PageLayout
      title="Solar Installation Services in Abuja | Zohar Energy"
      description="Explore Zohar Energy's full range of solar services in Abuja, including solar panel installation, inverter setup, battery storage, system maintenance, and energy consultation."
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
            Our Solar Services in Abuja
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-primary-foreground/70 max-w-xl mx-auto text-lg"
          >
            Comprehensive solar energy solutions tailored for homes and businesses in Abuja.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center shrink-0 group-hover:bg-gradient-gold transition-all">
                  <service.icon className="w-7 h-7 text-solar-gold group-hover:text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="font-heading font-semibold text-xl mb-2">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.full}</p>
                  <a
                    href="https://wa.me/2348000000000?text=Hello%20Zohar%20Energy%2C%20I%20am%20interested%20in%20your%20service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[hsl(142,70%,45%)] text-white font-semibold text-sm hover:scale-105 transition-transform"
                  >
                    <FaWhatsapp className="w-4 h-4" /> Enquire on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionHeading
            title="Get in Touch via WhatsApp"
            subtitle="Ready to start your solar journey? Reach out and get a personalized quote within minutes."
          />
          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-gold text-primary font-semibold hover:shadow-gold hover:scale-105 transition-all"
          >
            <FaWhatsapp className="w-5 h-5" /> Message Us Now
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
