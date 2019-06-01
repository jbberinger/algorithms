const recursiveBubbleSort = (arr, isSorted = true) => {

  let sorted = [...arr];

  // Passes over array from end to end
  for (let i = 0; i < sorted.length; i++) {

    // Performs swap if next element in array is greater
    if (sorted[i] > sorted[i + 1]) {

      isSorted = false;
      let temp = sorted[i + 1];
      sorted[i + 1] = sorted[i];
      sorted[i] = temp;

    }

  }

  // ends recursion if array is sorted
  if (isSorted === true) return sorted;

  return recursiveBubbleSort(sorted, true);

}