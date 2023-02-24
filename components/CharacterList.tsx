import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchDataCharacter } from "components/slice/characterSlice";
import { RootState } from "components/store/store";
import { ICharacter } from "components/models/ICharacter";
import {CharacterCard} from './CharacterCard'

function CharacterList() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.characters
  );

  useEffect(() => {
    dispatch(dispatchDataCharacter() as any);
  }, [dispatch]);

  return (
    
      <div className="grid grid-cols-3 gap-2 content-center">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading &&
          data.map((character: ICharacter, index: number) => (
            <CharacterCard key={index} character={character}/> 
          ))}
      </div>
    
  );
}

export default CharacterList;
