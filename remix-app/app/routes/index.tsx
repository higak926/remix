import { RecoilRoot } from "recoil";
import { CharacterCounter } from "./character_counter/character_counter";

export default function Index() {
  return (
    <>
      <h1>Remix and Recoi</h1>
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
    </>
  );
}
