function getDeepCloneObject(obj) {
  const clone = {};
  const arr = Object.keys(obj);
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(obj[arr[i]])) {
      clone[arr[i]] = obj[arr[i]].slice();
    } else if (typeof obj[arr[i]] === 'object') {
      clone[arr[i]] = getDeepCloneObject(obj[arr[i]]);
    } else {
      clone[arr[i]] = obj[arr[i]];
    }
  }
  return clone;
}

module.exports = getDeepCloneObject;
