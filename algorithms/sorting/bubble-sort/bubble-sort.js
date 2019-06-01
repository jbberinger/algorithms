const bubbleSort = (arr) => {

  let sorted = [...arr];
  let isSorted = false; // acts as a flag for sort operations

  // Continues until array is passed over without a sort operation
  while (!isSorted) {

    let i = 0;
    isSorted = true;

    // Passes over array from end to end
    for (i; i < sorted.length; i++) {

      // Performs swap if next element in array is greater
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