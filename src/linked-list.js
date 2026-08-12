import { SNode } from "./singly-node.js";

// Some functions are modified to include a key which is for hashmap
function LinkedList () {
  let head = null;

  // Append and prepend need key value for hashmap
  const append = (value, key) => {
    if (head === null) {
      head = new SNode (value, key);
    } else {
      let current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new SNode (value, key);
    }
  }

  const prepend = (value, key) => {
    let temp = new SNode (value, key);
    temp.next = head;
    head = temp;
  }

  const size = () => {
    if (head === null) return 0;
    let current = head;
    let count = 1;
    while (current.next !== null) {
      current = current.next;
      count++;
    }
    return count;
  }

  const getHead = () => {
    return head === null ?  undefined : head.value;
  }

  const getTail = () => {
    if (head === null) return undefined;
    let current = head;
    while (current.next !== null) {
      current = current.next;
    }
    return current.value;
  }

  const at = (index) => {
    let current = head;
    for (let i = 0; i < index; i++) {
      if (current.value === null) return undefined;
      current = current.next;
    }
    return current.value;
  }

  const changeAt = (index, value) => {
    let current = head;
    for (let i = 0; i < index; i++) {
      if (current.value === null) return undefined;
      current = current.next;
    }
    current.value = value
  }

  // For hashmap
  const keyAt = (index) => {
    let current = head;
    for (let i = 0; i < index; i++) {
      if (current.value === null) return undefined;
      current = current.next;
    }
    return current.key;
  }

  const pop = () => {
    if (head === null) return undefined;
    let current = head;
    let prev = null
    while (current.next !== null) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    return current.value;
  }

  // For hashmap
  const remove = (key) => {
    if (head === null) return undefined;
    let index = findIndexKey(key);
    if (index === 0) {
      head = head.next;
    } else {
      let current = head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      if (index === size() - 1) { // If removing last element
        current.next = null;
      } else {
      current.next = current.next.next;
      }
    }
  }

  const contains = (value) => {
    if (head === null) return false;
    let current = head;
    if (current.value === value) return true;
    while (current.next !== null) {
      current = current.next;
      if (current.value === value) return true;
    }
    return false;
  }

  const findIndex = (value) => {
    if (head === null) return false;
    let current = head;
    let count = 0;
    if (current.value === value) return count;
    while (current.next !== null) {
      current = current.next;
      count++;
      if (current.value === value) return count;
    }
    return -1;
  }

  // For hashmap
  const findIndexKey = (key) => {
    if (head === null) return false;
    let current = head;
    let count = 0;
    if (current.key === key) return count;
    while (current.next !== null) {
      current = current.next;
      count++;
      if (current.key === key) return count;
    }
    return -1;
  }

  const toString = () => {
    if (head === null) return "null";
    let current = head;
    let listString = `( ${current.value} )`;
    while (current.next !== null) {
      listString = listString + ` -> ( ${current.next.value} )`
      current = current.next;
    }
    listString = listString + ` -> null`;
    return listString;
  }

  return { append, prepend, size, getHead, getTail, at, changeAt, keyAt, pop, remove, contains, findIndex, findIndexKey, toString };
}

export { LinkedList };