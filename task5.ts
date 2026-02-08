// Написать функцию, которая разворачивает вложенные массивы в один

const array = [1, [2, 3], [4], 5, [6, 7, 8]];

//const result = [1, 2, 3, 4, 5, 6, 7, 8];

const unpackArray = (arr: (number | number[])[]) => {
  const result: number[] = [];
  for (const value of arr) {
    if (Array.isArray(value)) {
      for (const subvalue of value) {
        result.push(subvalue);
      }
    } else {
      result.push(value);
    }
  }
  return result;
};

console.log(unpackArray(array));
