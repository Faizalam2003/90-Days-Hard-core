import React  ,{useState , useEffect}from 'react'
import { dummyData } from './data/todos'
import TodoItem from './component/TodoItem'

const App = () => {
  const [todos, setTodos] = useState(()=>{
       // Check localStorage for saved todos, fallback to dummyData if not found
       const storedTodos = localStorage.getItem("todos");
       return storedTodos ? JSON.parse(storedTodos) : dummyData;
     
  });
  const [value, setValue] = useState('');



    // Save todos to local storage whenever they change
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  
   

  function setTodoCompleted(id, completed){
    console.log(id, completed)
    setTodos(prevTodos => prevTodos.map(todo=>(
      todo.id === id ? {...todo, completed} : todo
    )))
  }



  function addTask(){
    if(value.trim() !== ""){
      setTodos(prevTodos => prevTodos.concat({id: prevTodos.length + 1, title: value, completed: false}))
      setValue("")
    }
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
  return (
   <main className='py-10 h-screen space-y-5 '>
    <h2 className='text-bold text-3xl text-center'>Your Todos</h2>
    <div><input type="text" placeholder='Add a new todo' className='flex items-center gap-2 border rounded-md border-gray-500 bg-white hover:bg-slate-50 p-3 ml-14' onChange={(e) => setValue(e.target.value)} value={value} /></div>
    <div><button className='flex items-center gap-2 border rounded-md border-gray-500 bg-white hover:bg-slate-50 p-3 ml-14' onClick={addTask}>Add Todo</button></div>
    <div className='max-w-lg mx-auto bg-slate-100 rounded-md p-5'>
      <div className='space-y-2'>
        {/* render the todos */}
        {todos.map((todo) => (
         <TodoItem todo={todo} key={todo.id} onTodoClick={setTodoCompleted} onDeleteClick={deleteTodo}/>
        ))}
      </div>
    </div>
   </main>
  )
}

export default App