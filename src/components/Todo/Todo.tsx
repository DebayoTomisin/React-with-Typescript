import React, { useState } from 'react'

type formElem = React.FormEvent<HTMLFormElement> // type references another type but interfaces are used to create a completely new type.

interface ITodo {
  text: string,
  complete: boolean
}

function Todo(){
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])  

  const handleSubmit = (e: formElem ): void => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text:string) => {
    const newTodo: ITodo[] = [...todos, {text, complete: false}]
    setTodos(newTodo)
  }

  return(
    <div>
      <h1>This is a Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} required/>
        <button>Add Todo</button>
      </form>
    </div>
  )
}

export default Todo
