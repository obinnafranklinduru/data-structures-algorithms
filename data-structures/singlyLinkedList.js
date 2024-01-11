// Singly Linked List
class Node {
  constructor(data) {
    this.data = data;   // Value of the node
    this.next = null;   // Reference to the next node in the list
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;    // Points to the first node in the list
    this.tail = null;    // Points to the last node in the list
    this.length = 0;     // Number of nodes in the list
  }

  // Add a new node to the end of the list (O(1))
  push(data) {
    let newNode = new Node(data);

    if (!this.head) {    // If the list is empty, the new node is both the head and the tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;  // Set the next reference of the current tail to the new node
      this.tail = newNode;       // Update the tail to be the new node
    }

    this.length++;  // Increment the length of the list
    return this;    // Return the linked list
  }

  // Remove and return the last node in the list (O(n))
  pop() {
    if (this.length === 0) return undefined;  // If the list is empty, return undefined

    if (this.length === 1) {   // If there is only one node, remove it and update head and tail
      let currentNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return currentNode;
    }

    let prevNode = null;      // Previous node needed later to set to the tail
    let currentNode = this.head;

    while (currentNode.next !== null) {  // Traverse the list until the tail is reached
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = prevNode;      // Set the tail to the previous node
    this.tail.next = null;     // Update the new tail's next reference to null
    this.length--;

    return currentNode;        // Return the popped off node
  }

  // Remove and return the first node in the list (O(1))
  shift() {
    if (!this.head) return undefined;  // If the list is empty, return undefined

    let removedHead = this.head;
    this.head = this.head.next;        // Update the head to be the next node
    this.length--;

    if (this.length === 0) {           // If no elements are left after the operation
      this.tail = null;                // Set the tail to null to avoid it being populated with the last item
    }

    return removedHead;
  }

  // Add a new head to the list (O(1))
  unshift(data) {
    if (data === undefined) return undefined;  // If no data is provided, return undefined

    let newNode = new Node(data);

    if (!this.head) {                // If the list is empty, the new node is both the head and the tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;     // Set the new node's next reference to the current head
      this.head = newNode;          // Update the head to be the new node
    }

    this.length++;                  // Increment the length of the list
    return this;                    // Return the linked list
  }

  // Retrieve a node by its position in the list (O(n))
  get(index) {
    if (typeof index !== 'number') return null;
    if (index > this.length - 1 || index < 0) return -1;  // Handle out-of-range index

    if (index === 0) return this.head;                    // Return the head if the index is 0
    if (index === this.length - 1) return this.tail;      // Return the tail to avoid looping to get to the tail

    let counter = 0;                  // 0-based index
    let currentNode = this.head;      // Start off at the head

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;               // Bounded by the top if statement, so it will be found in range
  }

  // Set the data of a node at a specific position in the list (O(n))
  set(index, data) {
    if (data === undefined) return undefined;  // If no data is provided, return undefined

    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.data = data;  // Update the data property inside the node
      return true;
    }

    return false;
  }

  // Insert a new node at a specified position in the list (O(n))
  insert(index, data) {
    if (data === undefined) return undefined;           // If no data is provided, return undefined
    if (index < 0 || index > this.length) return false;  // Handle out-of-bounds index

    if (index === 0) return !!this.unshift(data);        // If the index is 0, add to the front (returning a boolean)

    if (index === this.length) return !!this.push(data);  // If the index is beyond the tail, add to the end (returning a boolean)

    let newNode = new Node(data);
    let prevNode = this.get(index - 1);                 // Get the previous node in the index to link to newNode
    let currentNode = prevNode.next;                    // Current node in the index
    prevNode.next = newNode;                            // Set prevNode's next reference to newNode
    newNode.next = currentNode;                         // Set newNode's next reference to currentNode
    this.length++;

    return true;                                       // Return true after successfully inserting the node
  }

  // Remove and return a node based on its index position in the list (O(n))
  remove(index) {
    if (index < 0 || index >= this.length) return false;  // If out of range, return false
    if (index === 0) return this.shift();                 // If it's the head, shift the list
    if (index === this.length - 1) return this.pop();     // If it's the tail, pop the list

    let prevNode = this.get(index - 1);                   // Get the node before the index
    let removedNode = prevNode.next;                      // Get the target node to return
    prevNode.next = prevNode.next.next;                   // Remove the node by skipping over it
    this.length--;

    return removedNode;                                  // Return the removed node
  }

  // Reverse the linked list in place (O(n))
  reverse() {
    let node = this.head;     // Switch head and tail nodes
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;          // Tail needs to be null at the end

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;            // Move one node over
      node = next;
    }
  }

  // Dev helper method to visualize the linked list
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr);
  }
}

/*
  Overview:
  Insertion/Removal:
    Best: O(1)
    Worst: O(N)
    Note, the act of inserting/removing is O(1)
    but still needs to traverse to find a node, so O(N).
  Searching/Access:
    Best: O(1)
    Worst: O(N)

  Recap:
  Singly Linked Lists are an excellent alternative to arrays 
  when inserting or deleting at the beginning or end 
  is frequent.

  The idea of a list data structure that consists of nodes
  is the foundation for other data structures like 
  Stacks and Queues.

  Arrays contain a built-in index since the entire array
  is placed together in memory.

  Because of this, the computer has to specify the amount
  of space needed upfront. In JavaScript, this is done behind the scenes.

  However, because of this, arrays allow for random access, 
  so one can get the nth element in constant time, O(1).

  If we need more than what was allocated, we have to copy 
  the entire array and place it into another array with more space.
  That's O(n) time.

  If we remove an element from the beginning of an array, 
  we have to re-index the entire array.
  This takes O(n) time.
  Again, JavaScript does this behind the scenes for us.

  Arrays are good for when you know how much data you will
  have upfront or need random access in constant time.

  Both Singly and Doubly Linked Lists don't need a specific
  chunk of memory upfront. Instead, they can grow dynamically,
  without the need to re-allocate memory.

  The downside is that to get to anything besides the head or tail,
  requires traversing the linked list, which is O(n).

  Getting the head or tail is constant time O(1).

  Adding to the beginning or end of the linked list is O(1).

  Adding/removing elements into the middle of Linked Lists is O(1),
  but since no random access to search, it is an additional O(n).
*/

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.print();
list.reverse();
list.print();
console.log(list);