import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PokemonCollection from "./components/PokemonCollection";
import { Pokemon, Pokemons, Detail } from "./Interface";

const App: React.FC = () => {
   const [poke, setPoke] = useState<Pokemon[]>([]); //kieu du lieu cua [] la Array string
   const [next, setNext] = useState<string>("");
   const [load, setLoad] = useState<boolean>(true);
   const [detail, setDetail] = useState<Detail>({
      id: 0,
      isOpened: false,
   });
   useEffect(() => {
      const getPoke = async () => {
         const res = await axios.get(
            "https://pokeapi.co/api/v2/pokemon?limit=21&offset=0"
         );

         res.data.results.forEach(async (pokemon: Pokemons) => {
            const pok = await axios.get(
               `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            setPoke((prev) => [...prev, pok.data]);
            setLoad(false);
         });

         //store next api url
         setNext(res.data.next);
      };

      getPoke();
   }, []);

   const loadmoreHandler = async () => {
      let res = await axios.get(next);

      setLoad(true);
      setNext(res.data.next);
      res.data.results.forEach(async (pokemon: Pokemons) => {
         const pok = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
         );
         setPoke((prev) => [...prev, pok.data]);
         setLoad(false);
      });
   };

   return (
      <div className="App">
         <div className="container">
            <div className="pokemon-header">Pokemon</div>
            <PokemonCollection
               pokemons={poke}
               detail={detail}
               setDetail={setDetail}
            />
            {!detail.isOpened && (
               <div className="btn">
                  <button onClick={loadmoreHandler}>
                     {load ? "Loading..." : "More"}
                  </button>
               </div>
            )}
         </div>
      </div>
   );
};

export default App;
