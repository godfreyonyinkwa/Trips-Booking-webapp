import { useState } from 'react';
import heroImg from './assets/hero.png'; // Make sure this image exists

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              🦒
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Tembea Kenya</h1>
          </div>

          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <a href="#destinations" className="hover:text-orange-600 transition-colors">Destinations</a>
            <a href="#packages" className="hover:text-orange-600 transition-colors">Safari Packages</a>
            <a href="#experiences" className="hover:text-orange-600 transition-colors">Experiences</a>
            <a href="#about" className="hover:text-orange-600 transition-colors">About Us</a>
          </div>

          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-all">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Kenya Safari"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover the <span className="text-orange-400">Wild Heart</span> of Kenya
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Premium safari adventures, unforgettable wildlife encounters, 
            and authentic Kenyan hospitality.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-3xl p-2 shadow-2xl max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Where to? (Maasai Mara, Amboseli...)"
                className="flex-1 px-6 py-4 rounded-2xl focus:outline-none border border-gray-200"
              />
              <input
                type="date"
                className="px-6 py-4 rounded-2xl focus:outline-none border border-gray-200"
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all">
                Search Trips
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-6 text-white text-sm">
            <div>🏞️ Maasai Mara</div>
            <div>🐘 Amboseli</div>
            <div>🦒 Tsavo</div>
            <div>🌊 Diani Beach</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
          ↓ Scroll to explore
        </div>
      </section>

      {/* Quick Stats */}
      <div className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
          <div>
            <div className="text-4xl font-bold text-orange-600">500+</div>
            <div className="text-gray-600">Happy Travelers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600">25</div>
            <div className="text-gray-600">Destinations</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600">12</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Keep the counter for now (you can remove later) */}
      <div className="py-20 text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-all"
        >
          Count is {count}
        </button>
      </div>
    </>
  );
}

export default App;