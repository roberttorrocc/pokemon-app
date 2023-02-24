import {ICharacter} from 'components/models/ICharacter'

export async function fetchCharacter(): Promise<ICharacter[]>{
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    
    return data.results;
};

