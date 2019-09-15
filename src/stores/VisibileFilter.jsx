import React, { useReducer } from 'react'
import visibileFilterReducer from '../reducers/visibilityFilter.js'

export const VisibileFilterContext = React.createContext()

const VisibileFilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(visibileFilterReducer, 'SHOW_ALL')

  return (
    <VisibileFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </VisibileFilterContext.Provider>
  )
}

export default VisibileFilterProvider
