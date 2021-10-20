function analogEvery(array, callback) {
  let count = 1;
  for (let i = 0; i < array.length; i += 1) {
    if (!(callback(array[i], i, array))) {
      count = 0;
    }
    if (!count) {
      return false;
    }
  }

  return true;
}

module.exports = analogEvery;
