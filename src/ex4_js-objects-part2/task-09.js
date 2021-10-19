function insertStrToStr(str, word, position) {
  const arr = str.split(' ');
  const arr1 = arr.slice(0, position + 1);
  const arr2 = arr.slice(position + 1);

  return arr1.concat(word, arr2).join(' ');
}

module.exports = insertStrToStr;
