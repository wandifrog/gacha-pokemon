import React from 'react'
import {Link, useParams} from 'react-router-dom'
import styled from '@emotion/styled'
import {fontFamily, fontSize} from '../constants/Fonts.constant'
import {images} from '../constants/Images.constant'
import {padding} from '../constants/Metrics.constant'
import {gacha, capitalizeEveryWord} from '../functions/Common.function'
import useApp from '../hooks/App.hook'
import useTheme from '../hooks/Theme.hook'
import useTranslation from '../hooks/Translation.hook'
import {getPokemon} from '../queries/Pokemon.query'
import HStack from '../components/HStack'
import PModal from '../components/PModal'
import PPokeBall from '../components/PPokeBall'
import Text from '../components/Text'

type PokemonName = {
  pokemonName: string
}

type PokemonDetails = {
  abilities: string[]
  height: number | string
  image: string | undefined
  name: string
  types: string[]
  weight: number | string
}

const PokemonDetail = (): JSX.Element => {
  const [state, dispatch] = useApp()
  const {pokemonName}: PokemonName = useParams()
  const {t} = useTranslation()
  const colors = useTheme()

  const [gachaLoading, setGachaLoading] = React.useState(false)
  const [gachaSuccess, setGachaSuccess] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)
  const [pokemonOwned, setPokemonOwned] = React.useState(0)
  const [pokemonDetails, setPokemonDetails] = React.useState<PokemonDetails>({
    abilities: [],
    height: '',
    image: undefined,
    name: '',
    types: [],
    weight: '',
  })

  React.useEffect(() => {
    _getPokemon()
    
    const pokemonOwnedDb = database.ref(`pokemonOwned/${pokemonName}`)
    pokemonOwnedDb.on('value', (snapshot: { val: () => number }) => {
      const newPokemonOwned = snapshot.val() || 0
      setPokemonOwned(newPokemonOwned)
    })

  }, [])

  async function _getPokemon() {
    try {
      const response = await getPokemon(pokemonName)
      const pokemon = response.data.pokemon
      const newPokemonDetails = {
        abilities: pokemon.abilities.map(({ability}) => capitalizeEveryWord(ability.name)),
        height: pokemon.height,
        image: pokemon.sprites.front_default,
        name: capitalizeEveryWord(pokemon.name),
        types: pokemon.types.map(({type}) => capitalizeEveryWord(type.name)),
        weight: pokemon.weight,
      }
      setPokemonDetails(newPokemonDetails)

    } catch (error) {
      alert(t.global.errorSystem)
    }
  }

  function _gacha() {
    const gachaResult = gacha()
    setShowModal(true)
    setGachaLoading(true)
    setTimeout(() => {
      setGachaLoading(false)
      if (gachaResult) 
        setGachaSuccess(true)
      else 
        setGachaSuccess(false)
      
    }, 4000)
  }

  const _onKeyEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') 
      _submitPokemonName()
    
  }

  const _submitPokemonName = () => {
    const pokemonNameInput = document.getElementById('pokemon-name-input') as HTMLInputElement
    const newMyPokemonList = [...state.myPokemonList]
    if (pokemonNameInput.value === '') return alert(t.pokemonDetail.inputValidation)
    const pokemon: MyPokemon = {
      date: new Date(),
      givenName: pokemonNameInput.value,
      image: pokemonDetails.image,
      name: pokemonDetails.name,
    }

    newMyPokemonList.push(pokemon)
    dispatch({type: 'UPDATE_MY_POKEMON_LIST', data: newMyPokemonList})

    const pokemonOwnedDb = database.ref(`pokemonOwned/${pokemonName}`)
    pokemonOwnedDb.set(pokemonOwned + 1)

    setShowModal(false)
  }

  const renderGachaLoading = (
    <React.Fragment>
      <PPokeBall />
      <Text top="15px" bottom="45px" center>{t.pokemonDetail.pleaseWait}</Text>
    </React.Fragment>
  )

  const renderSuccessGacha = (
    <React.Fragment>
      <GachaImage src={images.successGacha} />
      <Text top="10px" bottom="10px" size={fontSize.large} center bold>GOTCHA!</Text>
      <PokemonNameInput placeholder={t.pokemonDetail.inputPlaceholder} color={colors.text}
        onKeyUp={(event) => _onKeyEnter(event)} id="pokemon-name-input" />
      <HStack top="30px" padding="0 10px" justify="space-between">
        <Text font={fontFamily.pokemonSolid} center
          onClick={() => setShowModal(false)}>{t.pokemonDetail.close}</Text>
        <Text font={fontFamily.pokemonSolid} center
          onClick={() => _submitPokemonName()}>{t.pokemonDetail.enter}</Text>
      </HStack>
    </React.Fragment >
  )

  const renderFailedGacha = (
    <React.Fragment>
      <GachaImage src={images.failedGacha} />
      <Text top="10px" bottom="10px" size={fontSize.large} center>T.T {t.pokemonDetail.failedToCatch} {pokemonDetails.name}</Text>
      <HStack top="30px" padding="0 10px" justify="space-between">
        <Text font={fontFamily.pokemonSolid} center
          onClick={() => setShowModal(false)}>{t.pokemonDetail.close}</Text>
        <Text font={fontFamily.pokemonSolid} center
          onClick={() => _gacha()}>{t.pokemonDetail.tryAgain}</Text>
      </HStack>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <PModal visible={showModal}>
        {
          gachaLoading
            ? renderGachaLoading
            : gachaSuccess
              ? renderSuccessGacha
              : renderFailedGacha
        }
      </PModal>
      <HStack justify="center" height="225px">
        <PokemonImage src={pokemonDetails.image} />
      </HStack>
      <Content>
        <HStack justify="space-between">
          <Link to="/pokemon">
            <Text size={fontSize.large} font={fontFamily.pokemonSolid}>{t.pokemonDetail.goBack}</Text>
          </Link>
          <Text size={fontSize.large} font={fontFamily.pokemonSolid}
            onClick={() => _gacha()}>Gacha</Text>
        </HStack>
        <Text top="20px" size={fontSize.large} center>{pokemonDetails.name}</Text>
        <Text top="10px" center>
          {t.pokemonDetail.owned}:
          <Text left="5px" span={true}>{pokemonOwned}</Text>
        </Text>
        <Text top="10px" center>
          {t.pokemonDetail.types}:
          <Text left="5px" span={true}>{pokemonDetails.types.join(', ')}</Text>
        </Text>
        <Text top="10px" center>
          {t.pokemonDetail.ability}:
          <Text left="5px" span={true}>{pokemonDetails.abilities.join(', ')}</Text>
        </Text>
        <Text top="10px" center>
          {t.pokemonDetail.height}:
          <Text left="5px" span={true}>{pokemonDetails.height}</Text>
        </Text>
        <Text top="10px" center>
          {t.pokemonDetail.weight}:
          <Text left="5px" span={true}>{pokemonDetails.weight}</Text>
        </Text>
      </Content>
    </React.Fragment>
  )
}

const PokemonImage = styled.img`
  height: auto;
  width: 60%;
`
const GachaImage = styled.img`
  width: 100%;
  height: auto;
  display: flex;
`
const PokemonNameInput = styled.input`
  background: transparent;
  display: flex;
  height: 30px;
  margin: 0 auto;
  padding: 0 10px;
  width: 100%;
  text-align: center;
  color: ${(props) => props.color};
  outline: none;
  
  &::placeholder {
    color: ${(props) => props.color};
    font-weight: bold;
  }
`
const Content = styled.div`
  padding: ${padding.content};
`

export default PokemonDetail
