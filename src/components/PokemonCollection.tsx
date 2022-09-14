import React from 'react'
import {Pokemon} from "../Interface"
import PokemonList from './PokemonList'
import "./pokemon.css"
//Props la 1 Array cac thong tin chi tiet ve nhung pokemons
interface props {
  pokemons: Pokemon[]
}

const PokemonCollection:React.FC<props> = (props) => {
  const {pokemons} = props
  return (
    <div>
      <section className='collection-container'>
        {pokemons.map((item)=>{
          return(
            <div className=''>
              <PokemonList key={item.id} name={item.name} id={item.id} image = {item.sprites.front_default}/>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default PokemonCollection