// Queues implemented as a linked list.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Adds to the rear of the queue (line) - O(1)
  enqueue(data) {
    let newNode = new Node(data);
    if (!this.first) {             // Add 1st node to an empty singly linked list
      this.first = newNode;        // It's both the first and last since n = 1
      this.last = newNode;
    } else {                       // If greater than 1
      this.last.next = newNode;    // Set last to the next node
      this.last = newNode;         // The new node is the last
    }
    this.size++;                   // Increment by 1
    return this;                   // Return the linked list
  }

  // Removes from the front of the queue (line) - O(1)
  dequeue() {
    if (!this.first) return null;  // If no first, then can't dequeue

    let removedFirst = this.first;
    if (this.first === this.last) {   // Only one element left?
      this.last = null;               // Set last to null to avoid it being populated with the last item
    }
    this.first = this.first.next;     // Set to null or the next element
    this.size--;
    return removedFirst;
  }

  getFront() {
    return this.first;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

let queue = new Queue();
queue.enqueue("First");
queue.enqueue("Second");
queue.enqueue("Third");

console.log(queue);
console.log(queue.getSize());
console.log(queue.isEmpty());
console.log(queue.getFront());

const x = queue.dequeue();
const y = queue.dequeue();
const z = queue.dequeue();

console.log(queue.getSize());
console.log(queue.isEmpty());

/*
Queue Abstract Data Type (ADT):
A list or collection with the restriction that 
insertion must be performed at the rear, and 
deletion must be performed at the front.

A queue is essentially a line. The first person in is the 
first person served/leaves.

FIFO Principle - First In, First Out.

Methods:
- enqueue(): Add to the rear/tail.
- dequeue(): Remove and return from the head.
- front/peek(): Return the head without removing it.
- isEmpty(): Check if empty.

O(N) searching/access: Not necessary for a queue.

Queue Essentials:
Enqueue and dequeue are essential for a queue. 
Elements must be added from the rear and removed from the front.
If we want to search, we would have to consider another
data structure.

    Enqueue ->          Dequeue ->
    -------

Most of the time, languages already have implementations 
of queues. JS doesn't have one.

Uses:
Used in scenarios where there is a shared resource, 
but the resource can only handle one request at a time.

The request that comes first, gets served first.

Queues are foundational for more complex data structures.

Used in printer jobs, processor for computer,
network requests, scheduling, 
web servers processing requests,
in JS for how functions are executed.

Web servers have a request queue that handles 
the lifecycle of the request: 
-incoming request queue
-processing request queue
-outgoing request queue

In OS, has multi-level priority queue, 
which schedules processes to be divided up 
based on priority order, 
and then for queues to be executed based 
their level of importance.

Similar to Stacks:
stack.push() -> queue.enqueue()
stack.pop() -> queue.dequeue()
stack.size() -> queue.size()
stack.isEmpty() -> queue.isEmpty()

Implementation:
Array -
Depending on the situation, an array can be a suboptimal implementation tool.
It can run out of memory if we don't know the size of the queue beforehand.
As the array grows, the time complexity of accessing and removing elements 
increases. Adding to the front also means re-indexing everything, resulting in O(n).

One version of Pseudocode:- All O(1)
Have markers front and rear on the array.
To add, increment rear by 1 and add the element to the rear of the array.
To remove, increment front by 1 and remove the element at the front of the array.
Front and rear are initially -1.
IfEmpty: front and rear === -1 ? true : false.
enqueue(x):
  if rear == size - 1, queue full, exit.
  else if isEmpty, front <- rear <- 0.
  else rear <- rear + 1.
  A[rear] <- x.
dequeue(x):
  if isEmpty, return.
  else if front == rear, (only one element)
    front <- rear <-  -1.
  else,
    front <- front + 1.
Circular Array:
Next position: (i + 1) % number of elements in the array.
Previous position: (i + n - 1) % n.

Linked List -
A better implementation since resizing happens dynamically, 
and they do not have a fixed size.
Maintaining references to opposite ends of the queue makes 
enqueue and dequeue operations easier, resulting in O(1).

Arrays have a fixed size of memory, and if unfilled, 
the memory goes wasted and cannot be used by the rest of the computer. 
Linked Lists avoid this since only the memory that is used is allocated to it.
It's better to add at the tail and remove at the head.
If we keep a reference to the tail, we can simply append to the tail,
and the node points to null. If we remove or dequeue from the front,
all we do is reset the head to the next element.
*/