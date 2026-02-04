const username = "MORSH".toLowerCase(); // turns the string to lowercase
const totalCharacter = username.length; // gets the length of the string
const upperCase = username.toUpperCase(); // turns the string to uppercase
const replace = username.replace("MO", "MA"); // replaces part of the string
const replaceAll = username.replaceAll("r", "U"); // replaces all occurrences of a substring
const sentence = "twenty friends cannot play for twenty years";
const replaceSentence = sentence.replaceAll("twenty", "ten"); // replaces all occurrences in a sentence
const sentenceLength = sentence.length; // gets the length of the sentence
const include = username.includes("lala".toUpperCase()); // checks if the string includes a substring
const startWith = username.startsWith("d"); // checks if the string starts with a substring
const endsWith = username.endsWith("e"); // checks if the string ends with a substring
const split = username.split("Z"); // splits the string by a specified separator
const filePath = "C:/Users/USER/OneDrive/Documents/ts/index.js"; // example file path
const getFileFormat = filePath.split("."); // splits the file path to get the file format
const reverseWord = "you Love I"; // example string to reverse
const word = reverseWord.split(" ").reverse().join(" "); // reverses the words in the string
const splitFile = filePath.split("/").length; // splits the file path by "/" and gets the number of segments
trim = "     Hello World     ".trim();
const trimWord = "     Hello World     ".trim(); // trims whitespace from both ends of the string
const includeWord = username.includes("m"); // checks if the string includes a substring
const data = [10, 20, 30, 40, 50];
const newPrice = data.map((d) => d + 10); // adds 10 to each element in the array
const houses = [
  "Villa lagos",
  "Apartment abuja",
  "Bungalow ilorin",
  "Duplexn lagos",
];
const lagosHouses = houses.filter((house) => house.includes("lagos")); // filters houses that include "lagos"

const prices = [100, 200, 300];

const total = prices.reduce((sum, price) => sum + price, 0); // calculates the total sum of the prices

console.log(total);

console.log(lagosHouses);

const properties = [
  "Lagos Duplex",
  "Abuja Apartment",
  "Lagos Bungalow",
  "Ibadan Flat",
];

const userSearch = "lagos";

const result = properties.filter((property) =>
  property.toLowerCase().includes(userSearch.toLowerCase()),
);
const nameFilter = (name) =>
  properties.filter((property) =>
    property.toLowerCase().includes(name.toLowerCase()),
  );
console.log(nameFilter("lagos"));
console.log(result);

for (let p = 0; p < properties.length; p++) {
  if (properties[p].toLowerCase().includes(userSearch.toLowerCase())) {
    console.log(properties[p]);
  }
}
