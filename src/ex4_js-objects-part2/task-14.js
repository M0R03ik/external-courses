function getRandomIntInRange(min, max) {
  const ran = min + Math.random() * (max + 1 - min);
  return Math.floor(ran);
}

module.exports = getRandomIntInRange;
