function countVowels(str) {
  const vowels = ['a', 'e', 'o', 'i', 'u'];
  let counter = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (vowels.includes(str.toLowerCase()[i])) {
      counter += 1;
    }
  }
  return counter;
}
console.log(countVowels(''))
