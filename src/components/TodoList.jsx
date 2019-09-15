import React, { useContext } from 'react'
import Todo from './Todo.jsx'
import { TodosContext } from '../stores/Todos.jsx'
import { toggleTodo } from '../actions/index.js'

const TodoList = () => {
  const { state: todos, dispatch } = useContext(TodosContext)

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo.id))} />
      ))}
    </ul>
  )
}

export default TodoList
