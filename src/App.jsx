import { useState } from 'react';
import heroImg from './assets/hero.png';

const TripCard = ({ image, title, duration, price, rating, highlights, location }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group" 
       style={{ maxWidth: '380px' }}>
    <div className="relative h-64">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
        {duration}
      </div>
    </div>

    <div className="p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <div className="text-right">
          <span className="text-3xl font-bold text-orange-600">KSh {price}</span>
          <p className="text-xs text-gray-500">per person</p>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{location}</p>

      <div className="flex items-center gap-1 mb-4">
        {'★'.repeat(Math.floor(rating))}<span className="text-gray-400 text-sm">({rating})</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {highlights.map((item, i) => (
          <span key={i} className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>

      <button 
        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-semibold transition-all"
        style={{ boxShadow: '0 4px 15px rgba(234, 88, 12, 0.3)' }}
      >
        View Details & Book
      </button>
    </div>
  </div>
);

function App() {
  const [count, setCount] = useState(0);

  const destinations = [
    { name: "Maasai Mara", emoji: "🦒", desc: "World-famous for the Great Migration" },
    { name: "Amboseli", emoji: "🐘", desc: "Best views of Mt. Kilimanjaro" },
    { name: "Tsavo", emoji: "🌲", desc: "Red elephants & vast wilderness" },
    { name: "Lake Nakuru", emoji: "🦩", desc: "Famous for flamingos" },
  ];

  const packages = [
    {
      image: "https://i.pinimg.com/736x/d7/5a/28/d75a28409f4783d3dd7591c1ee394724.jpg",
      title: "3 Days Mara Adventure",
      duration: "3 Days",
      price: "48,500",
      rating: 4.9,
      location: "Maasai Mara National Reserve",
      highlights: ["Game Drives", "Luxury Tent", "Cultural Visit"]
    },
    {
      image: "https://i.pinimg.com/1200x/2e/d0/cd/2ed0cd4e45bba881c152575efb1ffbd1.jpg",
      title: "4 Days Amboseli Escape",
      duration: "4 Days",
      price: "65,000",
      rating: 4.8,
      location: "Amboseli National Park",
      highlights: ["Kilimanjaro View", "Elephant Safari", "Photography"]
    },
    {
      image: "https://source.unsplash.com/random/600x400/?tsavo,lion",
      title: "5 Days Tsavo Explorer",
      duration: "5 Days",
      price: "82,000",
      rating: 4.7,
      location: "Tsavo East & West",
      highlights: ["Night Game Drive", "Big 5", "Luxury Camp"]
    }
  ];

  return (
    <>
      {/* Navbar */}
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

      {/* Hero Section - More Dramatic */}
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

      {/* Destinations Grid */}
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">Popular Destinations</h2>
          <p className="text-center text-gray-600 mb-12 text-xl">Choose your African adventure</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((dest, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all group cursor-pointer">
                <div className="h-64 bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
                  {dest.emoji}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                  <p className="text-gray-600">{dest.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Featured Safari Packages</h2>
            <p className="text-xl text-gray-600">Handpicked journeys for unforgettable memories</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {packages.map((pkg, index) => (
              <TripCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

     {/* Quick Stats - Horizontal Layout */}
<div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8 text-center md:text-left">
      
      <div className="flex-1">
        <div className="text-5xl md:text-6xl font-bold mb-1">500+</div>
        <div className="text-orange-100 text-lg">Happy Adventurers</div>
      </div>

      <div className="hidden md:block w-px h-16 bg-white/30"></div>

      <div className="flex-1">
        <div className="text-5xl md:text-6xl font-bold mb-1">25</div>
        <div className="text-orange-100 text-lg">Destinations</div>
      </div>

      <div className="hidden md:block w-px h-16 bg-white/30"></div>

      <div className="flex-1">
        <div className="text-5xl md:text-6xl font-bold mb-1">98%</div>
        <div className="text-orange-100 text-lg">Return Rate</div>
      </div>

      <div className="hidden md:block w-px h-16 bg-white/30"></div>

      <div className="flex-1">
        <div className="text-5xl md:text-6xl font-bold mb-1">12+</div>
        <div className="text-orange-100 text-lg">Years of Excellence</div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default App;