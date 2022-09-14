import React from 'react'
import "./pokemon.css"

interface props {
  name: string,
  id: number,
  image: string
}

const PokemonList:React.FC<props> = (props) => {
  const {name, id, image} = props

  return (
    <div className=''>
      <section className='pokemon-list-container'>
        <p className='pokemon-name'>{name}</p>
        <img src={image} alt={name} />
      </section>
    </div>
  )
}

export default PokemonList