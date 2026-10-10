// 1. Classes and Objects
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(this.name);
        console.log(this.age);
    }
}

let student1 = new Student("Anshid", 18);
student1.display();

// 2. Constructor
class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}

let car1 = new Car("Toyota", "Black");

console.log(car1.brand);
console.log(car1.color);

// 3. Inheritance
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

let dog1 = new Dog();

dog1.eat();
dog1.bark();

// 4. Encapsulation
class BankAccount {
    #balance = 1000;

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount();

console.log(account.getBalance());

// 5. Polymorphism
class Cat extends Animal {
    sound() {
        console.log("Cat meows");
    }
}

class PetDog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

let cat = new Cat();
let petDog = new PetDog();

cat.sound();
petDog.sound();
