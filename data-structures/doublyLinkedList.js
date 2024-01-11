// Doubly Linked List
// A data structure consisting of nodes where each node points to the next and the previous nodes.
// Provides more flexibility than a singly linked list, but consumes more memory.

// Node class representing a node in the doubly linked list.
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;  // Pointer to the previous node.
    this.next = null;  // Pointer to the next node.
  }
}

// Doubly Linked List class with methods for various operations.
class DoublyLinkedList {
  constructor() {
    this.head = null;   // Pointer to the first node in the list.
    this.tail = null;   // Pointer to the last node in the list.
    this.length = 0;    // Length of the list.
  }

  // push()- Add a new node to the end of the doubly linked list. O(1)
  push(data) {
    const newNode = new Node(data);
    if (!this.head) {       // Add the first node to an empty doubly linked list.
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;  // Set the tail's next to the new node.
      newNode.prev = this.tail;  // Set the new node's previous to the current tail.
      this.tail = newNode;       // Update the tail to be the new node.
    }
    this.length++;
    return this;
  }

  // pop()- Remove the end/tail of the linked list. O(1)
  pop() {
    if (this.length === 0) return undefined;  // Return undefined if the list is empty.
    
    if (this.length === 1) {  // If there's only one node, remove it.
      let currentNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return currentNode;
    }

    const poppedOff = this.tail;     // Node to be removed and returned.
    this.tail = this.tail.prev;      // Set the tail to the previous node.
    this.tail.next = null;           // Remove the link to the old tail.
    this.length--;
    return poppedOff;
  }

  // shift()- Remove the head from the doubly linked list and return it. O(1)
  // The second item becomes the head.
  shift() {
    if (!this.head) return undefined;  // Return undefined if there's no head.

    const removedHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedHead.next;
      this.head.prev = null;
      removedHead.next = null;
    }
    this.length--;
    return removedHead;
  }
  
  // unshift()- Add a new head to the list. O(1)
  unshift(data) {
    if (data === undefined) return undefined;  // Return undefined if no value is passed in.

    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // get()- Retrieve a node by its position in the linked list. O(n)
  get(index) {
    if (typeof index !== 'number') return null;          // Handle invalid input.
    if (index < 0 || index >= this.length) return null;  // Handle out of range.
    if (index === 0) return this.head;                   // Return head if the index is 0.
    if (index === this.length - 1) return this.tail;     // Return tail if the index is the last.

    let counter, currentNode;
    if (index <= this.length / 2) {        // Check if closer to the head or tail.
      counter = 0;
      currentNode = this.head;            // Start from the head.
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      currentNode = this.tail;            // Start from the tail and work backward.
      while (counter !== index) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode;                   // The node is within the valid range.
  }

  // set()- Update the data of a node at a specified position in the linked list. O(n)
  set(index, data) {
    if (data === undefined) return undefined;  // Return undefined if no data is input.

    let foundNode = this.get(index);           // Re-use get().
    if (foundNode) {
      foundNode.data = data;                   // Update the data property inside the node.
      return true;
    }
    return false;
  }

  // insert()- Add a new node at a specified position in the linked list. O(n)
  insert(index, data) {
    if (data === undefined) return undefined;             // Return undefined if no data is input.
    if (index < 0 || index > this.length) return false;   // Handle out of bounds.
    if (index === 0) return !!this.unshift(data);         // Add to the front if at the head.
    if (index === this.length) return !!this.push(data);  // Add to the end if beyond the tail.

    let newNode = new Node(data);
    let afterNode = this.get(index);       // Re-use get().
    let preNode = afterNode.prev;

    preNode.next = newNode;     // Set the preNode's next to the new node.
    newNode.prev = preNode;     // Set the new node's previous to preNode.
    newNode.next = afterNode;   // Set the new node's next to afterNode.
    afterNode.prev = newNode;   // Set afterNode's previous to the new node.
    this.length++;
    return true;
  }

  // remove()- Remove a node at a specified position in the linked list. O(n)
  remove(index) {
    if (index < 0 || index >= this.length) return false;   // Return false if out of range.
    if (index === 0) return this.shift();                  // If at the head, shift.
    if (index === this.length - 1) return this.pop();      // If at the tail, pop.
    
    let removedNode = this.get(index); 
    let preNode = removedNode.prev;
    let afterNode = removedNode.next;

    preNode.next = afterNode;     // Set the preNode's next to afterNode.
    afterNode.prev = preNode;     // Set afterNode's previous to preNode.
    removedNode.next = null;      // Clean up removedNode's pointers.
    removedNode.prev = null;
    this.length--;
    return removedNode;   
  }
}

/*
Overview:
  Insertion/Removal: 
    Best: O(1)
    Worst: O(N)
    Note, the act of inserting/removing is O(1),
    but still needs to traverse to find the node, so O(N).
  Searching/Access:
    Best: O(1)
    Worst: O(N)

  Recap:
  Doubly Linked Lists are almost identical to Singly Linked Lists,
  except that there is an additional pointer to the previous node.
  
  Better than Singly Linked Lists for finding nodes.
  They are done in half the time.

  The downside is that they take up more memory due to the extra pointer.
*/

// Example usage of DoublyLinkedList class.
const list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
const x = list.remove(1);
console.log(x);