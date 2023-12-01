// function isPalindrome(str) {
//   let result = [...str.toLowerCase().replaceAll(' ', '')].join('');
//   if (result.endsWith('?') || result.endsWith('!')) {
//     result = result.slice(0, result.length - 1);
//   }
//   console.log(result)

//   return result.replaceAll(',', '') === [...result].reverse().join('').replaceAll(',', '');
// }
// console.log(isPalindrome('A man, a plan, a canal, Panama!'))


// let sentence = 'The quick brown fox';
// let news = sentence.toLowerCase().split(' ');
// let max = 0;
// let longest = '';
// for (let i = 0; i < news.length; i++) {
//   if (news[i].length > max) {
//     max = news[i].length;
//     longest = news[i];
//   }
// }
// console.log(longest);

// function reverseWords(str) {
//   // let arr = [];
//   // let originalArr = str.split(' ');
//   // const(result)
//   const result = str.split(' ').map((item) => [...item].reverse().join('')).join(' ');
//   return result.join(' ');
// }

// function invertCase(str) {
//   let newArr = [];
//   for (let i = 0; i < [...str].length; i += 1) {
//     if ([...str][i] === [...str][i].toLowerCase()) {
//       newArr.push([...str][i].toUpperCase());
//     } else if ([...str][i] === [...str][i].toUpperCase()) {
//       newArr.push([...str][i].toLowerCase());
//     }
//   }
//   return newArr.join('');
// }
// 1==========================================================================================1
function getCardId(value) {
  const cardsToIndex = {
    'A': 1,
    'J': 11,
    'Q': 12,
    'K': 13,
    '♣': -1,
    '♦': 12,
    '♥': 25,
    '♠': 38
  };
  let valueOfCard = value.slice(0, -1);
  let symbolOfCard = value.slice(-1);
  let result = 0;
  if (Number.isInteger(Number(valueOfCard))) {
    result = Number(valueOfCard) + cardsToIndex[symbolOfCard];
  } else {
    result = cardsToIndex[valueOfCard] + cardsToIndex[symbolOfCard];
  }
  return result;
}
// console.log(getCardId('K♠'))
//1=====================================================================================1

//(number >= 65 && number < 78) ||
//(number >= 97 && nubmer < 110) то + 12

function encodeToRot13(str) {
  const newArr = [];
  const arr = [...str];
  const a = [...str].map(item => {
    let result = item.charCodeAt();
    if ((item.charCodeAt() >= 65 && item.charCodeAt() < 78) || (item.charCodeAt() >= 97 && item.charCodeAt() < 110)) {
      result = item.charCodeAt() + 13;
    } else if ((item.charCodeAt() >= 78 && item.charCodeAt() < 91) || (item.charCodeAt() >= 110 && item.charCodeAt() < 123)) {
      result = item.charCodeAt() - 13;
    }
    return result;
  });
  return String.fromCharCode(...a);
}
// let h = 'N';
// let m = 110;
// let arr = [m, h, m, h];
console.log(encodeToRot13('v yhi h gbb'))
// console.log(getCardId('6♣'))
