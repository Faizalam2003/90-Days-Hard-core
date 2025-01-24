import React from 'react'

const Greeting = ({ name = 'Stranger' , age = 18 }) => {
  return (
   <>
    {/* <div>Greeting {name}</div> */}
    <div> name is {name} and age is {age}</div>
   </>

  )
}

export default Greeting