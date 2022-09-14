//Khai bao interface de khi nao "." thi no hien ra
export interface Pokemons {
  name:string;
  url:string;
}

export interface Pokemon {
  id: number,
  name: string,
  sprites: {
    front_default: string
  }
}


