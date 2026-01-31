"use strict";
// // Infere types (Implicit types)
// let useraname = "GamerX";
// let subscriber = 2_000;
// subscriber = "Hehe"
Object.defineProperty(exports, "__esModule", { value: true });
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
// Named Types
// type Status = "pending" | "completed" | "failed";
// type ToggleSwitch = "on" | "off";
// let currentSatus: Status = "pending";
// let toggleSwitch: ToggleSwitch = "off";
// -------------------------------------------------------------------------------------------------------------------
// Function Overloading
// function add1(num1: number | string, num2: number | string): number | string {
//   if (typeof num1 === "string" || typeof num2 === "string") {
//     return num1 + "" + num2;
//   }
//   return num1 + num2;
// }
// function add(num1: string, num2: string): string;
// function add(num1: number, num2: number): string;
// function add(num1: any, num2: any): any {
//   return num1 + num2;
// }
// add(2, 2); // 4
// add("2", "2"); // 22
// -------------------------------------------------------------------------------------------------------------------
// Generics
// function getAge<T>(age: T): T {
//   return age;
// }
// getAge<string>("20");
// getAge<number>(20);
// type UserDetail = {
//   name: string,
//   age: number
// }
// type AdminDetail = {
//   firstName: string,
//   role: string
// }
// const userDetails: UserDetail = {
//   name: "GamerX",
//   age: 20,
// };
// const adminDetails: AdminDetail = {
//   firstName: "GamerX",
//   role: "admin",
// };
// function getDetails<T>(details: T): T {
//   return details;
// }
// const userValue = getDetails<UserDetail>(userDetails);
// const adminValue = getDetails<AdminDetail>(adminDetails);
// type UserDetail = {
//   name: string;
//   age: number;
// };
// type AdminDetail = UserDetail & {
//   role: string;
// };
// interface UserDetail  {
//   name: string;
//   age: number;
// };
// interface AdminDetail extends UserDetail  {
//   role: string;
// };
// const userDetails: UserDetail = {
//   name: "GamerX",
//   age: 20,
// };
// const adminDetails: AdminDetail = {
//   name: "GamerX",
//   age: 22,
//   role: "admin",
// };
// -------------------------------------------------------------------------------------------------------------------
// Enums
// type StatusType = "pending" | "completed" | "failed";
// enum StatusType {
//   PENDING = "pending",
//   COMPLETED = "completed",
//   FAILED = "failed",
// }
// function getStatus(orderId: string, status: StatusType){
//   console.log(orderId, "==", status);
// }
// getStatus("12345", StatusType.COMPLETED)
// -------------------------------------------------------------------------------------------------------------------
// as const
// let username = "GamerX" as const
// username = "hello"
// -------------------------------------------------------------------------------------------------------------------
// keyof typeof
// const StatusType = {
//   PENDING: "pending",
//   COMPLETED: "completed",
//   FAILED: "failed",
// } as const;
// function getStatus(orderId: string, status: keyof typeof StatusType) {
//   console.log(orderId, "==", StatusType[status]);
// }
// getStatus("12345", "COMPLETED");
// -------------------------------------------------------------------------------------------------------------------
// Utility Types
// type User = {
//   name: string;
//   age?: number;
//   salary: number;
// };
// const userDetails: Readonly<User> = {
//   name: "GamerX",
//   age: 22,
// };
// const userDetails: Partial<User> = {
//   name: "GamerX",
//   age: 22,
// };
// const userDetails: Required<User> = {
//   name: "GamerX",
//   age: 22,
// };
// const userDetails: Pick<User, "name" | "salary"> = {
//   name: "GamerX",
//   salary: 30000
// };
// const userDetails: Omit<User, "salary"> = {
//   name: "GamerX",
//   age: 22,
// };
// type StatusType = "pending" | "completed" | "failed";
// const status1: Exclude<StatusType, "pending"> = "completed"
// type Food = {
//   KFC: string;
//   PIZZA: string;
//   CHICKEN: string;
// }
// type Food = Record<string, any>;
// type Food = {
//   [index: string]:any
// };
// const food: Food = {
//   PIZZA: "fadfsa",
//   CHICKEN: 20,
// }
// -------------------------------------------------------------------------------------------------------------------
// any/unknown/never/void/nul
let userName = null;
function get() {
    if (userName) {
        return "hsdfhds";
    }
    else if (userName === null) {
        return "Null";
    }
}
// function throwError(message: string): never {
//   throw new Error(message);
// }
// function logMessage(message: string): void {
//   console.log(message);
// }
// type User = {
//   name: string;
//   getUsername: (message: string) => void;
// };
// const currentObj: User = {
//   name: "GamerX",
//   getUsername(message) {
//     console.log(message);
//   },
// }
// currentObj.getUsername("Hello")
//# sourceMappingURL=index.js.map