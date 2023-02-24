import { ICharacter } from "@/components/models/ICharacter";
import Router from 'next/router'

export function CharacterCard({ character }: { character: ICharacter }) {
  return (
    <div
      className="bg-cyan-400 text-white p-4 rounded-md w-fit"
      onClick={() => Router.push(`CharacterPg/[id]` ,`CharacterPg/${character.id}`)}
    >
      <h1>{character.name}</h1>
      <img src={character.image} />
    </div>
  );
}
