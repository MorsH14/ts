let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let morsh: User | Admin = { name: "morsh", id: 111 };

morsh = { username: "mo", id: 32 };

// function getDbId(id: number | string) {
//   console.log(`db id is ${id}`);
// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = ["1", "2", 3, true];

let seatAllotment: "aisle" | "middle" | "window" = "aisle";

seatAllotment = "aisle";
// seatAllotment = "crew"
