import React from "react"
import { Todo } from "../types/todo"

interface TodoItemProps {
    todo: Todo;
    onTodoClick: (id: number, completed: boolean) => void;
    onDeleteClick: (id: number) => void;
}

const TodoItem = ({todo , onTodoClick ,onDeleteClick}: TodoItemProps) => {
  return (
   <div>
    <label className="flex items-center gap-2 border rounded-md border-gray-500 bg-white hover:bg-slate-50 p-3"
    >
        <input type="checkbox"  className="scale-125" 
        checked={todo.completed} onChange={(e) => onTodoClick(todo.id, e.target.checked)}/>
        <span className={todo.completed ?"line-through text-gray-400":""}>
            {todo.title}
        </span>
        <div><button className="flex items-center gap-2 border rounded-2xl ml-5 border-gray-900 bg-white hover:bg-slate-100 p-2" onClick={() => onDeleteClick(todo.id)}>Delete</button></div>
    </label>
   </div>
  )
}


export default TodoItem