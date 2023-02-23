import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacter } from '@/pages/slice/characterSlice';
import { RootState } from '@/pages/store/store';
import { Character } from '@/pages/components/modelos/character';
import CharacterList from './components/CharacterList'

export default function Home() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.episodios
  );

  useEffect(() => {
    dispatch(fetchCharacter() as any);
  }, [dispatch]);

  return (
    <>
      <div>
        <CharacterList/>
      </div>
    </>
  );
}