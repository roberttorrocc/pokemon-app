export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  episode: string[];
  origin: {
    name: string;
    url: string;
  };
  image: string;
}
