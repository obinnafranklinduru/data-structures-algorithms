// Queues implemented as an array.

const queue = [];
queue.push("first");  // Enqueue - add to tail
queue.push("second");
queue.push("third");

queue.shift();  // Dequeue - remove from front
queue.shift();  // Removing from the front of the array re-indexes the array, O(n), 
                // not efficient
queue.shift();

queue.unshift("first");  // Add to front - still re-indexing entire queue, O(n)
queue.unshift("second");  // No efficient way to avoid re-indexing using array
queue.unshift("third");  // Perhaps turning values to null and having a variable that 
                        // holds the current head.

queue.pop();  // Dequeue - remove from back
queue.pop(); 
queue.pop();  

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

Queue Essentials:
Enqueue and dequeue are essential for a queue. 
Elements must be added from the rear and removed from the front.

    Enqueue ->          Dequeue ->
    -------

Most languages have built-in queue implementations, but JavaScript does not.

Uses:
Used in scenarios where there is a shared resource, 
but the resource can only handle one request at a time.
The first request that comes in gets served first.

Used in printer jobs, processor for computers,
network requests, scheduling,
web servers processing requests,
and in JavaScript for how functions are executed.

Web servers have a request queue that handles 
the lifecycle of the request: 
- Incoming request queue
- Processing request queue
- Outgoing request queue

In operating systems, there is a multi-level priority queue, 
which schedules processes based on their priority order, 
and then queues are executed based on their level of importance.

Similar to Stacks:
- stack.push() -> queue.enqueue()
- stack.pop() -> queue.dequeue()
- stack.size() -> queue.size()
- stack.isEmpty() -> queue.isEmpty()

Implementation:
Array -
Depending on the situation, an array can be a suboptimal implementation tool.
It can run out of memory if we don't know the size of the queue beforehand.
As the array grows, the time complexity of accessing and removing elements 
increases. Adding to the front also means re-indexing everything, resulting in O(n).

Pseudocode for Array Implementation:
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