import React, { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(0);
    
  return (
   <>
       <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <br />
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
   </>
  )
}

export default State