import React from 'react'

const Circle = ({ imageUrl = "/images/jacket.jpg", title = "", link = "#" }) => {
  return (
    <a 
      href={link}
      className="group block"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-full pt-[100%] rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gray-100">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              onError={(e) => {
                e.target.src = '/images/fallback.jpg';
              }}
            />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 text-center transition-colors duration-300 group-hover:text-gray-600">
          {title}
        </h3>
      </div>
    </a>
  )
}

export default Circle