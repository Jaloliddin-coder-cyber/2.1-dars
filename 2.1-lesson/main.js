// 1-masala
// const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise 1"), 3000)
// );
// const p2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise 2"), 2000)
// );
// const p3 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise 3"), 1000)
// );

// Promise.race([p1, p2, p3]).then((result) => {
//   console.log("Eng birinchi bajargan promise:", result);
// });

// 2-masala
// class Animal {
//   constructor(name) {
//     if (this.constructor === Animal) {
//       throw new Error("Abstract class 'Animal' dan obyekt yaratib bo'lmaydi");
//     }
//     this.name = name;
//   }

//   makeSound() {
//     throw new Error(
//       "makeSound() methodi abstract bo'lib, implement qilinishi kerak"
//     );
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log(`${this.name} says: Woof!`);
//   }
// }

// class Cat extends Animal {
//   makeSound() {
//     console.log(`${this.name} says: Meow!`);
//   }
// }

// class Cow extends Animal {
//   makeSound() {
//     console.log(`${this.name} says: Moo!`);
//   }
// }

// const dog = new Dog("Rex");
// const cat = new Cat("Murka");
// const cow = new Cow("Burenka");

// dog.makeSound();
// cat.makeSound();
// cow.makeSound();

// 3-masala
// class MathHelper {
//   static square(n) {
//     return n * n;
//   }

//   static cube(n) {
//     return n * n * n;
//   }

//   static isEven(n) {
//     return n % 2 === 0;
//   }
// }

// console.log("Square of 4:", MathHelper.square(4));
// console.log("Cube of 3:", MathHelper.cube(3));
// console.log("Is 10 even?:", MathHelper.isEven(10));

// 4-masala
// class Person {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }

//   getName() {
//     return this.#name;
//   }

//   setName(newName) {
//     if (typeof newName === "string" && newName.length > 0) {
//       this.#name = newName;
//     } else {
//       console.log("Noto'g'ri ism!");
//     }
//   }
// }

// const person = new Person("Ali");
// console.log("Ismi:", person.getName());
// person.setName("Vali");
// console.log("Yangi ismi:", person.getName());
// person.setName("");
