import React, { useContext } from 'react'
import { TodosContext } from '../stores/Todos.jsx'
import { addTodo } from '../actions'

const AddTodo = () => {
  let input
  const { dispatch } = useContext(TodosContext)

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
