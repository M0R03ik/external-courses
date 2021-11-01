function analogSome(array, callback) {
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      count = 1;
    }
    if (count) {
      return true;
    }
  }

  return false;
}

module.exports = analogSome;
