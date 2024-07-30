export function MakeTag(text: string) {
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (word === "") return;

      if (!word.startsWith("#")) {
        return `#${word}`;
      } else {
        return word;
      }
    })
    .join(" ");
}
