// // Infere types (Implicit types)
// let useraname = "GamerX";
// let subscriber = 2_000;
// subscriber = "Hehe"

// -------------------------------------------------------------------------------------------------------------------

// // Defining types (Explicit types)
// let username: string = "Gamerx";
// let subscriber: number = 2_000;
// let isSubscribed: boolean = true;
// let skills: string[] = ["JS", "TS", "React"];
// let count: number[] = [1, 2, 3, 4];
// let userDetails: { name: string; age: number; salary: number } = {
//   name: "GamerX",
//   age: 22,
//   salary: 1_00_000,
// };

// -------------------------------------------------------------------------------------------------------------------

// //Interface

// interface Details {
//     name: string;
//     age: number;
//     salary: number;
//     getname: () => void
// }

// let userDetails: Details = {
//   name: "GamerX",
//   age: 22,
//   salary: 1_00_000,
//   getname() {
//     console.log(this.name);

//   }
// };

// -------------------------------------------------------------------------------------------------------------------

//Type

// type Details = {
//   name: string;
//   age: number;
//   salary: number;
//   getname: () => void;
// };

// let userDetails: Details = {
//   name: "GamerX",
//   age: 22,
//   salary: 1_00_000,
//   getname() {
//     console.log(this.name);
//   },
// };


// -------------------------------------------------------------------------------------------------------------------

// //Union / optional

// type Details = {
//   name: string;
//   age: number | string;
//   salary?: number;
//   getname?: () => void;
// };

// let userDetails: Details = {
//   name: "GamerX",
//   age: "22",
//   salary: 1_00_000,
// };

// let skills: (string | number)[] = ["JS", "TS", "React", 1, 2, 3];

// -------------------------------------------------------------------------------------------------------------------

// Functions

// function getUserName({ name, age }: { name: string; age: number }) {
//   return name;
// }

// getUserName({ name: "GamerX", age: 22 });

// type Details = {
//   name: string;
//   age: number | string;
//   salary?: number;
//   getname?: () => void;
// };

// let userDetails: Details = {
//   name: "GamerX",
//   age: "22",
//   salary: 1_00_000,
// };

// function getUserName(userDetails: Details): string {
//   return userDetails.name;
// }

// const newValue = getUserName(userDetails);

// -------------------------------------------------------------------------------------------------------------------



// Generics

function getAge(age: string | number): string | number {
  return age;
}

getAge("20");
getAge(20);