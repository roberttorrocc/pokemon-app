import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "@/components/store/store";
import { Character } from "@/components/modelos/character";

interface CharacterState {
  data: Character[];
  loading: boolean;
  error: string | null;
}

const initialState: CharacterState = {
  data: [],
  loading: true,
  error: null,
};

const characterSlice = createSlice({
  name: "personajes",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Character[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setData, setLoading, setError } = characterSlice.actions;

export default characterSlice.reducer;

export const fetchCharacter = (): AppThunk => async (dispatch) => {
  dispatch(setLoading());

  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  dispatch(setData(data.results));
};
