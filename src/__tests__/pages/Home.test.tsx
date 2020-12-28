import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Home from '../../pages/Home.page'
import { AppDispatchContext, AppStateContext, appReducer } from '../../contexts/App.context'

type MockingProviderProps = {
  darkMode?: boolean
  language?: 'id' | 'en'
}

const MockingProvider = ({
  darkMode = true,
  language = 'id'
}: MockingProviderProps) => {

  const initialState: AppState = {
    darkMode,
    language,
    myPokemonList: []
  }

  const [state, dispatch] = React.useReducer(appReducer, initialState)

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        <Home />
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

describe('Typo Checking', () => {
  test('expect hardcode text is correct', () => {
    const { getByText } = render(<MockingProvider />)
    getByText('Github')
    getByText('LinkedIn')
    getByText('#MulaiAjaDulu')
  })

  test('expect Indonesian translation is correct (Change Language)', () => {
    const { getByText } = render(<MockingProvider language="id" />)
    getByText('Klik Saya! untuk mengubah ke')
    getByText('English')
  })

  test('expect Indonesian translation is correct (Light Mode)', () => {
    const { getByText } = render(<MockingProvider language="id" darkMode={false} />)
    getByText('Klik Saya! untuk mengubah')
    getByText('Tema Gelap')
  })

  test('expect Indonesian translation is correct (Dark Mode)', () => {
    const { getByText } = render(<MockingProvider language="id" darkMode={true} />)
    getByText('Klik Saya! untuk mengubah')
    getByText('Tema Terang')
  })

  test('expect Indonesian translation is correct (Play Music)', () => {
    const { getByText } = render(<MockingProvider language="id" />)
    getByText('Klik Saya! untuk')
    getByText('Memutar Musik')
  })

  test('expect Indonesian translation is correct (Pause Music)', () => {
    const { getByText } = render(<MockingProvider language="id" />)
    fireEvent.click(getByText('Memutar Musik'))
    getByText('Klik Saya! untuk')
    getByText('Jeda Musik')
  })

  test('expect English translation is correct (Change Language)', () => {
    const { getByText, getAllByText } = render(<MockingProvider language="en" />)
    getAllByText('Click Me! to change')
    getByText('Bahasa')
  })

  test('expect English translation is correct (Light Mode)', () => {
    const { getByText } = render(<MockingProvider language="en" darkMode={false} />)
    getByText('Dark Theme')
  })

  test('expect English translation is correct (Dark Mode)', () => {
    const { getByText } = render(<MockingProvider language="en" darkMode={true} />)
    getByText('Light Theme')
  })

  test('expect English translation is correct (Play Music)', () => {
    const { getByText } = render(<MockingProvider language="en" />)
    getByText('Click Me! to')
    getByText('Play Music')
  })

  test('expect English translation is correct (Pause Music)', () => {
    const { getByText } = render(<MockingProvider language="en" />)
    fireEvent.click(getByText('Play Music'))
    getByText('Click Me! to')
    getByText('Pause Music')
  })

})
