import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchDataCharacter } from "components/slice/characterSlice";
import { RootState } from "components/store/store";
import { ICharacter } from "components/models/ICharacter";
import { CharacterCard } from "./CharacterCard";

function CharacterList() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.characters
  );

  useEffect(() => {
    dispatch(dispatchDataCharacter() as any);
  }, [dispatch]);

  const [characterList, setCharacterList] = useState("");
  const filtredList = data.filter((c) =>
    c.name.toLocaleLowerCase().includes(characterList.toLocaleLowerCase())
  );

  return (
    <>
      <input
        type="search"
        value={characterList}
        onChange={(e) => setCharacterList(e.target.value)}
      />
      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading &&
          filtredList.map((character: ICharacter, index: number) => (
            <CharacterCard key={index} character={character} />
          ))}
      </div>
    </>
  );
}

export default CharacterList;
