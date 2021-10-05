function insertStrToStr(str, word, position) {
  const arr = str.split(' ');
  arr.splice(position + 1, 0, word);
  return arr.join(' ');
}

module.exports = insertStrToStr;
