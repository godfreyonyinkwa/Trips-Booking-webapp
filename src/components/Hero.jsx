import heroImg from '../assets/hero.jpg';

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Kenya Safari" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
          Experience Kenya's <span className="text-orange-400">Untamed Beauty</span>
        </h1>
        <p className="text-2xl text-gray-100 mb-10 max-w-2xl mx-auto">
          Curated safari experiences in the cradle of the wild
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-3xl p-3 shadow-2xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3">
            <input type="text" placeholder="Destination (Mara, Amboseli...)" 
                   className="flex-1 px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-orange-500" />
            <input type="date" className="px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none" />
            <input type="number" placeholder="Guests" min="1" 
                   className="w-32 px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none" />
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 rounded-2xl font-semibold text-lg transition-all">
              Find Trips
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-sm flex flex-col items-center animate-bounce">
        Scroll to explore <span className="text-2xl mt-1">↓</span>
      </div>
    </section>
  );
}

export default Hero;