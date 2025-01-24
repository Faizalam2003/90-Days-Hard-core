import React, { useState } from 'react'

const Todo = () => {

    const [todos, setTodos] = useState([])

    const [task, setTask] = useState('')
    function addTask() {
        
    }

  return (
   <>
  

<input type="text" placeholder='Add a new task'  onChange={(e) => setTask(e.target.value)}/>
<button onClick={addTask}>Add todo</button>

   </>
  )
}

export default Todo