import React, { useEffect, useRef } from "react";

const ReactiveBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30; 
      const y = (e.clientY / innerHeight - 0.5) * 30;
      parallaxRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const starDots = Array.from({ length: 100 }).map((_, i) => {
    const top = `${Math.random() * 100}%`;
    const left = `${Math.random() * 100}%`;
    const size = `${Math.random() * 3 + 1}px`;
    const delay = `${Math.random() * 5}s`; 
    const colors = ["#ffffff", "#c4b5fd", "#a78bfa", "#f472b6", "#93c5fd"]; 
    const color = colors[Math.floor(Math.random() * colors.length)];
    return (
      <div
        key={i}
        className="star-dot"
        style={{
          top,
          left,
          width: size,
          height: size,
          background: color,
          filter: `drop-shadow(0 0 6px ${color})`,
          animationDelay: delay,
        }}
      />
    );
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Starfield */}
      <div ref={parallaxRef} className="absolute inset-0">
        {starDots}
      </div>

      {/* Foreground (signup/signin form) */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ReactiveBackground;
