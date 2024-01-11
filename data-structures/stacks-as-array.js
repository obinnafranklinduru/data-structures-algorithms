// Stacks Data Structure - Array Implementation
let searchStack = [];  // Adding to the end is better with arrays since there's no need to reindex the array (O(1))
searchStack.push('google');     // Adding to the end with push and pop creates a stack (Last In, First Out)
searchStack.push('instagram');
searchStack.push('youtube');
console.log(searchStack);
searchStack.pop();  // Removing from the end with pop maintains the stack's Last In, First Out behavior

let photoshopStack = [];  // Adding to the beginning is not efficient due to having to reindex the entire array (O(n))
photoshopStack.unshift("create new file");  // Adding to the beginning with shift() and unshift() creates a stack (Last In, First Out)
photoshopStack.unshift("resized file");
photoshopStack.unshift("cloned out wrinkle");
photoshopStack.shift();  // Removing from the beginning with shift maintains the stack's Last In, First Out behavior

/*
Stack Abstract Data Type (ADT):
A collection with the restriction that insertion 
and deletion can only be performed from 
one end, the top. 

A collection with the Last In, First Out (LIFO) principle.

The last element is the first one out.

Think of a stack of books or the Tower of Hanoi.

Operations:
All methods are O(1)
push() - Add to the top of the stack
pop() - Remove and return the top of the stack
top() - Peek the top without removing
isEmpty() - True/False based on whether the stack is empty
length() - Return the number of elements in the stack

Uses:
Function calls/Recursion
Browser history
Undo operations in text editors
Used in algorithms such as balancing parentheses for compilers
Call stack

Implementation:
JavaScript doesn't come with a built-in implementation 
of a stack.

You can implement it with an array or linked list.
A linked list allows you to increase the size of the stack 
beyond the fixed memory allocation of an array.

Adding to the beginning of an array in a stack implementation 
is O(n) since you have to reindex all of the elements.
It's best to add to the end since it's O(1).

If you care about efficiency, all you really need is 
the LIFO property. We won't care about accessing information 
based on an index, since that would mean taking things
from the middle of the stack. So, it's better to use a linked list 
since it can grow dynamically.

If using a linked list, insert at the head.
Removing at the tail will be O(n) because
you have to traverse to the second-to-last node.
Why? You remove the last node, then you 
have to update the tail property with the 
new last node.

It's better to add/remove from the head, since 
it's one direction, O(1).

You could use a doubly linked list, but 
that would take up more memory.
*/