import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { capitalizeEveryWord } from '../functions/Common.function'
import useTheme from '../hooks/Theme.hook'

type PCardProps = {
  /**
   * Pokemon data
   */
  pokemon: {
    image: string
    name: string
  }
}

/**
 * Pokemon card component.
 * @example
 * <PCard pokemon={{ name: 'Pikachu', image: 'url image' }} />
 */
const PCard = ({
  pokemon
}: PCardProps): JSX.Element => {
  
  const colors = useTheme()

  return (
    <Link to={'/pokemon/' + pokemon.name}>
      <PokemonCard>
        <PokemonImage src={pokemon.image} />
        <PokemonName color={colors.text}>{capitalizeEveryWord(pokemon.name)}</PokemonName>
      </PokemonCard>
    </Link>
  )
}

const PokemonCard = styled.div`
  border-radius: 5px;
  border: 1px solid gray;
  height: 200px;
  width: 150px;
`
const PokemonImage = styled.img`
  height: auto;
  width: 100%;
`
const PokemonName = styled.div`
  color: ${(props) => props.color};
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`

export default PCard
