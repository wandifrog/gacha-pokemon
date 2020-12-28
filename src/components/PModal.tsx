import React from 'react'
import styled from '@emotion/styled'
import useTheme from '../hooks/Theme.hook'

type PModalProps = {
  children: React.ReactNode
  visible: boolean
}
type PokemonModalProps = {
  backgroundColor: string
}

/**
 * Pokemon modal component.
 * @example
 * <PModal>
 *   <div>Hello</div>
 *   <div>wWrld</div>
 * </PModal>
 */
const PModal = ({
  children,
  visible = false
}: PModalProps): JSX.Element | null => {
  const colors = useTheme()

  return visible ? (
    <PokemonModal backgroundColor={colors.backgroundTwo}>
      {children}
    </PokemonModal>
  ) : null
}

const PokemonModal = styled.div<PokemonModalProps>`
  background-color: ${(props) => props.backgroundColor};
  height: auto;
  left: 62.5px;
  margin-top: 65px;
  padding: 10px;
  position: absolute;
  width: 250px;
`

export default PModal
