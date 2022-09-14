import React, { useEffect, useState } from "react";
import "./pokemon.css";
import { Detail } from "../Interface";

interface props {
   name: string;
   id: number;
   image: string;
   abilities:
      | {
           name: string;
           ability: string;
        }[]
      | undefined;
   detail: Detail;
   setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonList: React.FC<props> = (props) => {
   const { name, id, image, abilities, detail, setDetail } = props;
   const [isSelected, setSelected] = useState(false);

   useEffect(() => {
      setSelected(id === detail?.id);
   }, [detail]);

   const closeHandler = () => {
      setDetail({
         id: 0,
         isOpened: false,
      });
   };
   return (
      <div className="">
         {isSelected ? (
            <section className="pokemon-list-detailed">
               <div className="detail-container">
                  <p className="detail-close" onClick={closeHandler}>
                     &times;
                  </p>
                  <div className="detail-info">
                     <img className="detail-img" src={image} alt={name}></img>
                     <p className="detail-name">{name}</p>
                  </div>
                  <div className="detail-skill">
                     <p className="detail-ability">Abilities: </p>
                     {abilities?.map((item: any) => {
                        return <div className="">{item.ability.name}</div>;
                     })}
                  </div>
               </div>
            </section>
         ) : (
            <section className="pokemon-list-container">
               <p className="pokemon-name">{name}</p>
               <img className="img" src={image} alt={name} />
            </section>
         )}
      </div>
   );
};

export default PokemonList;
