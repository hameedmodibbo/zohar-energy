import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2 className={`font-serif font-bold text-3xl lg:text-4xl mb-3 ${light ? "text-white" : "text-[#143621]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-base ${centered ? "mx-auto" : ""} ${light ? "text-white/70" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
