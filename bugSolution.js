function foo(a, b) {
  if (a === 0) {
    return 0;
  }
  if (b === undefined) {
    return a + foo(a - 1);
  } else {
    return a + foo(a - 1, b);
  }
}
console.log(foo(5, 2)); // Output: 15
console.log(foo(5)); // Output: 15