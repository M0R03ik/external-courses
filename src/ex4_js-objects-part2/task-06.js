function toCamelCase(str) {
  const arr = str.split(' ');
  return arr.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

module.exports = toCamelCase;
