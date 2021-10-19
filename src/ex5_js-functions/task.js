function Calculator() {
  let sum = 0;

  const result = {
    add(a) {
      if (a === undefined) {
        return result.add;
      }
      sum += a;
      function func(b) {
        if (b === undefined) {
          return func;
        }
        sum += b;
        return func;
      }
      return func;
    },
    subtract(a) {
      if (a === undefined) {
        return result.subtract;
      }
      sum -= a;
      function func(b) {
        if (b === undefined) {
          return func;
        }
        sum -= b;
        return func;
      }
      return func;
    },
    divide(a) {
      if (a === undefined) {
        return result.divide;
      }
      sum /= a;
      function func(b) {
        if (b === undefined) {
          return func;
        }
        sum /= b;
        return func;
      }
      return func;
    },
    multiply(a) {
      if (a === undefined) {
        return result.multiply;
      }
      sum *= a;
      function func(b) {
        if (b === undefined) {
          return func;
        }
        sum *= b;
        return func;
      }
      return func;
    },
    reset() {
      sum = 0;
      return sum;
    },
    getResult() { return sum; },
  };

  return result;
}

const calculator = Calculator();

calculator.add();
calculator.subtract();
calculator.divide();
calculator.multiply();

module.exports = calculator;
