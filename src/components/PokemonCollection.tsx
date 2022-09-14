import React, { Fragment } from "react";
import { Detail, pkDetail } from "../Interface";
import PokemonList from "./PokemonList";
import "./pokemon.css";
//Props la 1 Array cac thong tin chi tiet ve nhung pokemons
interface props {
   pokemons: pkDetail[];
   detail: Detail;
   setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCollection: React.FC<props> = (props) => {
   const { pokemons, detail, setDetail } = props;
   const selectHandler = (id: number) => {
      if (!detail.isOpened) {
         setDetail({
            id: id,
            isOpened: true,
         });
      }
   };
   return (
      <section
         className={
            detail.isOpened
               ? "collection-container-active"
               : "collection-container"
         }
      >
         {detail.isOpened ? (
            <div className="overlay"></div>
         ) : (
            <div className=""></div>
         )}
         {pokemons.map((item) => {
            return (
               <div onClick={() => selectHandler(item.id)}>
                  <PokemonList
                     key={item.id}
                     name={item.name}
                     id={item.id}
                     image={item.sprites.front_default}
                     abilities={item.abilities}
                     detail={detail}
                     setDetail={setDetail}
                  />
               </div>
            );
         })}
      </section>
   );
};

export default PokemonCollection;
