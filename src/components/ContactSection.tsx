import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello Zohar Energy, my name is ${name}. ${message}`;
    const whatsappUrl = `https://wa.me/2348134978154?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F2EB]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-serif text-4xl text-[#143621] font-semibold">
                Ready to Go Solar?
              </h2>
              <p className="mt-4 font-sans text-gray-600 max-w-xl">
                Our team of experts is ready to help you transition to clean energy.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-lg bg-[#D4AF37]/15 p-3 text-[#D4AF37]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-sans text-sm text-gray-600">Phone</p>
                  <a href="https://wa.me/2348134978154" target="_blank" rel="noopener noreferrer" className="font-sans font-semibold text-[#143621] block hover:text-[#D4AF37] transition-colors">
                    +234 813 4978 154
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-lg bg-[#D4AF37]/15 p-3 text-[#D4AF37]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-sans text-sm text-gray-600">Email</p>
                  <a href="mailto:info@zoharenergy.com" className="font-sans font-semibold text-[#143621] block hover:text-[#D4AF37] transition-colors">
                    info@zoharenergy.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-lg bg-[#D4AF37]/15 p-3 text-[#D4AF37]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-sans text-sm text-gray-600">Office Address</p>
                  <p className="font-sans font-semibold text-[#143621] block">
                    Abuja, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-sm shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-sans text-sm text-gray-600 block mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-all focus:border-[#143621] rounded-sm"
                  required
                />
              </div>
              <div>
                <label className="font-sans text-sm text-gray-600 block mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-all focus:border-[#143621] rounded-sm"
                  required
                />
              </div>
              <div>
                <label className="font-sans text-sm text-gray-600 block mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-all focus:border-[#143621] resize-none rounded-sm"
                  required
                />
              </div>
              <button type="submit" className="w-full rounded-sm bg-[#D4AF37] px-6 py-4 text-base font-bold text-[#143621] transition-all duration-200 hover:bg-[#c39b2f] flex items-center justify-center gap-2">
                <FaWhatsapp className="w-5 h-5" />
                Request a Free Quote
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

