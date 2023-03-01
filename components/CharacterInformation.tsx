import { ICharacter } from "@/components/models/ICharacter";
import {IEpisode} from 'components/models/IEpisode'
import {fetchEpisode} from 'components/fetchs/fetchEpisodes'


/*async function asd(params:string ) {
  return await fetchEpisode(params);
}
//const promiseEpisodes:IEpisode[] = await fetchEpisode("asd");*/

export function CharacterInformation({ character }: { character: ICharacter }) {
   /*let episodes: IEpisode[] = asd(character.episode[1]);
    //character.episode.map()
    character.episode.forEach(element => {
      fetchEpisode(element);
    });*/

  
  
    return (
    <div className="w-2/3 bg-gray-800 text-white z-50 py-4 px-8 rounded-lg">
      <img src={character.image} />
      <h1 className="text-4xl">{character.name}</h1>
      <div className="flex flex-col space-y-1">
        <span>Status: {character.status}</span>
        <span>species: {character.species}</span>
        <span>Origin: {character.origin.name}</span>
        {character.episode?.map((episode: string, index: number) => (
            <span key={index}>{(episode)}</span>
         
        ))}
      </div>
    </div>
  );
}
