import { useRouter } from "next/router";
import { ICharacter } from "@/components/models/ICharacter";

function CharacterCard() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
    <div>
      <h1 className="text-gray-100">ads{id}</h1>
      <p className="text-gray-100">{id}</p>
    </div>
  );
}

export default CharacterCard;
