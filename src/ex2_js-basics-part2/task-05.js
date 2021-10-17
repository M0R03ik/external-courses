function getMaxElem(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

module.exports = getMaxElem;
