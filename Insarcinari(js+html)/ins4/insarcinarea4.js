const sumEven = n => (n * (n + 1))
const evenSumBetween = (a, b) => {
  let result = sumEven(a/2) + sumEven ((b-1) / 2);  
return result;
    };
alert(sumEven(3, 8));