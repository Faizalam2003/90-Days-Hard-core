import React from 'react'
import Circle from './componets/Circle'

const App = () => {
  const items = [
    {
      imageUrl: "/images/jacket.jpg",
      title: "Jackets",
      link: "#"
    },
    {
    //   imageUrl: "/images/tshirt.jpg",
    //   title: "T-Shirts",
    //   link: "#"
    // },
    // {
    //   imageUrl: "/images/hoodie.jpg",
    //   title: "Hoodies",
    //   link: "#"
    // },
    // {
    //   imageUrl: "/images/pants.jpg",
    //   title: "Pants",
    //   link: "#"
    }
  ];

  return (
    <div className="container mx-auto px-1 py-4 ">
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8'>
        {items.map((item, index) => (
          <div className="w-full max-w-[250px] mx-auto">
            <Circle 
              key={index} 
              imageUrl={item.imageUrl} 
              title={item.title}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App