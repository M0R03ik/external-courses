function Calculator() {
  let sum = 0;
  function calculator() {

  }

  calculator.add = function add(a) {
    if (a === undefined) {
      return calculator.add;
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
  };

  calculator.subtract = function subtract(a) {
    if (a === undefined) {
      return calculator.subtract;
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
  };

  calculator.divide = function divide(a) {
    if (a === undefined) {
      return calculator.divide;
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
  };

  calculator.multiply = function multiply(a) {
    if (a === undefined) {
      return calculator.multiply;
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
  };

  calculator.getResult = () => sum;
  calculator.reset = function reset() {
    sum = 0;
    return sum;
  };

  return calculator;
}

const calculator = Calculator();

calculator.add();
calculator.subtract();
calculator.divide();
calculator.multiply();

module.exports = calculator;
