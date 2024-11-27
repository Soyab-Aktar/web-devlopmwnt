const sentence = "Hello, Welcome to vsCode.";
console.log(sentence);

let reverseSentence = "";
for (const letter of sentence) {
  reverseSentence = letter + reverseSentence;
}
console.log(reverseSentence);

console.log(sentence.split("").reverse().join(""));
