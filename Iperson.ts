// Define an interface for Animals
interface Iperson {
    name: string;
    age: number;
    email: string;
    sayHello();
}

// // Define the Animal class implementing the IAnimal interface

class person implements Iperson {

    // Properties
    name: string;
    age: number;
    email: string;

    // Constructor
    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.email = species;
    }

    // Method
    sayHello() {
        console.log("Hello" +this.name);
    }
}

person.sayHello("Sandeep");