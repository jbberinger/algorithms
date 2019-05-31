class SinglyLinkedList {

  constructor(data = undefined) {
    this.head = new Node(data);
    this.tail = this.head;
    this.second = undefined; // holds refernce to node previous to tail
    this.length = 1;
  }

  // Appends node to tail
  push = (data) => {
    this.second = this.tail;
    this.tail = new Node(data);
    this.second.next = this.tail;
    this.length++;
  }

  // Removes and returns tail
  pop = () => {

    if (this.length === 0) return undefined;

    let tail;
    if (this.length > 2) {

      tail = new Node(this.tail.data);
      this.tail = undefined;
      // js garbage collection doesn't remove tail until all references are removed
      this.second.next = undefined;
      // Iterates over the list to locate the new second and tail
      let current = this.head;
      while (current.next.next !== undefined) {
        current = current.next;
      }
      this.second = current;
      this.tail = current.next;

    } else if (this.length === 2) {

      tail = new Node(this.tail.data);
      this.tail = undefined
      this.head.next = undefined;

    } else if (this.length === 1) {

      tail = new Node(this.head.data);
      this.head = undefined;

    }

    this.length--;
    return tail;

  }

  // Returns tail without removing it
  peek = () => this.tail;

  // Returns string representation of list
  display = () => {
    if (this.length === 0) return undefined;
    let display = '';
    let current = this.head;
    display += `(${current.data})`;
    while (current !== undefined) {
      current = current.next;
      if (current !== undefined) display += ` -> (${current.data})`;
    }
    return display;
  }

  // Returns first matching node
  find = (value) => {
    let current = this.head;
    while (current !== undefined) {
      if (current.data === value) return current;
      current = current.next;
    }
    return undefined;
  }

}

// Stores data and reference to next node in list
class Node {
  constructor(data = undefined, next = undefined) {
    this.data = data;
    this.next = next;
  }
}