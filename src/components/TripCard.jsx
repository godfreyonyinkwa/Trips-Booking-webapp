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

export default TripCard;