let right_half_pyramid = [];
let left_half_pyramid = [];
let full_pyramid = [];

let spacedb = 8;

for (let row = 0; row < 5; row++) {
  right_half_pyramid[row] = "* ".repeat(row + 1);
  left_half_pyramid[row] = " ".repeat(spacedb) + "* ".repeat(row + 1);
  full_pyramid[row] = " ".repeat(9 - (row + 5)) + "* ".repeat(row + 1);
  spacedb -= 2;
}

let inverted_right_half_pyramid = right_half_pyramid.reverse();
let inverted_left_half_pyramid = left_half_pyramid.reverse();

console.log(right_half_pyramid.join("\n") + "\n");
console.log(left_half_pyramid.join("\n") + "\n");
console.log(full_pyramid.join("\n") + "\n");
console.log(inverted_right_half_pyramid.join("\n") + "\n");
console.log(inverted_left_half_pyramid.join("\n"));
