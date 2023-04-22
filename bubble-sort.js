// BubbleSort
mas = [1, -2, 0, -3, -5, -6, 100, 4, 2];

bubbleSort(mas);

function bubbleSort(mas) {
  for (let i = 0; i < mas.length - 1; i++) {
    for (let j = 0; j < mas.length - 1 - i; j++) {
      // -i чтобы не пробегаться по уже отсортированным элементам
      if (mas[j] > mas[j + 1]) {
        temp = mas[j];
        mas[j] = mas[j + 1];
        mas[j + 1] = temp;
      }
    }
  }
}

console.log(mas);

// На каждой итерации будет сортироваться 1 элемент
// mas = [1, -2, 0, -3];
// console.log(mas);
// for (let i = 0; i < mas.length - 1; i++) {
//   if (mas[i] > mas[i + 1]) {
//     temp = mas[i + 1];
//     mas[i + 1] = mas[i];
//     mas[i] = temp;
//   }
// }
// console.log(mas);
// for (let i = 0; i < mas.length - 1; i++) {
//   if (mas[i] > mas[i + 1]) {
//     temp = mas[i + 1];
//     mas[i + 1] = mas[i];
//     mas[i] = temp;
//   }
// }
// console.log(mas);
// for (let i = 0; i < mas.length - 1; i++) {
//   if (mas[i] > mas[i + 1]) {
//     temp = mas[i + 1];
//     mas[i + 1] = mas[i];
//     mas[i] = temp;
//   }
// }
// console.log(mas);
