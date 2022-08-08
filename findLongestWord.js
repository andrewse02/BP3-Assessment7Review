// Runtime Complexity: O(n log(n))
// Space Complexity: O(n)

const findLongestWord = (words) => {
    return words.sort((a,b) => b.length - a.length)[0].length;
};

console.log(findLongestWord(["hi", "hello"]));