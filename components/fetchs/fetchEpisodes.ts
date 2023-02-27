import { IEpisode } from "components/models/IEpisode";

export async function fetchEpisode(url:string): Promise<IEpisode[]> {
  const responsePg1 = await fetch(url);

  const data1 = await responsePg1.json();

  return data1.results;
}