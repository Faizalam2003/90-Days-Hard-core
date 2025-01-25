import React from 'react'
import Circle from './componets/Circle'
import Banner from './componets/Banner';
import Card from './componets/Card';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';

const App = () => {
  const items = [
    {
      imageUrl: "/images/jacket.jpg",
      title: "Jacket Collection",
      link: "#"
    }
    // Add more items here when needed
  ];

  return (
    <div className="container ">
       <div>
       <Banner />
       <div>
        <Card/>
      </div>
       </div>
      
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8 mt-5'>
        {items.map((item, index) => (
          <div key={index} className="w-full max-w-[250px] mx-auto">
            <Circle 
              imageUrl={item.imageUrl} 
              title={item.title}
              link={item.link}
            />
          </div>
        ))}
      </div>

      {/* Cart Page */}
      <Cart />

      {/* login page */}
      <Login/>
      {/* signup page */}
      <SignUp/>
       
      
     
    </div>
  )
}

export default App