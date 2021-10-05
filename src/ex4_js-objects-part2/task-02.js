function getObjWithoutProto() {
  return { __proto__: null };
}

module.exports = getObjWithoutProto;
