export const createCalculatorState = () => ({
  first: '',
  second: '',
  sign: '',
  finished: false,
  displayValue: '0',
});

export const resetCalculatorState = () => {
  return createCalculatorState();
};
