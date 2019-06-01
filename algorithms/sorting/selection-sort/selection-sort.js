const selectionSort = (arr) => {

  let unsorted = [...arr];
  let sorted = [];

  // Iterates unsorted array until its empty
  while (unsorted.length > 0) {

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
    min.value = undefined;
    min.index = undefined;

  }

  return sorted;

}

console.log(selectionSort([99, 22, 11, 0, 2, 4, 6, 7]));