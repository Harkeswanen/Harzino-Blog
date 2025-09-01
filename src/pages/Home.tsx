import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import codeImg from "../imgs/code.jpeg";
import tableImg from "../imgs/table.jpg";
import workoutImg from "../imgs/44.jpeg";
import waveImg from "../imgs/22.png";
import footballImg from "../imgs/football.jpeg";
import nvidiaImg from "../imgs/nvidia.jpg";
import Modal from "../components/ModalProps";
import { useEffect, useState, useRef } from "react";
import { Clock } from "lucide-react";
import { BsStarFill } from "react-icons/bs";

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
  const images: ImageData[] = [
    {
      src: nvidiaImg,
      title: "The GPU Revolution",
      topic: "Hardware & AI",
      alt: "An NVIDIA GPU.",
      top: "15%",
      right: "8%",
      initial: { opacity: 0, scale: 0.5 },
      animate: {
        opacity: 1,
        scale: 1,
        transition: { delay: 1.5, duration: 0.8 },
      },
      tailwindClass: "float-animation-2",
      date: "February 28, 2024",
      readTime: "5 min read",
      author: "Jane Doe",
      featured: true,

      content: `
      <p>Graphics Processing Units (GPUs) were once just for gamers, but they've now become the backbone of the AI revolution. Their parallel processing power is uniquely suited for the massive calculations required for deep learning models.</p>
      <p>This shift has democratized access to powerful computing, allowing startups and researchers to train complex models without the need for supercomputers. The innovation cycle in both hardware and AI has accelerated dramatically as a result.</p>
    `,
      tags: ["hardware", "ai", "machine-learning"],
      responsiveClasses: "w-[123px] h-[77px] md:w-[150px] md:h-[90px] lg:w-[180px] lg:h-[110px]",
    },
    {
      src: waveImg,
      title: "Waves of Code",
      topic: "Generative Art",
      alt: "A digital wave pattern.",
      top: "6%",
      left: "0.5%",
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } },
      tailwindClass: "float-animation",
      date: "January 10, 2024",
      readTime: "7 min read",
      author: "Dr. Amanda Foster",
      content: `
      <p>The rise of AI has fundamentally changed how we approach software development. From code generation to automated testing, AI tools are becoming indispensable parts of the modern developer's toolkit.</p>
      <p>Machine learning algorithms can now assist in:</p>
      <ul>
        <li>Code completion and generation</li>
        <li>Bug detection and prevention</li>
        <li>Performance optimization</li>
        <li>User experience personalization</li>
      </ul>
      <p>The integration of AI in development workflows is not about replacing developers, but rather augmenting their capabilities and allowing them to focus on more creative and strategic aspects of their work.</p>
      <p>As we move forward, the developers who embrace these AI-powered tools will have a significant advantage in building more efficient, robust, and innovative solutions.</p>
    `,
      tags: ["artificial intelligence", "development", "automation"],
      featured: true,
      responsiveClasses: "w-48 h-28 sm:w-56 sm:h-32 lg:w-64 lg:h-36",
    },
    {
      src: workoutImg,
      title: "Fitness Tracking",
      topic: "Mobile App Development",
      alt: "A person working out.",
      top: "75%",
      right: "15%",
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0, transition: { delay: 1.8, duration: 0.8 } },
      tailwindClass: "float-animation",
      date: "June 1, 2024",
      readTime: "4 min read",
      author: "Sarah Brown",
      content: `
      <p>The fitness app market is booming, but what does it take to build an app that stands out? This article dives into the key features of a successful fitness tracker, from intuitive UI design to robust data synchronization.</p>
      <p>We'll cover the technologies and design principles needed to create an engaging user experience, including gamification, community features, and personalized workout plans based on machine learning.</p>
    `,
      tags: ["mobile-app", "development", "fitness"],
      featured: false,
      responsiveClasses: "w-32 h-20 sm:w-40 sm:h-24 lg:w-44 lg:h-26 ",
    },
    {
      src: footballImg,
      title: "Football Analytics",
      topic: "Data Science",
      alt: "A football pitch with data points.",
      top: "60%",
      left: "3.5%",
      featured: true,
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.8 } },
      tailwindClass: "float-animation-3",
      date: "April 20, 2024",
      readTime: "6 min read",
      author: "Alex Miller",
      content: `
      <p>Data science has transformed the world of sports, and football is no exception. By analyzing player performance metrics, team tactics, and opposition weaknesses, clubs can gain a significant competitive edge.</p>
      <p>From predictive analytics on player injuries to optimizing in-game strategies, data is now as crucial as a star player. This new era of football is all about using insights to win.</p>
    `,
      tags: ["data-science", "sports", "analytics"],
      responsiveClasses: "w-40 h-24 sm:w-48 sm:h-28 lg:w-52 lg:h-30 ",
    },
    {
      src: codeImg,
      title: "Web Dev Workflow",
      topic: "Frontend Development",
      alt: "A code editor with lines of code.",
      top: "25%",
      left: "18.5%",
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0, transition: { delay: 0.9, duration: 0.8 } },
      tailwindClass: "float-animation-2",
      date: "May 5, 2024",
      readTime: "9 min read",
      author: "Chris Johnson",
      content: `
      <p>A well-optimized frontend development workflow can make all the difference in a project's success. From choosing the right framework to setting up an efficient build process, every step matters.</p>
      <p>This article explores the best tools and practices for 2024, including component-based architectures, state management patterns, and automated testing to ensure a smooth and scalable development process.</p>
    `,
      tags: ["frontend", "web-dev", "workflow"],
      featured: false,
      responsiveClasses: "w-32 h-20 sm:w-40 sm:h-24 lg:w-44 lg:h-26",
    },
    {
      src: tableImg,
      title: "Tablet Sketchbook",
      topic: "UI/UX Design",
      alt: "A tablet with a design sketch.",
      top: "45%",
      right: "0.5%",
      featured: false,
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.8 } },
      tailwindClass: "float-animation-3",
      date: "March 15, 2024",
      readTime: "8 min read",
      author: "Sam Wilson",
      content: `
      <p>Sketching on a tablet has become an essential part of the modern UI/UX design process. It allows for quick ideation and wireframing, bridging the gap between a paper-based workflow and digital mockups.</p>
      <p>Designers can now rapidly prototype ideas, gather feedback, and iterate on their designs with unprecedented speed. The tablet acts as a digital canvas, enabling creativity without the limitations of traditional tools.</p>
    `,
      tags: ["ui/ux", "design", "prototyping"],
      responsiveClasses: "w-48 h-28 sm:w-56 sm:h-32 lg:w-64 lg:h-36 ",
    },
  ];

  const nextSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (nextSectionRef.current) {
        nextSectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 4000);


    return () => clearTimeout(timer);
  }, []);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
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

  return (
    <>
      <Navbar />
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center bg-black text-white overflow-hidden ">
          {images.map((img, index) =>
            (
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
                  <p className="text-[#dc0073] text-sm font-light">
                    {img.topic}
                  </p>
                </div>
              </motion.div>
            )
          )}

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

          <motion.a
            href="#featured"
            className="border border-[#dc0073] bg-white inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium z-90 h-fit px-7 py-2.5 text-center rounded-full font-semibold text-pink-700 hover:bg-[#dc0073] hover:text-white duration-300 transition-all"
          >
            View Featured
          </motion.a>
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

      <section ref={nextSectionRef} className="py-16 bg-black text-white">
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
                  transition={{ delay: 1 + idx*0.3, duration: 1 }}
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
                    {img.tags.map((tag) => (
                      <div
                        key={tag}
                        className="w-fit bg-[#1a1a1a] px-2 text-xs text-center rounded-full  text-zinc-400"
                      >
                        #{tag}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>

          <button className="mt-10 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:bg-gradient-to-r hover:from-purple-800 hover:to-pink-800 hover:scale-105 transition-all duration-300 ">
            View All Articles
          </button>
        </motion.div>
      </section>

      {modalOpen && selectedImage && (
        <Modal imageData={selectedImage} onClose={handleCloseModal} />
      )}
      <Footer />
    </>
  );
}