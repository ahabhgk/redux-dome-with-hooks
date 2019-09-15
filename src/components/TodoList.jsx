import React, { useContext } from 'react'
import Todo from './Todo.jsx'
import { TodosContext } from '../stores/Todos.jsx'
import { VisibileFilterContext } from '../stores/VisibileFilter.jsx'
import { toggleTodo } from '../actions/index.js'

const TodoList = () => {
  const { state: todos, dispatch } = useContext(TodosContext)
  const { state: filter } = useContext(VisibileFilterContext)

  const visibileTodos = todos.filter(todo => {
    if (filter === 'SHOW_COMPLETED') {
      return todo.completed
    }
    if (filter === 'SHOW_ACTIVE') {
      return !todo.completed
    }
    return todo
  })

  return (
    <ul>
      {visibileTodos.map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo.id))} />
      ))}
    </ul>
  )
}

export default TodoList
