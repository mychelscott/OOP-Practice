//class with constructor parameters
class Student {
    constructor (name, age, major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }
}

//instance of the student class
const student1 = new Student ("Mychel Scott", 27, "Web Development");

//logged variable
console.log(student1);