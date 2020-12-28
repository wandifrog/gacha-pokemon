import React from 'react'
import AppRoutes from './App.routes'
import { AppProvider } from './contexts/App.context'

const App = (): JSX.Element => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App
