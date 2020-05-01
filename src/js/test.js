let x = 0;
let i = 0;
function random(min, max) {
  x = min + Math.random() * (max - min);
  return x;
}

function da() {
  let a = +prompt('a');
  let b = +prompt('b');
  do {
    i++;
    x = Math.floor(random(a, b)) + 1;
    if (x == b) {
      console.log(`Finaly, we have got ${x} on step ${i}`);
      console.log(x);
      i = 0;
      if (i > b) {
        console.log('That took lot of tries!')
      }
    } else
      console.log(`On step ${i} we have here ${+x}`);
  } while (x != b);
}

/* Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0». */

let arr = [];
let sum = 0;


function sumInput() {
  while (true) {
    let x = prompt(`?`);
    if (x === "" || x === null || !isFinite(x)) break;
    arr.push(+x);
  }
  return arr;
}

function sumArr() {
  for (let e of arr) {
    sum += e;
  }
  return sum;
}



let testArr = [2.55, 3.65, 10.54, 11.43, 43, 11, 0.65, 7.43];



let testArrSorted = testArr.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  }
});


let arrMapped = testArr.map((elem) => {
  return elem;
});


let arrMappedReversed = arrMapped.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else if (a > b) {
    return -1;
  }
});



let newArr = [15.43, 9.32, 12, 33, 11.3, 0];

let newArrMapped = newArr
  .sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a === b) {
      return 0;
    } else if (a < b) {
      return -1;
    }
  })
  .map((a, b) => ({ [b]: a }));

let newArrFiltered = newArr.filter((value) => value > 10);


console.log(newArr === newArrFiltered);
console.log('This is original array ' + newArr);
console.log('This is filtered array ' + newArrFiltered);

let animalsArray = ['cat', 'dog', 'cow', 'horse', 'sheep', 'monkey', 'goat'];

let sortAnimals = function (query) {
  return animalsArray.filter((el) =>
    el.includes(query));
}

let sortAnimals2 = animalsArray.filter((el) => el.includes('a'))

// console.log(sortAnimals('a'));
// console.log(sortAnimals2);
// console.log(animalsArray === sortAnimals2);


let prices = [15.43, 9.32, 12, 33, 11.3, 1.43];

let sumOfPricesAndTaxed = prices
  .map((el) => el * 1.13)
  .reduce((a, b) => (a + b), 0);


let summ = 0;
let sumForEached = prices.forEach((a) => summ += a * 1.13);
// console.log(sumOfPricesAndTaxed);
// console.log(summ);

let joinedAnimals = animalsArray.join(', ');
// console.log(joinedAnimals);
let splitedAnimals = joinedAnimals.split(', ');
// console.log(splitedAnimals);
let copiedSplitedAnimals = [...splitedAnimals];
// console.log(copiedSplitedAnimals);
splitedAnimals.push('rabbit');
// console.log(splitedAnimals);
// console.log(copiedSplitedAnimals);

// console.log(Math.min(...prices));

let nameData = ['Nikolay', 'Grigoryev', 'Mr', 30];
const [firstName, lastName, ...otherInfo] = nameData;

console.log(firstName, lastName, otherInfo);
