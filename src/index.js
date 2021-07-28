function doWord(word) {
  return word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1);
}

export function makeNumeronym(input) {
  let returnVal = "";

  const words = input.split(" ");

  for (let i = 0; i < words.length; i++) {
    returnVal += doWord(words[i]) + " ";
  }

  return returnVal.trim();
}
