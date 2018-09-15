var buffering = new Buffer("Hello", "utf8"); // finite size buffer and utf-8 is default encoding

console.log(buffering);
console.log(buffering[2]);
console.log(buffering.toJSON());
console.log(buffering.toString());

buffering.write("Me");
console.log(buffering.toString());
