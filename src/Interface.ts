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

export interface Detail {
  id: number,
  isOpened: boolean
}

export interface pkDetail extends Pokemon{
  abilities?: {
    ability: string
    name: string
  }[]
}


