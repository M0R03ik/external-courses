function removeSpaces(str) {
  if (str[0] === ' ' && str[str.length - 1] === ' ') {
    return str.slice(1, -1);
  }

  if (str[0] === ' ') {
    return str.slice(1);
  }

  if (str[str.length - 1] === ' ') {
    return str.slice(0, -1);
  }

  return str;
}

module.exports = removeSpaces;
