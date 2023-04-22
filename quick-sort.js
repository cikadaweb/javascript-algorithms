// QuickSort
const mas = Array(1000)
  .fill(null)
  .map(() => getRandomBetween(-100, 100));

console.time("quickSort");
quickSort(mas);
console.timeEnd("quickSort");

console.time("sort method");
mas.sort((a, b) => a - b);
console.timeEnd("sort method");

function getRandomBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function quickSort(mas) {
  // если массив меньше 2 его не нужно сортировать
  if (mas.length < 2) {
    return mas;
  }

  // берем контрольный элемент
  const index = Math.floor(Math.random() * mas.length);
  const currentItem = mas[index];

  const more = [];
  const less = [];

  for (let i = 0; i < mas.length; i++) {
    if (i === index) {
      continue;
    }

    if (mas[i] > currentItem) {
      more.push(mas[i]);
    } else {
      less.push(mas[i]);
    }
  }
  return [...quickSort(less), currentItem, ...quickSort(more)];
}
