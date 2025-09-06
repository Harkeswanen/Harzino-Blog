import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Send  , Calendar , MapPin , Mail } from 'lucide-react';


const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, delay: i * 0.20 },
    ease: [0.25, 0.1, 0.25, 1]
  }),
};

export default function ContactUs() {
  return (
    <>
        <Navbar/>
    <div className="bg-black text-white px-6 md:px-20 py-20 space-y-20">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
        className="text-center"
      >
        <h2 className="text-[42px] font-bold text-pink-500">Get In Touch</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Have a project in mind? We'd love to hear from you. Let's discuss how we can help bring your ideas to life.
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={1}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        <div className="bg-[#0A0A0A] border border-[#0A0A0A] hover:scale-105 hover:border-pink-500 transition-transform duration-500 ease-in-out rounded-2xl p-8 text-center shadow-lg">
          <div className="flex justify-center mb-4">
            <span className="bg-pink-600/20 p-4 rounded-full">
              <Mail strokeWidth={1.5} />
            </span>
          </div>
          <h3 className="text-xl font-semibold">Email Us</h3>
          <p className="text-pink-500 font-medium mt-2">support@harzino.com</p>
          <p className="text-gray-400 mt-2">Send us an email and we'll respond within 24 hours</p>
        </div>

        <div className="bg-[#0A0A0A] border border-[#0A0A0A] hover:scale-105 hover:border-pink-500 transition-transform duration-500 ease-in-out rounded-2xl p-8 text-center shadow-lg">
          <div className="flex justify-center mb-4">
            <span className="bg-pink-600/20 p-4 rounded-full">
              <MapPin strokeWidth={1.5} />
            </span>
          </div>
          <h3 className="text-xl font-semibold">Our Location</h3>
          <p className="text-pink-500 font-medium mt-2">Vadodara, Gujarat</p>
          <p className="text-gray-400 mt-2">We operate digitally from Gujarat, India</p>
        </div>
      </motion.div>

      {/* Forms Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={2}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      >
        {/* Send Message Form */}
        <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 ml-[30%]">Send us a message</h3>
          <form className="space-y-4">
            <span className="text-gray-400 text-[12px] " >Name *</span>
            <input type="text" placeholder="Your full name" className="w-full p-1.5 mt-2 text-[12px] rounded-lg bg-black border border-gray-500 text-gray-100 tracking-tight" required />

            <span className="text-gray-400 text-[12px] ">Email *</span>
            <input type="email" placeholder="your@email.com" className="w-full p-1.5 mt-2 text-[12px] rounded-lg bg-black border border-gray-500 text-gray-100 tracking-tight " required />

            <span className="text-gray-400 text-[12px] ">Subject</span>
            <input type="text" placeholder="Project inquiry, consultation, etc." className="w-full mt-2 p-1.5 text-[12px] rounded-lg bg-black border border-gray-500 text-gray-100 tracking-tight " required />

            <span className="text-gray-400 text-[12px] ">Message *</span>
            <textarea placeholder="Tell us about your project, goals, and how we can help..." rows={4} className="w-full mt-2 p-3 rounded-lg bg-black border border-gray-500 text-gray-100 tracking-tight " required />
            <button type="submit" className="w-fit p-2 ml-[35%] text-sm rounded-4xl bg-gradient-to-r from-pink-600 to-purple-600 hover:scale-110 transition-transform duration-500 ease-in-out">
                <Send  className="inline-block size-[16px] mr-2" />
              Send Message
            </button>
          </form>
        </div>

        {/* Schedule Call Form */}
        <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 ml-[30%]">Schedule a Call</h3>
          <form className="space-y-4">
            <span className="text-gray-400 text-[12px] " >Name *</span>
            <input type="text" placeholder="Your full name" className="w-full p-1.5 mt-2 text-[12px] rounded-lg bg-black border border-gray-500 text-gray-100 tracking-tight" required />

            <span className="text-gray-400 text-sm mb-2 text-[12px] " >Email *</span>
            <input type="email" placeholder="your@email.com" className="w-full p-1.5 mt-2 text-[12px] rounded-lg bg-black border border-gray-500 text-gray-400 tracking-tight " required />

            <span className="text-gray-400 text-sm mb-2 text-[12px] " >Phone Number *</span>
            <input type="tel" placeholder="+1 (555) 123-4567" className="w-full p-1.5 mt-2 text-[12px] rounded-lg bg-black border border-gray-700 text-gray-200" required />

            <span className="text-gray-400 text-sm mb-2 text-[12px] " >Preferred Time</span>
            <input type="text" placeholder="Project inquiry, consultation, etc." className="w-full mt-2 p-1.5 text-[12px] rounded-lg bg-black border border-gray-500 text-gray-100 tracking-tight " required />

            <span className="text-gray-400 text-sm mb-2 text-[12px] " >Reason for Call *</span>
            <textarea placeholder="Brief Description of what you want to discuss" rows={4} className="w-full mt-2 p-3 rounded-lg bg-black border border-gray-500 text-gray-100 tracking-tight " required />

            <button type="submit" className="w-fit p-2 ml-[35%] text-sm rounded-4xl bg-gradient-to-r from-pink-600 to-purple-600 hover:scale-110 transition-transform duration-500 ease-in-out">
                <Calendar strokeWidth={3}  className="inline-block size-[16px] mr-4"  />
              Request Call
            </button>
          </form>
        </div>
      </motion.div>
      {/* CTA Section */}
      <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      custom={3}
      className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 
                 backdrop-blur-lg border border-white/10 
                 rounded-2xl p-10 text-center max-w-5xl mx-auto"
    >
      <h3 className="text-2xl font-semibold mb-4 text-white">
        Ready to Start Your Project?
      </h3>
      <p className="text-gray-300 mb-6">
        Whether you're looking to build a new application, redesign your website,
        or explore innovative solutions, we're here to help turn your vision into reality.
      </p>
      <button className="px-6 py-1 border-1 text-[13px] rounded-lg bg-white text-pink-600 hover:bg-pink-700 hover:border-pink-700 hover:text-white transition font-medium">
        View Our Work
      </button>
    </motion.div>
    </div>
    <Footer/>
    </>
  );
}
