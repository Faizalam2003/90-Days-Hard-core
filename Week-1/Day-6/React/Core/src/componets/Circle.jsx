import React from 'react'

const Circle = ({ 
  imageUrl, 
  title = "", 
  link = "#",
  width = "100px",  
  height = "100px",
  borderWidth = "2px",
  borderColor = "#964B00"  // default brown border
}) => {
  return (
    <a 
      href={link}
      className="group block"
    >
      <div className="flex flex-col items-center space-y-4">
        <div 
          style={{ 
            width: width,
            height: height,
            position: 'relative',
            border: `${borderWidth} solid ${borderColor}`,
          }}
          className="rounded-full overflow-hidden"
        >
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-110"
            onError={(e) => {
              e.target.src = '/images/fallback.jpg';
            }}
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 text-center transition-colors duration-300 group-hover:text-gray-600">
          {title}
        </h3>
      </div>
    </a>
  )
}

export default Circle