const bubbleSort = (arr) => {

  let sorted = [...arr];
  let isSorted = false; // acts as a flag for sort operations

  // Continues until array is passed over without a sort operation
  while (!isSorted) {
    let i = 0;
    isSorted = true;

    // Passes over array from end to end
    for (i; i < sorted.length; i++) {
      if (sorted[i] > sorted[i + 1]) {
        isSorted = false;
        let temp = sorted[i + 1];
        sorted[i + 1] = sorted[i];
        sorted[i] = temp;
      }
    }

  }

  return sorted;

}

console.log(bubbleSort([]));
console.log(bubbleSort([1]));
console.log(bubbleSort([99, 3, 1, 0, 0, 22, 11, 1, 0, 0, 0, 1, 9, 22]));