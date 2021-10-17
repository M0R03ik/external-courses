function showProperties(obj) {
  const arr = Object.keys(obj);
  for (let i = 0; i < arr.length; i += 1) {
    if (obj.hasOwnProperty(arr[i])) {
      console.log(`${arr[i]}: ${obj[arr[i]]}`);
    }
  }
}

module.exports = showProperties;
