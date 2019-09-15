import React, { useReducer } from 'react'
import todoReducer from '../reducers/todos.js'

export const TodosContext = React.createContext()

const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, [])

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosProvider
