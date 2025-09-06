import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imageData from "../data/imageData";
import Modal from "../components/ModalProps";
import { useEffect, useState, useRef } from "react";
import { Clock } from "lucide-react";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface ImageData {
  src: string;
  title: string;
  topic: string;
  alt: string;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  initial?: string | object;
  animate?: unknown;
  tailwindClass: string;
  date?: string;
  readTime?: string;
  author?: string;
  content?: string;
  tags?: string[];
  featured: true | false;
  responsiveClasses?: string;
}

export default function Home() {
  const images: ImageData[] = imageData;

  const nextSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (nextSectionRef.current) {
        nextSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const handleImageClick = (data: ImageData) => {
    setSelectedImage(data);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const scrollToFeatured = () => {
    const featuredSection = document.getElementById('featured');
    if (featuredSection) {
      featuredSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <Navbar />
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center bg-black text-white overflow-hidden ">
        {images.map((img, index) => (
          <motion.div
            key={index}
            onClick={() => handleImageClick(img)}
            className={`group border border-zinc-600 rounded-lg shadow-lg
                            ${img.tailwindClass} z-10 cursor-pointer overflow-hidden absolute
                            ${img.responsiveClasses}`}
            style={{
              top: img.top,
              left: img.left,
              right: img.right,
              bottom: img.bottom,
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.3, duration: 0.8 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className={`rounded-lg shadow-lg transform transition-transform duration-500 object-cover group-hover:scale-110`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end text-left p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white font-semibold text-sm leading-tight mb-1">
                {img.title}
              </p>
              <p className="text-[#dc0073] text-sm font-light">{img.topic}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          className="bg-opacity-70 scale-animation absolute bottom-10
           right-1/3 w-12 h-16 bg-gradient-to-br from-[#dc0073]/20 to-purple-600/20
           rounded-lg backdrop-blur-lg border border-[#dc0073]/30 z-100"
          initial={{ opacity: 0.6, y: 50 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 0.8 }}
        ></motion.div>

        <motion.div
          className="absolute top-10 left-[30%] w-16 h-24 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 z-80"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 0.8 }}
        ></motion.div>

        {/* Hero Text */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight max-w-3xl mx-auto z-90"
        >
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
          >
            Transforming ideas into{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            viewport={{ once: true }}
            className="text-[#dc0073]"
          >
            digital reality
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6, duration: 1 }}
          >
            {" "}
            with innovative solutions and cutting-edge technology.
          </motion.span>
        </motion.h1>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="text-lg text-[#bebebc] italic max-w-2xl mx-auto z-90"
        >
          "I am always doing things I can't do; that’s how I get to do them." –
          Picasso
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 mt-8 z-90"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 1 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.4 },
            },
          }}
        >
          <motion.a
            href="#work"
            className="bg-[#dc0073] px-8 py-3 z-90 rounded-full font-semibold text-white hover:bg-pink-700 hover:scale-105  duration-300 transition-all"
          >
            Explore Our Work
          </motion.a>

          <motion.button
            onClick={scrollToFeatured}
            className="border border-[#dc0073] bg-white inline-flex items-center justify-center gap-2 whitespace-nowrap z-90 h-fit px-7 py-2.5 text-center rounded-full font-semibold text-pink-700 hover:bg-[#dc0073] hover:text-white duration-300 transition-all cursor-pointer"
          >
            View Featured
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.7, duration: 1 }}
          className="absolute flex flex-col justify-between bottom-8 z-90 text-zinc-500 text-sm bounce-animation"
        >
          Scroll to explore ↓
          <div className="h-12 w-6 inline-block ml-2 rounded-2xl border-2 border-r-2 border-zinc-500">
            <div className="h-4 w-1 rounded-full border-3 border-zinc-500 bounce-animation mx-auto mt-2"></div>
          </div>
        </motion.div>
      </section>

      <section id="featured" ref={nextSectionRef} className="py-16 bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="w-[80vw] mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-[length:200%_200%] text-transparent bg-clip-text gradient-animation mb-2">
            Featured Stories
          </h2>
          <p className="text-zinc-400 mb-10">
            Discover our latest insights on technology, design, and innovation
          </p>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images
              .filter((img) => img.featured)
              .slice(0, 4)
              .map((img, idx) => (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.3, duration: 1 }}
                  key={idx}
                  onClick={() => handleImageClick(img)}
                  className="group cursor-pointer bg-[#0a0a0a] border-1  rounded-xl h-auto overflow-hidden border-[#2a2a2a] hover:border-[#dc0073]/30 shadow hover:shadow-pink-500/20  hover:text-pink-600 hover:scale-105 transition-all  ease-in-out"
                >
                  <div className="relative h-fit">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-[30%] object-cover group-hover:scale-110 rounded-t-lg mb-4 transition-transform duration-600 ease-in-out"
                    />
                    {img.featured && (
                      <div className="absolute top-4 right-4 bg-[#dc0073] text-white text-xs px-1 py-1 z-[120] rounded-full font-semibold">
                        <BsStarFill className="size-4 " />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-center mb-2 px-4">
                    <span className=" text-pink-600 ring-1 text-xs px-1 py-1 rounded-md ">
                      {img.topic}
                    </span>
                    <div className="flex justify-around items-center px-2 py-1 gap-1 text-[#4f535d] text-xs rounded-full ">
                      <Clock className="size-3" />
                      {img.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg text-left px-4 py-2 font-semibold leading-tight">
                    {img.title}
                  </h3>

                  <p
                    className="text-sm text-left px-4 py-2 text-zinc-400 line-clamp-5"
                    dangerouslySetInnerHTML={{
                      __html: img.content?.slice(0, 160) + "...",
                    }}
                  />

                  <div className="flex text-left px-4 py-2 justify-between items-center text-xs text-zinc-500 mt-3">
                    <span>By {img.author}</span>
                    <span>{img.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 px-4 py-2 mt-2">

                    {img.tags &&
                      img.tags.map((tag) => (
                        <div
                          key={tag}
                          className="w-fit bg-[#1a1a1a] px-2 text-xs text-center rounded-full  text-zinc-400"
                        >
                                              </div>
                      ))}

                    {img.tags?.map((tag) => (
                      <div
                        key={tag}
                        className="w-fit bg-[#1a1a1a] px-2 text-xs text-center rounded-full  text-zinc-400"
                      >
                   
                      </div>
                    ))}

                  </div>
                </motion.div>
              ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.5 }}
            className="mt-10"
          >
            <Link
              to="/blogs"
              className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:bg-gradient-to-r hover:from-purple-800 hover:to-pink-800 hover:scale-105 transition-all duration-300 inline-block"
            >
              View All Articles
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {modalOpen && selectedImage && (
        <Modal imageData={selectedImage} onClose={handleCloseModal} />
      )}
      <Footer />
    </>
  );
}
