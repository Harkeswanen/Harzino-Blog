import { motion } from "framer-motion";
import { FaRegClock, FaRegCalendarAlt, FaUserEdit } from "react-icons/fa";

interface ImageData {
  src: string;
  title: string;
  topic: string;
  alt: string;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
  initial?: string | object;
  animate?: unknown;
  tailwindClass: string;
  date?: string;
  readTime?: string;
  author?: string;
  content?: string;
  tags?: string[];
  featured: boolean; // Corrected type: 'true | false' is the same as 'boolean'
}

interface ModalProps {
  imageData: ImageData;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageData, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex justify-center items-center z-[130] p-4 overflow-y-auto"
    >
      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        className="absolute inset-0 bg-black"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative bg-black border border-zinc-600 rounded-lg lg:w-[30vw] max-h-[80vh] text-white my-8 md:w-[90vw] sm:w-[90vw] overflow-auto z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl z-20"
        >
          &times;
        </button>
        {/* Hero Image */}
        <div className="relative">
          <img
            src={imageData.src}
            alt={imageData.alt}
            className="w-full h-auto object-cover rounded-t-lg"
          />
          {imageData.featured && ( // Corrected: Access the 'featured' prop from 'imageData'
            <div className="absolute top-4 left-4 bg-[#dc0073] text-white text-xs px-2 py-1 rounded-full font-semibold">
              Featured
            </div>
          )}
        </div>
        {/* Content Area */}
        <div className="p-6">
          {/* Metadata Section */}
          <div className="flex items-center text-zinc-400 text-sm gap-4 mb-4">
            {imageData.date && (
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt />
                <span>{imageData.date}</span>
              </div>
            )}
            {imageData.readTime && (
              <div className="flex items-center gap-1">
                <FaRegClock />
                <span>{imageData.readTime}</span>
              </div>
            )}
            {imageData.author && (
              <div className="flex items-center gap-1">
                <FaUserEdit />
                <span>{imageData.author}</span>
              </div>
            )}
          </div>
          {/* Topic */}
          {imageData.topic && (
            <span className="text-[#dc0073] ring-1 ring-[#dc0073]/30 text-xs px-2 py-1 rounded-md font-medium">
              {imageData.topic}
            </span>
          )}
          {/* Title */}
          <h2 className="text-4xl font-bold mt-4 mb-4 text-white">
            {imageData.title}
          </h2>
          {/* Main Content */}
          {imageData.content && (
            <div
              className="text-zinc-300 leading-relaxed text-left"
              dangerouslySetInnerHTML={{ __html: imageData.content }}
            ></div>
          )}
          {/* Tags Section */}
          {imageData.tags && (
            <div className="mt-6 pt-6 border-t border-zinc-700">
              <span className="text-zinc-400 font-semibold mr-2">Tags:</span>
              <div className="flex flex-wrap gap-2 mt-3 pb-6 border-b border-zinc-700">
                {imageData.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#151515] text-zinc-400 px-2 py-1 text-xs rounded-full border border-zinc-700/50 hover:border-[#dc0073]/50 hover:shadow-[#dc0073]/20 hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          {/* Buttons */}
          <div className="flex justify-start gap-4 mt-8">
            <button className="bg-[#dc0073] px-6 py-2 rounded-full font-semibold text-white hover:bg-pink-700 transition-colors">
              Share Article
            </button>
            <button
              onClick={onClose}
              className="border border-zinc-600 px-6 py-2 rounded-full font-semibold text-zinc-400 hover:bg-zinc-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;