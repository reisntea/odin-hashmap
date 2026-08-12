import { LinkedList } from "./linked-list.js";

function HashMap () {
  let capacity = 16;
  const loadFactor = 0.75;

  // Array containing all the keys for the hashmap
  const keySet = [];

  // Array containing the buckets that store the elements
  // Each bucket contains a linked list for the values
  const buckets = [];

  const set = (key, value) => {
    let index = hash(key) % capacity;
    checkIndex(index);
    if (!has(key)) {
      if (length() === capacity * loadFactor) rehash();
      keySet.push(key);
      buckets[index].append(value, key);
    } else {
      const listIndex = buckets[index].findIndexKey(key);
      buckets[index].changeAt(listIndex, value);
    }
  }

  const get = (key) => {
    if (!has(key)) return null;
    let index = hash(key) % capacity;
    checkIndex(index);
    return buckets[index].at(buckets[index].findIndexKey(key));
  }

  const has = (key) => {
    return keySet.includes(key);
  }

  const remove = (key) => {
    if (!has(key)) return false;
    let index = hash(key) % capacity;
    checkIndex(index);
    buckets[index].remove(key);
    keySet.splice(keySet.indexOf(key), 1);
    return true;
  }

  const length = () => {
    let count = 0;
    for (let i = 0; i < keySet.length; i++) {
      if (keySet[i] !== undefined) count++;
    }
    return count;
  }

  const clear = () => {
    buckets.length = 0;
    keySet.length = 0;
  }

  const keys = () => {
    return keySet;
  }

  const values = () => {
    const valuesArray = [];
    for (const key in keySet) {
      valuesArray.push(get(keySet[key]));
    }
    return valuesArray;
  }

  const entries = () => {
    const entriesArray = [];
    for (const key in keySet) {
      entriesArray.push([keySet[key], get(keySet[key])]);
    }
    return entriesArray;
  }
 
  // Generates a hash code given a key
  function hash (key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  // Fills the buckets array with linked lists at each index up to the total capacity
  // Can be called whenever capacity increases
  function fillBuckets () {
    for (let i = 0; i < capacity; i++) {
      buckets.push(LinkedList());
    }
  }

  function rehash() {
    const tempArray = entries();
    clear();
    capacity *= 2;
    fillBuckets();
    for (const value in tempArray) {
      set(tempArray[value][0], tempArray[value][1]);
    }
  }

  // Called every time we try to access the buckets array to make sure the size of the buckets
  // is limited
  function checkIndex (index) {
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
  }

  fillBuckets();

  return { set, get, has, remove, length, clear, keys, values, entries };
}

export { HashMap };