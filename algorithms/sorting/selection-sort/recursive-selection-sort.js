const recursiveSelectionSort = (arr, sorted = []) => {

  let unsorted = [...arr];

  // Stores the current minimum and index in the unsorted subarray
  let min = {
    value: undefined,
    index: undefined
  }

  // Iterates unsorted subarray
  for (let i = 0; i < unsorted.length; i++) {

    // Finds minimum value in unsorted subarray
    if (unsorted[i] < min.value || min.value === undefined) {
      min.value = unsorted[i];
      min.index = i;
    }

  }

  // Minimum value is added to sorted array and removed from unsorted subarray
  sorted.push(min.value);
  unsorted = [...unsorted.slice(0, min.index), ...unsorted.slice(min.index + 1)];

  // Recursively calls function until the unsorted array is empty
  if (unsorted.length > 0) return recursiveSelectionSort(unsorted, sorted);

  return sorted;

}

console.log(recursiveSelectionSort([99, 22, 11, 0, 2, 4, 6, 7]));