import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchDataCharacter } from "components/slice/characterSlice";
import { RootState } from "components/store/store";
import { ICharacter } from "components/models/ICharacter";
import { CharacterInformation } from "components/CharacterInformation";

function CharacterCard() {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.characters
  );

  useEffect(() => {
    dispatch(dispatchDataCharacter() as any);
  }, [dispatch]);

  const character = data.find(
    (character: ICharacter) => character.id === Number(id)
  );

  return (
    <div className="flex items-center justify-center">
      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-white">{error}</p>}
      {!loading && character && <CharacterInformation character={character} />}
      {!character && <p className="text-white">Character not found</p>}
    </div>
  );
}

export default CharacterCard;
