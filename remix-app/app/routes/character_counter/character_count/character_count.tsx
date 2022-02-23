import { useRecoilValue } from "recoil";
import { charCountState } from "../selectors/char_count";

export function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
