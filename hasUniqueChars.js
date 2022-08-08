// Runtime Complexity: O(1)
// Space Complexity: O(n)
const hasUniqueChars = (string) => new Set(string).size === string.length;

console.log(hasUniqueChars("Monday"));