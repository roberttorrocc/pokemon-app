import { ICharacter } from "components/models/ICharacter";

export async function fetchCharacter(): Promise<ICharacter[]> {
  const responsePg1 = await fetch("https://rickandmortyapi.com/api/character/?page=1");
  const responsePg2 = await fetch("https://rickandmortyapi.com/api/character/?page=2");

  const [data1, data2] = await Promise.all([responsePg1,responsePg2].map(response => response.json()));

  return [...data1.results, ...data2.results];
}
