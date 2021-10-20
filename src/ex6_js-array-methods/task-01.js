function analogSlice(array, begin, end) {
  const newArr = [];
  let j = 0;
  let firstItem = begin;
  let lastItem = end;

  if (end === undefined || end > array.length) {
    lastItem = array.length;
  }

  if (begin === undefined || begin < -array.length) {
    firstItem = 0;
  }

  if (firstItem < 0) {
    firstItem += array.length;
  }

  if (lastItem < 0) {
    lastItem += array.length;
  }

  for (let i = firstItem; i < lastItem; i += 1) {
    newArr[j] = array[i];
    j += 1;
  }

  return newArr;
}

module.exports = analogSlice;
