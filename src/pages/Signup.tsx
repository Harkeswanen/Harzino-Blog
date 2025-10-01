import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import ReactiveBackground from "../components/ReactiveBackground";

const AuthForm: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <ReactiveBackground>
      <div className="flex flex-1 text-white items-center justify-center px-4">
      {/* Auth Form Card */}
      <div className="relative w-full max-w-md max-h-[80vh] overflow-scroll no-scrollbar rounded-2xl p-8 shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
        {/* Glow Border Effect */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-[#c4035d] to-[#a305d8] opacity-20 blur-2xl" />

        <h2 className="text-center text-4xl font-extrabold mb-8 bg-gradient-to-r from-[#c4035d] to-[#a305d8] bg-clip-text text-transparent">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>

        <form className="space-y-5">
          {isSignup && (
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-black/50 rounded-lg border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none transition"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-black/50 rounded-lg border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-black/50 rounded-lg border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none transition"
            />
          </div>

          {isSignup && (
            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-black/50 rounded-lg border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none transition"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white transition bg-gradient-to-r from-[#c4035d] to-[#a305d8] hover:from-[#ff0066] hover:to-[#b918ee] shadow-lg shadow-pink-900/30"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="flex-1 border-gray-600" />
          <span className="px-4 text-gray-400 text-sm">OR</span>
          <hr className="flex-1 border-gray-600" />
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="flex items-center justify-center gap-3 w-full py-3 bg-white/10 hover:bg-white/20 rounded-lg transition border border-gray-600"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        <p className="mt-8 text-center text-sm text-gray-400">
          {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-pink-400 hover:underline"
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
    </ReactiveBackground>
  );
};

export default AuthForm;
