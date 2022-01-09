import React from 'react'
import styled from '@emotion/styled'
import {fontFamily, fontSize} from '../constants/Fonts.constant'
import useApp from '../hooks/App.hook'
import useTranslation from '../hooks/Translation.hook'
import HStack from '../components/HStack'
import Text from '../components/Text'

const Home = (): JSX.Element => {
  const [state, dispatch] = useApp()
  const {t, language} = useTranslation()

  const [playMusic, setPlayMusic] = React.useState(true)

  const _changeTheme = () => {
    dispatch({type: 'CHANGE_THEME'})
  }

  const _changeLanguage = () => {
    dispatch({type: 'CHANGE_LANGUAGE'})
  }

  const _goToTokopedia = () => {
    window.open('https://www.tokopedia.com/', '_blank')
  }

  const _goToGithub = () => {
    window.open('https://github.com/wandifrog', '_blank')
  }

  const _goToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/wandi-wandi/', '_blank')
  }

  const _playMusic = () => {
    try {
      if (playMusic) {
        player.playVideo()
        player.unMute()
      } else 
        player.pauseVideo()
      
    } catch (error) {
      // for passing testing
    }
    setPlayMusic(!playMusic)
  }

  return (
    <React.Fragment>
      <Content>
        <Text top="60px" size={fontSize.normal} center
          onClick={() => _changeLanguage()}>
          {t.home.bilingualButton}
          <Text left="5px" size={fontSize.small} span font={fontFamily.pokemonSolid}>
            {language === 'id' ? 'English' : 'Bahasa'}
          </Text>
        </Text>
        <Text top="30px" size={fontSize.normal} center
          onClick={() => _changeTheme()}>
          {t.home.themeButton}
          <Text left="5px" size={fontSize.small} span font={fontFamily.pokemonSolid}>
            {state.darkMode ? t.home.lightTheme : t.home.darkTheme}
          </Text>
        </Text>
        <Text top="30px" size={fontSize.normal} center
          onClick={() => _playMusic()}>
          {t.home.musicButton}
          <Text left="5px" size={fontSize.small} span font={fontFamily.pokemonSolid}>
            {playMusic ? t.home.playMusic : t.home.pauseMusic}
          </Text>
        </Text>
        <BottomInformation>
          <HStack bottom="5px" justify="center" align="center">
            <Text size={fontSize.small} onClick={() => _goToGithub()}>Github</Text>
            <Text right="4px" left="4px">|</Text>
            <Text size={fontSize.small} onClick={() => _goToLinkedIn()}>LinkedIn</Text>
          </HStack>
          <Text bold italic center onClick={() => _goToTokopedia()}>#MulaiAjaDulu</Text>
        </BottomInformation>
      </Content>
    </React.Fragment>
  )
}

const Content = styled.div`
  height: calc(100% - 135px);
  padding-top: 50px;
  position: relative;
  width: 100%;
`
const BottomInformation = styled.div`
  bottom: 20px;
  position: absolute;
  width: 100%;
`

export default Home
