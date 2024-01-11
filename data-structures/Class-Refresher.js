// Class definition for representing students with their information and actions.
class Student {
  // Constructor to initialize a new student with firstName, lastName, and grade.
  constructor(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.timesLate = 0; // Initialize the count of times a student has been late.
    this.scores = []; // Initialize an empty array to store scores.
  }

  // Instance method: Return the full name of the student.
  fullName() {  
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  // Instance method: Mark a student as late and check for expulsion if late three or more times.
  markLate() {
    this.timesLate += 1;
    if(this.timesLate >= 3) {
      return 'You are expelled!';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.timesLate} time(s).`
  }

  // Instance method: Calculate the average score of the student.
  calculateAverage() {
    const sum = this.scores.reduce((a,b) => a+b);
    return sum / this.scores.length;
  }

  // Setter method: Add a new score to the student's scores array.
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  // Class method: A static method to enroll students, takes any number of students as arguments.
  static enrollStudents(...students) {
    return "Enrolling Students"; 
  }
}

// Instantiate two students with their details.
let firstStudent = new Student('Obinna', 'Duru', 12);
let secondStudent = new Student('Franklin', 'Duru', 11);

// Demonstrate usage of various methods and properties of the Student class.
console.log(firstStudent.fullName());
console.log(secondStudent.fullName());

console.log(firstStudent.markLate());
console.log(secondStudent.markLate());

console.log(secondStudent.addScore(100));
console.log(secondStudent.addScore(92));

console.log(secondStudent.calculateAverage());

console.log(Student.enrollStudents());

// Overview of class structure for a generic data structure.
class DataStructure {
  constructor(setupData) {
    // Default property to store setup data for the data structure.
    this.setupData = setupData;
  }

  // Instance method: Return the setup data of the data structure.
  someInstanceMethod() {
    return this.setupData;
  }

  // Class/static methods are rarely used, but here for demonstration.
}

/*
Explanation of class usage and concepts:
- The new keyword is used to instantiate a class and call its constructor.
- The this keyword refers to the instance of the class.
- Instance methods provide functionality to instances of the class.
- Class/static methods can be called directly on the class and are not related to a specific instance.
- JS's class syntax is syntactic sugar for prototypal inheritance and helps organize code.
*/
