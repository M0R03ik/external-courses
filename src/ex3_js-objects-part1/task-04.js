function addProperty(str, obj) {
  const clone = { ...obj };
  if (!(obj.hasOwnProperty(str))) {
    clone[str] = 'new';
  }
  return clone;
}

module.exports = addProperty;
