var buffering = new Buffer("Hello", "utf8"); // finite size buffer and utf-8 is default encoding

console.log(buffering);
console.log(buffering[2]);
console.log(buffering.toJSON());
console.log(buffering.toString());

buffering.write("Me");
console.log(buffering.toString());

//Node cannot deal with binary data and buffer helps to do the same..

// But in ES6 it can be dealt using Typed Arrays

// ===> ES6 TYPED ARRAYS

var buffer = new ArrayBuffer(8); //Size in bytes = 64 bits 0s & 1s

var view = new Int32Array(buffer);

view[0] = 12;
view[1] = 45;
console.log(view);
