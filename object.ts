const user = {
  name: "MorsH",
  email: "mors@example.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "MorsH", isPaid: false, email: "mors@example.com" };

createUser(newUser);

interface CourseProps {
  name: string;
  price: number;
}

function createCourse(): CourseProps {
  return { name: "TypeScript", price: 100 };
}

// type User =  {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createNewUser(user: User): User {
//     return {name: "", email: "", isActive: false};
// }

// createNewUser({name: "MorsH", email: "", isActive: false});

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
};

let myUser: User = {
  _id: "12345",
  name: "MorsH",
  email: "moh@example.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "morsh@example.com";
