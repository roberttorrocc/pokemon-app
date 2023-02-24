import {ICharacter} from '@/components/models/ICharacter'

export function CharacterCard({character}:{character: ICharacter}){
    return(<div className='bg-cyan-400 text-white p-4 rounded-md w-fit'>
        <h1>{character.name}</h1>
        <img src = {character.image}/>
      </div>)

}

