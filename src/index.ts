// let total: number = 100;
// let userName: string = "Bob";
// let isActive: boolean = false;
// let empty: null = null;
// let undef: undefined = undefined;

// userName = "5";

// const numbers: number[] = [1, 2, 3, 4, 5];
// numbers.push(9);

// type User = {
//   userName: string;
//   age: number | string;
// };

// const user: User = {
//   userName: "Mango",
//   age: 14,
// };

// user.age = 15;

// let age: any = 10;
// age = false;

// не можна застосувати toFixed() (метод для чисел), бо стоїть unknown і username не впевнений, що його значення це число
// let userName: unknown = "Bob";
// userName = 12;
// userName.toFixed();

// 2 варіанта як записати декілька значень для змінної
// Union type
// type size = "small" | "medium" | "large";

// Enum
// enum Sizes {
//   small = "small",
//   medium = "medium",
//   large = "large",
// }

// const button: size = "large";
// const button2: Sizes = Sizes.large;

// function add(num1: number, num2: number): string {
//   return `${num1}` + `${num2}`;
// }
// console.log(add(1, 1));

// якщо наша функція нічого не повертає
// function add(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }

// повернення об'єкту з функції

// type User = {
//   name: string;
//   age: number;
//   hobby: string;
// };

// function userData(name: string, age: number, hobby: string): User {
//   return {
//     name,
//     age,
//     hobby,
//   };
// }

// об'єкт з методом об'єкту
// type Car = {
//   color: string;
//   price: number;
//   currency: string;
//   start: () => {};
//   //   start: (color:string) => {}
// };
// const Car = {
//   color: "red",
//   price: 1000,
//   currency: "UAH",
//     start() {
//       console.log("Start");
//     },
// //   start(color) {
// //     console.log("Start" + color);
// //   },
// };

// Якщо є необов'язкове поле всередині об'єкта
// type User = {
//   name: string;
//   age: number;
//   role?: string;
// };
// const user: User = {
//   name: "Bob",
//   age: 23,
// };

// const admin: User = {
//   name: "Bob",
//   age: 23,
//   role: "admin",
// };
