import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CookiePolicy: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-black text-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 mt-6 text-[#dc0073]">
          Cookie Policy
        </h1>
        
        <div className="space-y-12">
          {/* Effective Date Section */}
          <div>
            <p className="text-zinc-400">
              <span className="font-semibold text-zinc-300">Effective Date:</span> January 1, 2025
            </p>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              This Cookie Policy explains how Harzino, operated by Harkeswaren, uses cookies and similar technologies when you
              visit our website. This policy helps you understand what cookies are, how we use them, and what choices you have
              regarding their use.
            </p>
          </div>

          {/* What Are Cookies Section */}
          <div>
            <h2 className="text-xl sm:text-lg font-bold mb-4 text-white">
              What Are Cookies
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are
              widely used to make websites work more efficiently and to provide information to website owners about user
              behavior and preferences.
            </p>
          </div>

          {/* How We Use Cookies Section */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-white">
              How We Use Cookies
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Harkeswaren uses cookies on the Harzino platform for various purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-4 text-zinc-300 ml-4">
              <li>
                <span className="font-semibold text-white">
                  Essential Cookies:
                </span> These cookies are necessary for the website to function properly and cannot be disabled.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Performance Cookies:
                </span> These help us understand how visitors interact with our website by collecting anonymous information.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Functionality Cookies:
                </span> These enable the website to provide enhanced functionality and personalization.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Analytics Cookies:
                </span> These help us analyze website traffic and improve our services.
              </li>
            </ul>
          </div>

          {/* Types of Cookies We Use Section */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-white">
              Types of Cookies We Use
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              **Session Cookies:** These are temporary cookies that expire when you close your browser. They are used to remember your actions during a single browsing session.
            </p>
            <p className="text-zinc-300 leading-relaxed mt-4">
              **Persistent Cookies:** These cookies remain on your device for a set period or until you delete them. They are used to remember your preferences or actions across multiple site visits.
            </p>
            <p className="text-zinc-300 leading-relaxed mt-4">
            **Third-Party Cookies:** Some cookies are set by third-party services that appear on our pages, such as analytics providers or social media platforms.
            </p>
          </div>

          {/* Your Choices Section */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-white">
              Managing your Cookie Preferences
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              You have the right to choose whether to accept or reject cookies. You can manage your cookie preferences through your browser settings. Most browsers allow you to:
            </p>
            <ul className='list-disc list-inside space-y-4 text-zinc-300 ml-4 mb-3'>
                <li className="text-zinc-300 leading-relaxed mt-4">
                    View what cookies are stored on your device
                </li>
                <li className="text-zinc-300 leading-relaxed mt-4">
                    Delete cookies individually or all at once
                </li>
                <li className="text-zinc-300 leading-relaxed mt-4">
                    Block cookies from specific websites
                </li>
                <li className="text-zinc-300 leading-relaxed mt-4">
                    Block all cookies from being set
                </li>
                <li className="text-zinc-300 leading-relaxed mt-4">
                    Delete all cookies when you close your browser
                </li>
            </ul>
            <p className="text-zinc-300 leading-relaxed">
                Please note that if you choose to disable cookies, some features of our website may not function properly.
            </p>
          </div>

          <div >
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-white">Third-Party Services</h2>
            <p className="text-zinc-300 text-sm leading-relaxed">
              We may use third-party services, such as Google Analytics, to help us analyze how users use our website. These services may set their own cookies on your device. We do not control these cookies, and we recommend reviewing the privacy policies of these third-party services for more information.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-white">Changes to This Cookie Policy</h2>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Harkeswanen may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated policy on this page with a revised effective date.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-white">Contact Us</h2>
            <p className="text-zinc-300 text-sm leading-relaxed">
              If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us at
                <ul className='list-inside space-y-1 text-zinc-300 ml-4 mt-3 mb-3'>
                    <li className="text-zinc-300 leading-relaxed">
                        Email: support@harzino.com
                    </li>
                    <li className="text-zinc-300 leading-relaxed">
                        Company: Harkeswanen
                    </li>
                    <li className="text-zinc-300 leading-relaxed ">
                        Platform: Harzino
                    </li>
                    <li className="text-zinc-300 leading-relaxed">
                        Location: Vadodara, Gujarat, India
                    </li>
                </ul>
            </p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-white">Your Consent</h2>
            <p className="text-zinc-300 text-sm leading-relaxed">
              By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy. If you do not agree to our use of cookies, you should adjust your browser settings accordingly or refrain from using our website.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default CookiePolicy;