import React from 'react'
import styled from '@emotion/styled'
import {fontFamily} from '../constants/Fonts.constant'
import useApp from '../hooks/App.hook'
import useTheme from '../hooks/Theme.hook'

const outsideState = {
  activeIndex: -3,
}

/**
 * Pokemon header component.
 * @example
 * <PFancyHeader />
 */
const PFancyHeader = (): JSX.Element => {
  const [state] = useApp()
  const colors = useTheme()
  
  const [activeIndex, setActiveIndex] = React.useState(-1)
  
  React.useEffect(() => {
    setInterval(() => {
      if (outsideState.activeIndex < 6) {
        outsideState.activeIndex++
        setActiveIndex(outsideState.activeIndex)
      } else {
        outsideState.activeIndex = -3
        setActiveIndex(outsideState.activeIndex)
      }
    }, 500)
  }, [])

  return (
    <FancyHeader color={colors.text} darkMode={state.darkMode}>
      <span style={{color: ([-3, -1, 0].includes(activeIndex)) ? colors.fancyHeaderActive : colors.fancyHeader}}>P</span>
      <span style={{color: ([-3, -1, 1].includes(activeIndex)) ? colors.fancyHeaderActive : colors.fancyHeader}}>O</span>
      <span style={{color: ([-3, -1, 2].includes(activeIndex)) ? colors.fancyHeaderActive : colors.fancyHeader}}>K</span>
      <span style={{color: ([-3, -1, 3].includes(activeIndex)) ? colors.fancyHeaderActive : colors.fancyHeader}}>E</span>
      <span style={{color: ([-3, -1, 4].includes(activeIndex)) ? colors.fancyHeaderActive : colors.fancyHeader}}>M</span>
      <span style={{color: ([-3, -1, 5].includes(activeIndex)) ? colors.fancyHeaderActive : colors.fancyHeader}}>O</span>
      <span style={{color: ([-3, -1, 6].includes(activeIndex)) ? colors.fancyHeaderActive : colors.fancyHeader}}>N</span>
    </FancyHeader>
  )
}

const FancyHeader = styled.div<{ darkMode: boolean }>`
  align-items: center;
  color: ${(props) => props.color};
  display: flex;
  font-family: ${(props) => props.darkMode ? fontFamily.pokemonHollow : fontFamily.pokemonSolid};
  font-size: 30px;
  font-weight: ${(props) => props.darkMode ? 'bold' : 'normal'};
  height: 72px;
  justify-content: center;
  letter-spacing: ${(props) => props.darkMode ? '0' : '4px'};
  margin: 0;
  padding: 15px;
  text-align: center;
`

export default PFancyHeader
