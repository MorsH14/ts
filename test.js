const mySentence = "I am learning javascript every night";
const words = mySentence.split(" ");

let shortestWord = words[3];

for (let i = 0; i < words.length; i++) {
  //   console.log(words[i]);
  if (words[i].length < shortestWord.length) {
    shortestWord = words[i];
  }
}

console.log(shortestWord);

const sentence = "javascript is fun and javascript is powerful";
const word = sentence.toLowerCase().split(" ");

let wordCount = {};

for (let i = 0; i < word.length; i++) {
  if (wordCount[word[i]]) {
    wordCount[word[i]] += 1;
  } else {
    wordCount[word[i]] = 1;
  }
}

console.log(wordCount);

function analyzeSentence(sentence) {
  const words = sentence.toLowerCase().split(" ");

  let wordCount = {};
  let longestWord = words[0];
  let shortestWord = words[0];

  for (let i = 0; i < words.length; i++) {
    // count words
    if (wordCount[words[i]]) {
      wordCount[words[i]]++;
    } else {
      wordCount[words[i]] = 1;
    }

    // longest word
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }

    // shortest word
    if (words[i].length < shortestWord.length) {
      shortestWord = words[i];
    }
  }

  return {
    wordCount: wordCount,
    longestWord: longestWord,
    shortestWord: shortestWord,
    totalWords: words.length,
  };
}
