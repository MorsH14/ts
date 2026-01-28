const names = ["john", "bob", "mary", "joe"];

for (let i = 0; i < 5; i++) {
  console.log("Loop" + i);
  if (i === 3) break;
}

// for(let i = 5 ; i > 0; i--) {
//     console.log('Loop' + i)
// }

for (let i = 0; i < names.length; i++) {
  console.log(names[1]);
  if (i === 3) break;
}

for (name of names) {
  console.log(name);
}

const user = { firstName: "john", lastName: "doe" };

//for in loop
for (key in user) console.log(user[key]);

// while loop
let i = 0;
while (i < 10) {
  i++;
  if (i === 5) continue;
  console.log(i);
}

//do while loop
//the do runs before the while
let i = 0;
do {
  i++;
  if (i === 5) continue;
  console.log(i);
} while (i < 2);

//forEach

const animal = ["cat", "dog", "horse", "sheep", "bird"];

animal.forEach((animal) => {
  console.log(animal);
});
