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
      <section className="py-20 bg-[#143621]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif font-extrabold text-4xl lg:text-5xl text-white mb-4"
          >
            Our Solar Services in Abuja
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/70 max-w-xl mx-auto text-lg"
          >
            Comprehensive solar energy solutions tailored for homes and businesses in Abuja.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-[#F5F2EB]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-sm p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-sm bg-[#D4AF37]/15 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/25 transition-all">
                  <service.icon className="w-7 h-7 text-[#D4AF37] group-hover:text-[#143621]" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif font-semibold text-2xl mb-2 text-[#143621]">{service.title}</h2>
                  <p className="font-sans text-gray-600 leading-relaxed mb-4">{service.full}</p>
                  <a
                    href="https://wa.me/2348134978154?text=Hello%20Zohar%20Energy%2C%20I%20am%20interested%20in%20your%20service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#D4AF37] text-[#143621] font-semibold text-sm hover:bg-[#c39b2f] transition-all"
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
      <section className="py-16 bg-[#143621]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionHeading
            title="Get in Touch via WhatsApp"
            subtitle="Ready to start your solar journey? Reach out and get a personalized quote within minutes."
            light={true}
          />
          <a
            href="https://wa.me/2348134978154"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm bg-[#D4AF37] text-[#143621] font-semibold hover:bg-[#c39b2f] transition-all"
          >
            <FaWhatsapp className="w-5 h-5" /> Message Us Now
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
