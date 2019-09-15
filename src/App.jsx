import React from 'react'
import Provider from './stores'
import Footer from './components/Footer.jsx'
import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'

function App() {
  return (
    <Provider>
      <AddTodo />
      <TodoList />
      <Footer />
    </Provider>
  )
}

export default App
