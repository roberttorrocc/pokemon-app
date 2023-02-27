import { ICharacter } from "@/components/models/ICharacter";
import Router from "next/router";

export function CharacterCard({ character }: { character: ICharacter }) {
  return (
    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <div
        className="relative flex items-end overflow-hidden rounded-xl"
        onClick={() =>
          Router.push(`CharacterPg/[id]`, `CharacterPg/${character.id}`)
        }
      >
        <h1>{character.name}</h1>
        <img src={character.image} />
      </div>
    </article>
  );
}
