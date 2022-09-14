import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import PokemonCollection from './components/PokemonCollection';
import {Pokemon, Pokemons} from "./Interface"


const App:React.FC = () => {
  const [poke, setPoke] = useState<Pokemon[]>([]);//kieu du lieu cua [] la Array string
  const [next, setNext] = useState<string>("")
  useEffect(() => {
    const getPoke = async() => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      
      res.data.results.forEach(async(pokemon:Pokemons) => {
        const pok = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        setPoke(prev => [...prev, pok.data])
      }); 
      
    }
  
    getPoke();
  }, [])
  
  return (
    <div className="App">
      <div className="container">
        <div className="pokemon-header">Pokemon</div>
        <PokemonCollection pokemons={poke}/>
      </div>
      
    </div>
  );
}

export default App;
