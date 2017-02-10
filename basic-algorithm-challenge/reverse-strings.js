function reverseString(str) {
  var strReverse = str.split('').reverse().join().replace(/,/g, '');
  return strReverse;
}

console.log(reverseString("hello")); // olleh

function factorialize(num) {
  var result = num;
  if(num === 0) result = 1;
  
  while(num > 1) {
    num--;
    result = result * num;
  }
  
  if(num < 0) result = "positive natural number";
  
  return result;
}

factorialize(1)