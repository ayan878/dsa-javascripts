class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    // Create a new node with the provided value
    const newNode = new Node(value);
    // Initialize head and tail to the new node
    this.head = newNode;
    this.tail = newNode;
    // Initialize the length to 1 (since we have one node)
    this.length = 1;
  }

  // Method to append a new node with a given value to the list
  push(value) {
    const newNode = new Node(value);
    if(!this.head){
        this.head=newNode;
        this.tail=newNode;
    }
    else {
      // If the list is not empty, set the new node as the next node of the tail
      this.tail.next = newNode;
      // Update the tail to be the new node
      this.tail = newNode;
      // Increment the length
      this.length ++;
      return this;
    }
  }

  // Method to print the linked list
  printList() {
    let current = this.head;
    let list = "";
    while (current) {
      list += current.value + " -> ";
      current = current.next;
    }
    console.log(list + "null");
  }
}

// Create a linked list with initial value 1
let myLinkedList = new LinkedList(1);

// Append additional nodes
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);

// Print the linked list
myLinkedList.printList(); // Output: 1 -> 2 -> 3 -> 4 -> null
