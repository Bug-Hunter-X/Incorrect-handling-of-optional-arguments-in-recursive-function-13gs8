function foo(a, b) {
  if (a === 0) {
    return 0;
  }
  return b ? a + foo(a - 1, b) : a;
}
console.log(foo(5, 2)); // Output: 15
console.log(foo(5)); //Output: 15