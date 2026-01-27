const sentence = "I am learning javascript every night";

const totalSentence = sentence.length;
const wordNumber = sentence.split(" ").length;
const longestWord = "";

for (let i = 0; i < words.length; i++) {
  if (words[i].length > longestWord.length) {
    longestWord = words[i];
  }
}
const wordCheck = sentence.toLowerCase().includes("javascript");

const result = {
  characters: totalSentence,
  words: wordNumber,
  longestWord: longestWord,
  containsJavascript: wordCheck,
};

console.log(result);
