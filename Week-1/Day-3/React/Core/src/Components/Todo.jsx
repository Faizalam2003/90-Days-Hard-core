import React, { useState } from 'react'

const Todo = () => {

    const [todos, setTodos] = useState([])


    function addTask() {
        
    }




  return (
   <>
  

<input type="text" placeholder='Add a new task'  s onChange={(e) => setTask(e.target.value)}/>
<button onClick={addTask}>Add todo</button>

   </>
  )
}

export default Todo