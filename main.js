let arr = [];

let getSum = function (question) {
  let sum;
  do {
    sum = prompt(question);
  } while (isNaN(parseFloat(sum)) || !isFinite(sum));
  return sum;
};

alert('Введите 7 многозначных чисел');
for (let i = 0; i < 7; i++) {
  arr[i] = getSum('Многозначное число номер ' + (i+1));
}

for (let i = 0; i < 7; i++) {
  if (arr[i][0] === '2' || arr[i][0] === '4') {
   console.log(arr[i]); 
  }
}

