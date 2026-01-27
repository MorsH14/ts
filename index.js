const username = "MORSH".toLowerCase();
const totalCharacter = username.length;
const upperCase = username.toUpperCase();
const lowercase = username.toLowerCase();
const replace = username.replace("MO", "MA");
const replaceAll = username.replaceAll("R", "U");
const sentence = "twenty friends cannot play for twenty years";
const replaceSentence = sentence.replaceAll("twenty", "ten");
const sentenceLength = sentence.length;
const include = username.includes("lala".toUpperCase());
const startWith = username.startsWith("d");
const endsWith = username.endsWith("e");
const split = username.split("Z");
const filePath = "C:\Users\USER\OneDrive\Documentos\ts\index.js";
const getFileFormat = filePath.split(".");
const reverseWord = "you Love I";
const word = reverseWord.split(" ").reverse().join(" ");

console.log(word);
