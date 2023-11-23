//class with constructor parameters
class Student {
    constructor (name, age, major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }
}

//instance of the student class
const studenta = new Student ("Junior Junior", "21", "Architecture");
const studentb = new Student ("Alahi Fundi", "25", "Sustainable Farming");

//logged variable
console.log(studenta, studentb);