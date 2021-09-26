function isSimple(num) {
  let count = 0;
  let message = `Число ${num} - простое число`;
  if (num > 1000) {
    message = 'Данные неверны';
  } else if (num === 0 || num === 1) {
    message = 'Не причисляется ни к простым, ни к составным числам';
  } else {
    for (let i = 2; i <= num; i += 1) {
      if (num % i === 0 && count < 2) {
        count += 1;
      }
    }
  }
  if (count > 1) {
    message = `Число ${num} - составное число`;
  }
  return message;
}

module.exports = isSimple;
