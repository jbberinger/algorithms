// Returns 2d array of pascals triangle.
const pascalsTriangle = (depth) => {
  if (depth < 1) {
    return [];
  } else if (depth === 1) {
    return [[1]];
  }

  let pt = [[1], [1, 1]];
  let last = [1, 1];
  // Iterates to given depth
  for (let i = 0; i < depth - 2; i++) {
    let left = [1];
    let right = [1];
    // Iterates last row and performs addition with offset
    for (let j = 0; j < Math.floor(last.length / 2); j++) {
      left.push(last[j] + last[j + 1]);
      right.unshift(last[j] + last[j + 1]);
    }
    // Adjusts right side if last row is even
    if (last.length % 2 === 0) {
      right.shift();
    }
    last = [...left, ...right];
    pt.push(last);
  }
  return pt;
}

// Returns symetrically formatted string representation of pascals triangle.
const stringify = (pt) => {
  let depth = pt.length;
  if (depth === 0) {
    return 'pascals triangle is undefined at depths < 1';
  } else if (depth === 1) {
    return '1';
  }

  let stringRows = [];
  let longestNum = Math.max(...pt[depth - 1]).toString().length;
  // Iterates through each row
  for (let i = 0; i < depth; i++) {
    let row = '';
    let currentRow = pt[i];
    // Iterates through each row value to determine inner spacing
    for (let j = 0; j < currentRow.length; j++) {
      let currentNumLength = currentRow[j].toString().length;
      let lengthDiff = longestNum - currentNumLength + 1;
      let space = '';
      // Creates inner space
      for (let k = 0; k < lengthDiff; k++) {
        space += ' ';
      }
      row = `${row}${currentRow[j]}${space}`
    }
    stringRows.push(row);
  }

  let string = '';
  let longestRow = stringRows[depth - 1].length;
  // Iterates row strings containing inner spacing to determine left spacing
  for (let i = 0; i < depth; i++) {
    let leftSpaceCount = (longestRow - stringRows[i].length) / 2;
    let leftSpace = '';
    // Creates left space
    for (let j = 0; j < leftSpaceCount; j++) {
      leftSpace += ' ';
    }
    string = `${string}${leftSpace}${stringRows[i]}\n`;
  }
  return string;
}

console.log(stringify(pascalsTriangle(23)));