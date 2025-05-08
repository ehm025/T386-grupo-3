function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  let preview = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    let next = current + preview
    preview = current
    current = next
  }
  return current;
}

console.log(fibonacci(6))

module.exports = fibonacci;
