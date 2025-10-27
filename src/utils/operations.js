import { add, multiply, subtract, divide } from '@utils/math.js';

export const performOperation = (a, b, sign) => {
  const x = parseFloat(a);
  const y = parseFloat(b);

  switch (sign) {
    case '+':
      return add(x, y);
    case '-':
      return subtract(x, y);
    case '*':
      return multiply(x, y);
    case '/':
      return divide(x, y);
    default:
      return x;
  }
};
