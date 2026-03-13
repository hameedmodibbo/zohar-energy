import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";

interface ApplianceGroup {
  category: string;
  items: string[];
}

interface Package {
  title: string;
  subtitle: string;
  featured?: boolean;
  whatsappText: string;
  groups: ApplianceGroup[];
}

const packages: Package[] = [
  {
    title: "20KW Solar System",
    subtitle: "Suitable for medium homes and small offices",
    whatsappText: "Hello%20Zohar%20Energy%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%2020KW%20Solar%20System.",
    groups: [
      { category: "Air Conditioning", items: ["3–4 Air Conditioners (1.5 Ton)"] },
      { category: "Cooling & Ventilation", items: ["4–5 Ceiling Fans"] },
      { category: "Kitchen & Storage", items: ["2 Refrigerators or Freezers"] },
      { category: "Electronics", items: ["2–3 LED TVs", "3–4 Computers", "CCTV System"] },
      { category: "Lighting", items: ["25–35 LED Lights"] },
      { category: "Utilities", items: ["Washing Machine", "Water Pump"] },
    ],
  },
  {
    title: "30KW Solar System",
    subtitle: "Suitable for large homes, duplexes, and small commercial properties",
    featured: true,
    whatsappText: "Hello%20Zohar%20Energy%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%2030KW%20Solar%20System.",
    groups: [
      { category: "Air Conditioning", items: ["5–6 Air Conditioners (1.5 Ton)"] },
      { category: "Cooling", items: ["5 Ceiling Fans"] },
      { category: "Kitchen", items: ["3 Refrigerators or Freezers", "Microwave"] },
      { category: "Electronics", items: ["3–4 LED TVs", "4–6 Computers", "CCTV System", "Printer"] },
      { category: "Lighting", items: ["35–50 LED Lights"] },
      { category: "Utilities", items: ["Washing Machine", "Water Pump"] },
    ],
  },
  {
    title: "50KW Solar System",
    subtitle: "Suitable for estates, commercial facilities, and institutions",
    whatsappText: "Hello%20Zohar%20Energy%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%2050KW%20Solar%20System.",
    groups: [
      { category: "Air Conditioning", items: ["10 Air Conditioners (1.5 Ton)"] },
      { category: "Cooling", items: ["5 Ceiling Fans"] },
      { category: "Kitchen", items: ["4–5 Refrigerators or Freezers", "Microwaves"] },
      { category: "Electronics", items: ["3–5 LED TVs", "5–8 Computers", "Printers", "CCTV System"] },
      { category: "Lighting", items: ["50–70 LED Lights"] },
      { category: "Utilities", items: ["Washing Machines", "Water Pumps"] },
    ],
  },
];

const PackagesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Find the Right Solar System for Your Energy Needs"
          subtitle="Our solar packages are designed to support different energy demands, from residential homes to offices and commercial facilities. Each system below shows the typical appliances it can comfortably power."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-card rounded-xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                pkg.featured ? "border-2 border-solar-gold" : ""
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <h3 className="font-heading font-bold text-xl mb-1">{pkg.title}</h3>
              <p className="text-muted-foreground text-sm mb-5">{pkg.subtitle}</p>
              <hr className="border-border mb-5" />

              <div className="flex-1 space-y-4">
                {pkg.groups.map((group) => (
                  <div key={group.category}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-solar-gold mb-1.5">
                      {group.category}
                    </p>
                    {group.items.map((item) => (
                      <div key={item} className="flex items-start gap-2 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-solar-gold mt-1.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/2348134978154?text=${pkg.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-gold font-semibold text-primary text-sm w-full hover:shadow-gold hover:scale-105 transition-all"
              >
                <FaWhatsapp className="w-4 h-4" /> Request a Quote
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;