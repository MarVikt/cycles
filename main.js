let arr = [];
let isSimple = true;

let getSum = function (question) {
  let sum;
  do {
    sum = prompt(question);
  } while (isNaN(parseFloat(sum)) || !isFinite(sum));
  return sum;
};

// 7 многозначных чисел
alert('Введите 7 многозначных чисел');
for (let i = 0; i < 7; i++) {
  arr[i] = getSum('Многозначное число номер ' + (i + 1));
}

for (let i = 0; i < 7; i++) {
  if (arr[i][0] === '2' || arr[i][0] === '4') {
   console.log(arr[i]); 
  }
}

// простые числа от 1 до 100
console.log('Простые числа:');
for (let i = 1; i <= 100; i++) {
  isSimple = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (Math.round(i / j) === i / j) {
      isSimple = false;
      break;
    }
  }
  if (isSimple) console.log(i + ' - делители этого числа: 1 и ' + i);
}
