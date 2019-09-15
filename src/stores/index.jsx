import React from 'react'
import TodosProvider from './Todos.jsx'
import VisibileFilterProvider from './VisibileFilter.jsx'

const ProvidersComposer = ({ providers, children }) => providers.reduce((Child, Parent) => (
  <Parent>{Child}</Parent>
), children)

const Provider = ({ children }) => (
  <ProvidersComposer providers={[TodosProvider, VisibileFilterProvider]}>
    {children}
  </ProvidersComposer>
)

export default Provider
