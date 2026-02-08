// Напишите функцию, которая найдет максимальное и минимальное число в массиве

const array: number[] = [5, 2, -4, -8, 23, 55, 34, 0, 8];

const findMinMax = (arr: number[]) => {
  let min = arr[0] as number;
  let max = arr[0] as number;
  for (const value of arr) {
    if (value < min) {
      min = value;
    }
    if (value > max) {
      max = value;
    }
  }
  return `Min=${min}, Max = ${max}`;
};

console.log(findMinMax(array));
