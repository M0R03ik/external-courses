function findInProto(name, obj) {
  if (!(obj.hasOwnProperty(name))) {
    return obj[name];
  }

  return undefined;
}

module.exports = findInProto;
