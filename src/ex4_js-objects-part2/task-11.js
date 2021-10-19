function countSymbolInStr(str) {
  const arr = str.split('').sort();
  let counter = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === arr[i + 1]) {
      counter += 1;
    } else {
      console.log(`${arr[i]}: ${counter}`);
      counter = 1;
    }
  }
}

module.exports = countSymbolInStr;
