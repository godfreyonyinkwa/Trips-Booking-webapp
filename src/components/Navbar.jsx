function Navbar() {
  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center text-3xl shadow">
            🦒
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Tembea Kenya</h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#destinations" className="hover:text-orange-600 transition-colors">Destinations</a>
          <a href="#packages" className="hover:text-orange-600 transition-colors">Packages</a>
          <a href="#experiences" className="hover:text-orange-600 transition-colors">Experiences</a>
          <a href="#about" className="hover:text-orange-600 transition-colors">About</a>
        </div>

        <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 rounded-2xl font-semibold transition-all text-sm uppercase tracking-wider">
          Book Safari
        </button>
      </div>
    </nav>
  );
}

export default Navbar;