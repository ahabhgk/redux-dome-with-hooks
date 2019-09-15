import React, { useContext } from 'react'
import { VisibileFilterContext } from '../stores/VisibileFilter.jsx'
import { setVisibilityFilter } from '../actions'

const Link = ({ children, filter }) => {
  const { dispatch } = useContext(VisibileFilterContext)

  return (
    <button
      onClick={() => dispatch(setVisibilityFilter(filter))}
      style={{
        marginLeft: '4px'
      }}
    >
      {children}
    </button>
  )
}

export default Link
