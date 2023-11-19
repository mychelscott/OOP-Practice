//class with constructor parameters
class Student {
    constructor (id, age, major) {
        this.id = id;
        this.age = age;
        this.major = major;
    }
}

//instance of the student class
const student1 = new Student ("33369", 27, "Web Development");

//logged variable
console.log(student1);