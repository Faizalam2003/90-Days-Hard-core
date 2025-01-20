

import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(10);
    const[message, setMessage] = useState('');
    function increment(){
        setCount(count + 1);
    }
    function decrement(){

        setCount(count - 1);
        if(count -1 ===0){
            setMessage('Count is 0');
            
        }
    }
    function reset(){
        setCount(0);
        setMessage('');
    }
  return (
   <>
    <div>Counter : {count}</div>
    <p>{message}</p>
    <button className='border border-black mt-3 ml-5' onClick={increment} >Increment</button>
    <br />
    <button  className='border border-black mt-3 ml-5' onClick={decrement} >Decrement</button>
    {/* adding the reset button  */}
    <br />
    <button className='ml-5 mt-3 border border-black' onClick={reset}>Reset</button>
    </>
  )
}

export default Counter