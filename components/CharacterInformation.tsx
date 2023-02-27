import { ICharacter } from "@/components/models/ICharacter";
import {fetchEpisode} from 'components/fetchs/fetchEpisodes'
import Router from "next/router";

export function CharacterInformation({ character }: { character: ICharacter }) {
  return (
    <div className="w-2/3 bg-gray-800 text-white z-50 py-4 px-8 rounded-lg">
      <img src={character.image} />
      <h1 className="text-4xl">{character.name}</h1>
      <div className="flex flex-col space-y-1">
        <span>Status: {character.status}</span>
        <span>species: {character.species}</span>
        <span>Origin: {character.origin.name}</span>
        
      </div>
    </div>
  );
}
