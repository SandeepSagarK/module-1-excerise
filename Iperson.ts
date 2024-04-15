// Define an interface for Iperson
interface Iperson {
    name: string;
    age: number;
    email: string;
    sayHello(): void;
}

// // Define the person class implementing the Iperson interface

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
        console.log("Hello " + this.name);
    }
}

// Create instances of person
const sk: person = new person("SK", 16, "test@test.com");
const jp: person = new person("JC", 16, "test@test.com");
const ck: person = new person("CK", 16, "test@test.com");
const ss: person = new person("Sankara", 16, "tes@test.com");

sk.sayHello();
jp.sayHello();
ck.sayHello();
ss.sayHello();