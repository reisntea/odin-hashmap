
import { HashMap } from "./hash-map.js";

const test = HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(`Length: ${test.length()}`);

// Should not resize array
test.set('apple', 'green');
test.set('hat', 'red');
test.set('ice cream', 'coffee');

console.log(`New length: ${test.length()}`);

// Should resize array
test.set('moon', 'silver');
test.set('moon', 'gray');

console.log(`New length: ${test.length()}`);
console.log(`Keys: ${JSON.stringify(test.keys())}`);
console.log(`Values: ${JSON.stringify(test.values())}`);
console.log(`Entries: ${JSON.stringify(test.entries())}`);

console.log(`Getting value fom key kite: ${test.get("kite")}`);

console.log("Removing lion");
test.remove("lion");
console.log(`Entries: ${JSON.stringify(test.entries())}`);
console.log(`New length: ${test.length()}`);



