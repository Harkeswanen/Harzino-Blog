import { useState  } from "react";
import type { FC } from "react";

import { MessageSquareIcon, User2Icon } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Fix: Use FC for IconComponent type alias
type IconComponent = FC<{}>;

const Community: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  // SVG icons
  
   
  // const MessageSquareIcon: IconComponent = () => (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="24"
  //     height="24"
  //     viewBox="0 0 24 24"
  //     fill="none"
  //     stroke="currentColor"
  //     strokeWidth="2"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //     className="feather feather-message-square"
  //   >
  //     <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  //   </svg>
  // );

  const HeartIcon: IconComponent = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-heart"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );

  const ZapIcon: IconComponent = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-zap"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  );

  interface StatCardProps {
    icon: IconComponent;
    value: string;
    label: string;
  }

  const StatCard: FC<StatCardProps> = ({ icon: Icon, value, label }) => (
    <div className="bg-[#0a0a0a]  border-1 border-[#c2c2c2]/30 rounded-2xl p-6 flex flex-col items-center justify-center space-y-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#808080]/30">
      <div className="text-4xl text-[#FF0077] mb-2">
        <Icon />
      </div>
      <div className="text-2xl font-bold text-gray-50">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );

  interface FeatureCardProps {
    icon: IconComponent;
    title: string;
    description: string;
  }

  const FeatureCard: FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
    <div className="bg-[#0a0a0a] border-1 border-[#c2c2c2]/30 rounded-2xl p-6 text-left space-y-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#808080]/30">
      <div className="text-3xl text-[#d80065] ">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );

  return (
    <>
    
    <div className={showModal ? "filter blur-sm" : ""}>
      <Navbar />

      <div
        className={"bg-[#010002] text-white font-sans min-h-screen py-16 px-4 sm:px-6 lg:px-8 "}
      >
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 mt-10">
          Join Our <span className="bg-gradient-to-r from-[#FF0077] to-[#B918EE] bg-clip-text text-transparent">Community</span>
        </h1>
        <p className="max-w-2xl mx-auto text-md md:text-lg text-gray-400 mb-8">
          Connect with developers, designers, and innovators from around the world. Share your
          projects, get feedback, and collaborate on exciting new ideas.
        </p>
        <button
          className="bg-gradient-to-r from-[#8100ac] to-[#b80056] hover:from-[#c7005d] hover:to-[#9a03cc] text-white font-semibold py-2 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          Get Started
        </button>

        {/* Stats Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-16 mb-8 text-white">
          Community at a Glance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:m-0 px-20 gap-6">
          <StatCard icon={User2Icon} value="12.5K+" label="Active Members" />
          <StatCard icon={MessageSquareIcon} value="3.2K+" label="Discussions" />
          <StatCard icon={HeartIcon} value="850+" label="Projects Shared" />
          <StatCard icon={ZapIcon} value="1.8K+" label="Solutions Created" />
        </div>

        {/* Why Join Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-20 mb-8 text-gray-200">
          Why Join Harzino Community?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:m-0 px-20 gap-6">
          <FeatureCard
            icon={User2Icon}
            title="Connect & Network"
            description="Meet like-minded professionals and build lasting relationships in the tech community."
          />
          <FeatureCard
            icon={MessageSquareIcon}
            title="Share & Learn"
            description="Share your projects, get feedback, and learn from the experiences of others."
          />
          <FeatureCard
            icon={ZapIcon}
            title="Collaborate"
            description="Find collaborators for your next big project and contribute to open-source initiatives."
          />
        </div>
      </div>

    </div>

    <Footer />
    </div>
      {showModal && (
        
        <>
           {/* Blurred overlay */}
        <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm z-40"></div>
         {/* <div className="fixed inset-0 z-40 pointer-events-none">
            <div className="w-full h-full bg-black bg-opacity-60 backdrop-blur-sm"></div>
          </div> */}
        {/* Centered modal */}
        <div className="fixed inset-0 flex items-start justify-center z-50 px-10 py-20 p-2 ">
          <div className="bg-[#0a0a0a] rounded-2xl shadow-2xl p-6 relative w-full max-w-md">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-100">
              Join Our Community
            </h2>
            <form className="space-y-2">
              <div>
                <label className="block text-sm font-small text-gray-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded-lg bg-[#252525] text-white text-sm border border-[#474747] focus:ring focus:ring-[#B918EE] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-small text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full p-2 rounded-lg bg-[#252525] text-white text-sm border border-[#474747] focus:ring focus:ring-[#B918EE] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-small text-gray-300 mb-1">
                  Your Expertise
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded-lg bg-[#252525] text-white text-sm border border-[#474747] focus:ring focus:ring-[#B918EE] focus:border-transparent"
                  placeholder="e.g.,React Developer, UI Designer"
                />
              </div>
              <div>
                <label className="block text-sm font-small text-gray-300 mb-1">
                  Interests
                </label>
                <input
                  type="text"
                  className="w-full p-2 h-24 rounded-lg bg-[#252525] text-white text-sm border border-[#474747] focus:ring focus:ring-[#B918EE] focus:border-transparent"
                  placeholder="What are you interested in learning and discussing?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#c4035d] to-[#a305d8] hover:from-[#FF0077] hover:to-[#B918EE] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg mt-4"
              >
                Join Community
              </button>
            </form>
          </div>
        </div>
        </>
      )}
    </>
  );
};

export default Community;