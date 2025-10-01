import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const AuthForm: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#0f0f0f] text-white">
      

      <div className="flex flex-1">
        

        {/* Auth Form Card */}
        <div className="flex flex-1 items-center justify-center p-6">
          <div className="w-full max-w-md bg-zinc-900 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-700">
            <h2 className="text-center text-3xl font-bold mb-6">
              {isSignup ? "Create Account" : "Welcome Back"}
            </h2>

            <form className="space-y-5">
              {isSignup && (
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-black rounded-lg border border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-black rounded-lg border border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-black rounded-lg border border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              {isSignup && (
                <div>
                  <label className="block text-sm font-medium mb-1">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-black rounded-lg border border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-pink-600 hover:bg-pink-800 rounded-lg font-semibold text-white transition"
              >
                {isSignup ? "Sign Up" : "Sign In"}
              </button>
            </form>

            <div className="my-6 flex items-center">
              <hr className="flex-1 border-gray-600" />
              <span className="px-4 text-gray-400">OR</span>
              <hr className="flex-1 border-gray-600" />
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-3 w-full py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>

            <p className="mt-6 text-center text-sm text-gray-400">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                onClick={() => setIsSignup(!isSignup)}
                className="text-indigo-400 hover:underline"
              >
                {isSignup ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Harzino. All rights reserved.
      </footer>
    </div>
  );
};

export default AuthForm;
