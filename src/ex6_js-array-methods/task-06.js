function analogReduce(array, callback, initialValue) {
  let previousValue = initialValue;

  if (initialValue === undefined) {
    previousValue = array[0];
    for (let i = 1; i < array.length; i += 1) {
      previousValue = callback(previousValue, array[i], i, array);
    }
  } else {
    for (let i = 0; i < array.length; i += 1) {
      previousValue = callback(previousValue, array[i], i, array);
    }
  }

  return previousValue;
}

module.exports = analogReduce;
