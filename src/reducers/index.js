import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter.js'
import todos from './todos.js'

export default combineReducers({
  todos,
  visibilityFilter,
})
