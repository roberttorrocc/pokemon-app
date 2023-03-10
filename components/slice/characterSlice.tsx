import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "components/store/store";
import { ICharacter } from "components/models/ICharacter";
import {fetchCharacter} from 'components/fetchs/fetchChracters'

interface CharacterState {
  data: ICharacter[];
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
    setData: (state, action: PayloadAction<ICharacter[]>) => {
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

export const dispatchDataCharacter = (): AppThunk => async (dispatch) => {
  dispatch(setLoading());
  dispatch(setData( await fetchCharacter()));
};
