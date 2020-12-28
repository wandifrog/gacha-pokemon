import styled from '@emotion/styled'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import PBottomNavigation from './components/PBottomNavigation'
import PFancyHeader from './components/PFancyHeader'
import useTheme from './hooks/Theme.hook'
import Home from './pages/Home.page'
import MyPokemonList from './pages/MyPokemonList.page'
import PokemonDetail from './pages/PokemonDetail.page'
import PokemonList from './pages/PokemonList.page'

type ContainerProps = {
  background: string
}

const AppRoutes = (): JSX.Element => {
  const colors = useTheme()

  return (
    <Router>
      <Container background={colors.background}>
        <PFancyHeader />
        <Switch>
          <Route path="/profile">
            <MyPokemonList />
          </Route>
          <Route path="/pokemon" exact>
            <PokemonList />
          </Route>
          <Route path="/pokemon/:pokemonName">
            <PokemonDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <PBottomNavigation />
      </Container>
    </Router>
  )
}

const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => props.background};
  width: 375px;
  height: 100vh;
  @media (max-width: 375px) {
    width: 100%;
  }
`

export default AppRoutes
