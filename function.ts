function addTwo(num: number): number {
  return num + 2;
  // return "hello"
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name, email, boolean) {}

var loginUser = (name: string, email: string, isPaid: boolean = false) => {
  if (isPaid === void 0) {
    isPaid = false;
  }
};

let myValue = addTwo(5);
getUpper("hello");

signUpUser("John", "john@example.com", true);
loginUser("Jane", "jane@example.com");

// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};
const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
