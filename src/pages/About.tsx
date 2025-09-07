import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20">
        {/* About Section */}
        <section className="text-center px-6 pt-8 pb-4">
        <h1 className="text-4xl md:text-5xl font-extrabold">About Harzino</h1>
        <p className="max-w-4xl mx-auto mt-4 text-lg text-neutral-300">
          We are a team of passionate innovators, designers, and developers dedicated to transforming ideas
          into digital reality through cutting-edge technology and creative solutions.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="text-center rounded-2xl border border-pink-600/20 p-8 md:p-12 bg-gradient-to-r from-[#2a0a2f] via-[#1a0a1a] to-[#150a15]">
          <h2 className="text-3xl font-extrabold mb-3">Our Mission</h2>
          <p className="text-neutral-300 max-w-5xl mx-auto">
            To bridge the gap between imagination and implementation, creating innovative digital solutions that
            empower businesses and individuals to achieve their goals. We believe in the transformative power of
          technology when combined with human creativity and strategic thinking.
        </p>
        </div>
      </section>
      

             {/* Values Section */}
       <section className="text-center px-6 pt-10">
         <h2 className="text-3xl font-extrabold">Our Values</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8">
          {[
            {
              key: "Innovation",
              title: "Innovation",
              text:
                "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
              svg: (
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" opacity="0.25" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              ),
            },
            {
              key: "Collaboration",
              title: "Collaboration",
              text:
                "Our diverse team brings together different perspectives to create exceptional results.",
              svg: (
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M3 20a5 5 0 0 1 10 0" />
                  <path d="M11 20a5 5 0 0 1 10 0" />
                </svg>
              ),
            },
            {
              key: "Creativity",
              title: "Creativity",
              text:
                "We believe in the power of creative thinking to solve complex problems and inspire change.",
              svg: (
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 18h6" />
                  <path d="M9.5 21h5" />
                  <path d="M12 2a7 7 0 0 0-7 7c0 2.3 1.2 4.3 3 5.5V16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1.5c1.8-1.2 3-3.2 3-5.5a7 7 0 0 0-7-7Z" />
                </svg>
              ),
            },
            {
              key: "Excellence",
              title: "Excellence",
              text:
                "We are committed to delivering the highest quality in everything we do.",
              svg: (
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 17l-5.5 3 1.5-6-4.5-4 6-.5L12 3l2.5 6 6 .5-4.5 4 1.5 6Z" />
                </svg>
              ),
            },
          ].map((v) => (
                         <div
               key={v.key}
                               className="rounded-2xl border border-white/10 p-8 md:p-10 bg-black shadow-xl transition-all duration-300 hover:scale-105 hover:border-pink-500/30 hover:shadow-2xl hover:shadow-pink-500/20"
             >
              <div
                className="w-16 h-16 mx-auto mb-3 rounded-full grid place-items-center relative"
                style={{
                  background:
                    "radial-gradient(60px 30px at 50% 15%, rgba(255,0,153,.35), rgba(0,0,0,0))",
                }}
              >
                <div className="absolute inset-0 rounded-full ring-1 ring-pink-600/20" />
                {v.svg}
          </div>
              <h3 className="text-lg font-semibold mb-1">{v.title}</h3>
              <p className="text-neutral-300">{v.text}</p>
          </div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section className="px-6 pt-10">
        <h2 className="text-center text-3xl font-extrabold">Meet Our Founder</h2>
                                   <div className="max-w-3xl mx-auto mt-6 p-4 rounded-2xl border border-pink-500/30 bg-black text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
                                           <img src="/pic.png" alt="Founder" className="w-full max-w-xl rounded-xl mx-auto" />
          <h3 className="mt-3 text-2xl font-semibold">Hetav Shah</h3>
          <p className="text-pink-500 font-semibold">Founder & CEO</p>
          <p className="text-neutral-300 mt-2">
            Visionary leader driving innovation in digital solutions and transforming ideas into reality through technology.
            </p>
          </div>
      </section>

      {/* Story Section */}
      <section className="px-6 pt-10 pb-16 text-center">
        <h2 className="text-3xl font-extrabold mb-3">Our Story</h2>
                 <div className="max-w-6xl mx-auto rounded-2xl border border-white/10 p-8 md:p-10 bg-black">
          <p className="text-neutral-300">
            Founded in 2020, Harzino emerged from a shared vision to democratize access to cutting-edge digital
            solutions. Under the leadership of founder Hetav Shah, and as part of the Harkeswanen ecosystem, we
            recognized the growing gap between innovative ideas and their practical implementation.
          </p>
          <p className="text-neutral-300 mt-4">
            What started as a small team of passionate individuals has grown into a dynamic organization that serves
            clients across various industries, from startups to Fortune 500 companies. Our approach combines deep
            technical expertise with creative problem-solving, ensuring that every solution we deliver is both
            innovative and practical.
          </p>
          <p className="text-neutral-300 mt-4">
            Today, we continue to push the boundaries of what's possible in digital innovation, always staying ahead
            of technological trends while maintaining our core focus on human-centered design and sustainable
            development practices.
          </p>
        </div>
              </section>
      </main>
      <Footer />
    </div>
  );
}

