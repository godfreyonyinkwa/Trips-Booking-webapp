import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TripCard from '../components/TripCard';

function Home() {
  const [count, setCount] = useState(0); // keeping in case you need it later

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
      <Navbar />
      <Hero />

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

      {/* Quick Stats */}
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

export default Home;