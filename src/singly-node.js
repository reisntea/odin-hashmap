class SNode {
  // Declaring private fields
  #value;
  #nextNode;
  #key; // For hashmap 

  // Constructor sets the values to null by default
  constructor(value = null, key = null) {
    this.#value = value;         // value stored in the node
    this.#key = key;
    this.#nextNode = null;   // pointer to the next node in the linked list
  }
  get value () {
    return this.#value;
  }
  get next () {
    return this.#nextNode;
  }
  get key () {
    return this.#key;
  }
  set value (value) {
    this.#value = value;
  }
  set next (SNode) {
    this.#nextNode = SNode;
  }
  set key (key) {
    this.#key = key;
  }
}

export { SNode };