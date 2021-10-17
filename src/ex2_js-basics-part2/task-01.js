function getTypeOfArg(arg) {
  let type = typeof arg;
  if (!(type === 'string' || type === 'number') || isNaN(arg)) {
    type = undefined;
  }

  return type;
}

module.exports = getTypeOfArg;
