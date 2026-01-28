const sentence = "I am learning javascript every night";
const words = sentence.split(" ");

let shortestWord = words[3];

for (let i = 0; i < words.length; i++) {
  //   console.log(words[i]);
  if (words[i].length < shortestWord.length) {
    shortestWord = words[i];
  }
}

console.log(shortestWord);
