import { ICharacter } from "@/components/models/ICharacter";
import { IEpisode } from "components/models/IEpisode";
import { fetchEpisode } from "components/fetchs/fetchEpisodes";
import { useQuery } from "react-query";

let responses: Response[];

export function CharacterInformation({ character }: { character: ICharacter }) {
  /*
  character.episode.forEach(async (element) => {
    responses.push(await fetch(element));
  });*/

  const getEpisodes = async () => {
    const res = await fetch(character.episode[1]);
    const episode = await res.json();
    return episode;
  };

  const { data, isLoading, isError, error } = useQuery("episode",getEpisodes);

  return (
    <div className="w-2/3 bg-gray-800 text-white z-50 py-4 px-8 rounded-lg">
      <img src={character.image} />
      <h1 className="text-4xl">{character.name}</h1>
      <div className="flex flex-col space-y-1">
        <span>Status: {character.status}</span>
        <span>species: {character.species}</span>
        <span>Origin: {character.origin.name}</span>
        {isLoading && <span>Loading...</span>}
        {isError && <span>{isError}</span>}
        {!isLoading && !isError && <span>{data.episode}</span>}

      </div>
    </div>
  );
}
