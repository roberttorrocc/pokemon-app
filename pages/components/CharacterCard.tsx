import {Character} from 'modelos/character'

type CharacterCardProps={
    character: Character
}

function CharacterCard({character}:CharacterCardProps){
    return(<div className='bg-cyan-400 text-white p-4 rounded-md w-fit'>
        <h1>{character.name}</h1>
        <img src = {character.image}/>
      </div>)

}

export default CharacterCard;