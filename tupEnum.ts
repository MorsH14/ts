// const appUser: (string | number)[] = ["MorsH", 123];

let appUser: [string, number, boolean];

appUser = ["MorsH", 123, true];

let rgb: [number, number, number] = [255, 0, 255];

type TUser = [number, string];

const newTUser: TUser = [1123, "MorsH"];

newTUser[1] = "33";

newTUser.push(true);
