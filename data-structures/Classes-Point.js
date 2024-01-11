// Class definition for representing 2D points with utility method for calculating distance.
class Point {
  // Constructor to initialize a point with x and y coordinates.
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Class method: Utility method to calculate the distance between two points.
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  } 
}

// Instantiate two points.
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// Calculate and log the distance between the two points using the class method.
console.log(Point.distance(p1, p2));

/*
Explanation of the code:
- The class Point represents 2D points with x and y coordinates.
- The class method 'distance' calculates the Euclidean distance between two points.
- The static keyword is used to define a class method, making it accessible on the class itself.
- Class methods are often used for utility functions that don't depend on a specific instance.
- Object-oriented programming is about organizing code to improve understanding and maintainability.
- In this example, the class method 'distance' makes more sense than an instance method for calculating distances between points.
*/
