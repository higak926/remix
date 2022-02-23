import { TextInput } from "./text_input/text_input";
import { CharacterCount } from "./character_count/character_count";

export function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}
