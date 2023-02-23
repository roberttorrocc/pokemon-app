import { createSlice } from "@reduxjs/toolkit";
import { Character } from "modelos/character";

type ApiCharacter = {
  results: Character[];
};

export async function getStaticProps(): Promise<{ props: ApiCharacter }> {
  const response = await fetch("https://rickandmortyapi.com/api/character/");

  const { results } = await response.json();

  return {
    props: { results },
  };
}

async function loadData() {
  const { props } = await getStaticProps();
  const initialState: Character[] = props.results;

  const charSlice = createSlice({
    name: 'char',  
    initialState,
    reducers:{
      //aqui van acciones que modifican el estado 
    }
  });

  export default charSlice.reducer;
}
loadData();

