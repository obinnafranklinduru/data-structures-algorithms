// Stacks Data Structure - Linked List Implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;  // 'first' instead of 'head'
    this.last = null;   // 'last' instead of 'tail'
    this.size = 0;
  }

  // Remove from the top of the stack
  pop() {
    if (!this.first) return null;  // If no 'first', then can't pop.

    let removedTop = this.first;
    if (this.first === this.last) {   // Only 1 element left?
      this.last = null;               // Set 'last' to null to avoid it being populated with the last item
    }
    this.first = this.first.next;     // Set to null or the next element
    this.size--;
    return removedTop;
  }

  // Add to the top of the stack - O(1)
  push(data) {
    if (data === undefined) return undefined; // If not handled, will increment when nothing is passed

    let newNode = new Node(data);
    if (!this.first) {             // If no 'first' aka length equals 0
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;     // Set the new node's pointer to 'first'
      this.first = newNode;          // Set the new node as 'first'
    }
    this.size++;                  // Increment by 1 since it's a new item
    return this.size;             // Return the size of the stack
  }

  // Peek at the top without removing
  topPeek() {
    return this.first;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

let newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
console.log(newStack.isEmpty());
console.log(newStack);

const x = newStack.pop();
const y = newStack.pop();
const z = newStack.pop();
console.log(x);
console.log(y);
console.log(z);
console.log(newStack.isEmpty());
console.log(newStack);

newStack.push(1);
newStack.push(2);
newStack.push(3);

console.log(newStack.topPeek());

/*
Stack Abstract Data Type (ADT):
A collection with the restriction that insertion 
and deletion can only be performed from 
one end, the top. 

A collection with LIFO principle, 
last in, first out.

The last element is the first one out.

Think of a stack of books or the Tower of Hanoi.

Operations:
All methods are O(1)
push() - Add to the top of the stack
pop() - Remove and return the top of the stack
top() - Peek the top without removing
isEmpty() - True/False based on whether the stack is empty
length() - Return the number of elements in the stack

The two main things that you have to care about
in a stack are push() and pop().

These are O(N)
Searching- look for element
Access- accessing element

Uses:
Function calls/Recursion
Browser history
Undo operations in text editors
used in algorithms: balance parentheses for compilers
call stack

Implementation:
JavaScript doesn't come with an implementation 
of a stack.

You can implement it with an array or linked list.
A linked list allows you to increase the size of the stack 
beyond the fixed memory allocation of an array.

Adding to the beginning of an array in a stack implementation 
is O(n), since you have to re-index all of the elements.
Best to add to the end, since it's O(1).

If you care about efficiency, all you really need is 
LIFO property. We won't care about accessing info 
based on index, since that would mean taking things
from the middle of the stack. So, it's better to use a linked list 
since it can grow dynamically.

If using linked list, insert at the head.
Removing at tail will be O(n) because
you have to traverse to the second-to-last node.
Why? You remove the last node, then you 
have to update the tail property with the 
new last node.

Better to add/remove from the head, since 
it's one direction, O(1).

You could use a doubly linked list, but 
that would take up more memory.
*/