const insertionSort = (arr) => {

  let sorted = [...arr];

  // iterates forward through array
  for (let i = 0; i < arr.length; i++) {

    // swaps elements if right is less than left
    while (i > 0 && sorted[i] < sorted[i - 1]) {
      let buffer = sorted[i - 1];
      sorted[i - 1] = sorted[i];
      sorted[i] = buffer;
      i--;
    }

  }

  return sorted;
}

console.log(insertionSort([]));
console.log(insertionSort([1]));
console.log(insertionSort([33, 12, 99, 1, 0, 4, 38, 75, 21, 0, 1, 0, 1, 4, 2]));
console.log(insertionSort('zaouvaivuaonvasdnvydawpwje'));