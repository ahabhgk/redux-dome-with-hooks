import React from 'react'
import Footer from './components/Footer.jsx'
import AddTodo from './containers/AddTodo.jsx'
import VisibleTodoList from './containers/VisibleTodoList.js'


function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}

export default App
