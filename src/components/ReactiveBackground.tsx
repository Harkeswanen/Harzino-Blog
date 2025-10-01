
const ReactiveBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Subtle floating shapes (optional) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-pink-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Foreground content (signup form) */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ReactiveBackground;
