import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
}

interface GalleryProps {
  items: GalleryItem[];
  filters?: string[];
}

const Gallery = ({ items, filters }: GalleryProps) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filtered =
    activeFilter === "All"
      ? items
      : items.filter((item) => item.category === activeFilter);

  const filterList = filters || ["All", "Residential", "Commercial"];

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % filtered.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(filtered[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = selectedIndex === 0 ? filtered.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
    setSelectedImage(filtered[prevIndex]);
  };

  const openImage = (image: GalleryItem, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filterList.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2.5 rounded-sm text-sm font-semibold transition-all ${
              activeFilter === filter
                ? "bg-[#D4AF37] text-[#143621]"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filtered.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            onClick={() => openImage(item, index)}
            className="group cursor-pointer rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative h-64 overflow-hidden bg-gray-200">
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = "/placeholder.svg";
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  <p className="font-semibold">{item.title}</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white">
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                {item.category}
              </span>
              <h3 className="font-serif font-semibold text-base mt-2 mb-2 text-[#143621]">
                {item.title}
              </h3>
              <p className="font-sans text-gray-600 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#D4AF37] transition-colors"
              >
                <X size={32} />
              </motion.button>

              {/* Image */}
              <div className="bg-black rounded-lg overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = "/placeholder.svg";
                  }}
                />
              </div>

              {/* Info */}
              <div className="mt-6 text-white">
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h2 className="font-serif font-bold text-2xl mt-2 mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-300 mb-4">{selectedImage.description}</p>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrev}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </motion.button>

                  <span className="text-sm text-gray-400">
                    {selectedIndex + 1} of {filtered.length}
                  </span>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
