function LoadingScreen() {
    return (
      <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
  
        {/* Logo */}
  
        <h1 className="text-7xl font-extrabold text-blue-600 animate-pulse">
          MB
        </h1>
  
        {/* Name */}
  
        <h2 className="mt-6 text-2xl font-bold text-slate-800">
          Muhammad Basith K
        </h2>
  
        <p className="mt-2 text-slate-500">
          Loading Portfolio...
        </p>
  
        {/* Spinner */}
  
        <div className="mt-10 w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  
      </div>
    );
  }
  
  export default LoadingScreen;