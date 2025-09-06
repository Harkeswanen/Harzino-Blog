import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black relative text-zinc-500 z-[120] py-12 px-6 w-full border-t text-sm border-zinc-800">
      <div className="max-w-6xl mx-auto grid pb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 ">
        {/* Logo + Description */}
        <div className="col-span-2">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-pink-600 text-xl font-bold"
          >
            Harzino
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-4 text-sm leading-relaxed max-w-md text-zinc-300"
          >
            Transforming ideas into digital reality with innovative solutions
            and cutting-edge technology.
          </motion.p>

          {/* Socials */}
          <motion.div
            className="flex gap-4 mt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }, // 0.2s delay between icons
              },
            }}
          >
            <motion.a
              variants={{
                hidden: { y: 10, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              href="#"
              target="https://www.instagram.com/harzino"
              rel="noopener noreferrer"
              className="hover:text-[#dc0073] transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </motion.a>

            <motion.a
              variants={{
                hidden: { y: 10, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              href="#"
              target="https://linkedin.com/company/harzino"
              rel="noopener noreferrer"
              className="hover:text-[#dc0073] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>

            <motion.a
              variants={{
                hidden: { y: 10, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              href="mailto:support@harzino.com"
              className="hover:text-[#dc0073] transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Company */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-[#dc0073] transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className="hover:text-[#dc0073] transition-all duration-300"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/blogs"
                className="hover:text-[#dc0073] transition-all duration-300"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/community"
                className="hover:text-[#dc0073] transition-all duration-300"
              >
                Community
              </NavLink>
            </li>
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="#"
                className="hover:text-[#dc0073] transition-all duration-300"
              >
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className="hover:text-[#dc0073] transition-all duration-300"
              >
                Terms of Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cookies"
                className="hover:text-[#dc0073] transition-colours duration-300"
              >
                Cookie Policy
              </NavLink>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto text-center py-4 border-t border-zinc-800 bg-black text-zinc-400"
      >
        © 2025 Harzino. All Rights Reserved.
      </motion.div>
    </footer>
  );
}
