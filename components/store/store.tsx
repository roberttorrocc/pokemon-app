import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import characterReducer from "@/components/slice/characterSlice";

export const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
