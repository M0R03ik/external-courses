function isValuesEqual(arr) {
  let isTrue = true;
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] !== arr[i + 1]) {
      isTrue = false;
    }
  }

  return isTrue;
}

module.exports = isValuesEqual;
