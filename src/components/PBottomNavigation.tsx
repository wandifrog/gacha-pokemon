import React from 'react'
import {Link} from 'react-router-dom'
import styled from '@emotion/styled'
import useTheme from '../hooks/Theme.hook'
import useTranslation from '../hooks/Translation.hook'

type ContainerProps = {
  /**
   * Background color
   */
  background: string
}

/**
 * Pokemon bottom navigation bar component.
 * @example
 * <PBottomNavigation />
 */
const PBottomNavigation = (): JSX.Element => {
  const {language} = useTranslation()
  const colors = useTheme()

  return (
    <Container background={colors.background}>
      <NavItem color={colors.text}>
        <Link to="/">{language === 'id' ? 'Beranda' : 'Home'}</Link>
      </NavItem>
      <NavItem color={colors.text}>
        <Link to="/pokemon">{language === 'id' ? 'Daftar' : 'Lists'}</Link>
      </NavItem>
      <NavItem color={colors.text}>
        <Link to="/profile">{language === 'id' ? 'Profil' : 'Profile'}</Link>
      </NavItem>
    </Container>
  )
}

const Container = styled.div<ContainerProps>`
  align-items: center;
  background-color: ${(props) => props.background};
  border-top: 2px dotted gray;
  bottom: 0;
  display: flex;
  height: 65px;
  left: 0;
  position: absolute;
  width: 100%;
`
const NavItem = styled.div`
  color: ${(props) => props.color};
  display: flex;
  flex: 1;
  font-family: 'Pokemon Solid';
  justify-content: center;
  text-align: center;
`

export default PBottomNavigation
