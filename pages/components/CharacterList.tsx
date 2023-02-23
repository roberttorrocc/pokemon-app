import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacter } from "slice/characterSlice";
import { RootState } from "store/store";
import { Character } from "modelos/character";
import CharacterCard from './CharacterCard'

function CharacterList() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.episodios
  );

  useEffect(() => {
    dispatch(fetchCharacter() as any);
  }, [dispatch]);

  return (
    
      <div className="grid grid-cols-3 gap-2 content-center">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading &&
          data.map((character: Character, index: number) => (
            <CharacterCard key={index} character={character}/>
              
          ))}
      </div>
    
  );
}

export default CharacterList;
