// Runtime Complexity: O(n)
// Space Complexity: O(n)
const pangram = (string) => new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;

console.log(pangram("The quick brown fox jumps over the lazy dog!"));