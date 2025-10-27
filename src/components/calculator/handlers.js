import { resetCalculatorState } from '@state';
import { performOperation } from '@utils/operations.js';

const handleError = () => {
  const newState = resetCalculatorState();

  return { ...newState, displayValue: 'Error' };
};

export const handleNumberInput = (state, key) => {
  const newState = { ...state };

  const isEnteringFirst = newState.sign === '';
  const targetField = newState.sign === '' ? 'first' : 'second';
  let currentValue = newState[targetField] || '';

  if (key === '.' && currentValue.includes('.')) return state;

  if (currentValue === '0' && key === '0') return state;

  const input = currentValue === '' && key === '.' ? '0.' : key;

  if (newState.finished && isEnteringFirst) {
    newState.first = '';
    newState.finished = false;
    currentValue = '';
  }

  if (newState.finished && !isEnteringFirst) {
    newState.second = input;
    newState.finished = false;
    newState.displayValue = newState.second;

    return newState;
  }

  if (currentValue === '0' && input !== '.' && input !== '0') {
    newState[targetField] = input;
  } else {
    newState[targetField] = currentValue + input;
  }

  newState.displayValue = newState[targetField];

  return newState;
};

export const handleOperatorInput = (state, key) => {
  const newState = { ...state };

  if (newState.first === '') return state;

  if (newState.first === 'Error') {
    return handleError();
  }

  try {
    if (newState.second !== '') {
      newState.first = performOperation(newState.first, newState.second, newState.sign).toString();
      newState.second = '';
    }

    newState.sign = key;
    newState.displayValue = newState.sign;
    newState.finished = false;

    return newState;
  } catch {
    return handleError();
  }
};

export const handleEqualInput = (state) => {
  if (!state.sign || state.second === '') return state;

  try {
    const newState = { ...state };

    newState.first = performOperation(newState.first, newState.second, newState.sign).toString();

    newState.second = '';
    newState.sign = '';
    newState.finished = true;
    newState.displayValue = newState.first;

    return newState;
  } catch {
    return handleError();
  }
};

export const handlePercent = (state) => {
  if (state.first === '' || isNaN(parseFloat(state.first))) {
    if (state.first === '') return { ...state, displayValue: '0' };

    return handleError();
  }

  const newState = { ...state };

  if (newState.second === '' && newState.sign === '') {
    newState.first = (parseFloat(newState.first) / 100).toString();
    newState.displayValue = newState.first;
  } else if (newState.first !== '' && newState.second !== '') {
    newState.second = ((parseFloat(newState.first) * parseFloat(newState.second)) / 100).toString();
    newState.displayValue = newState.second;
  }

  return newState;
};

export const handleToggleSign = (state) => {
  const newState = { ...state };

  if (newState.second !== '') {
    newState.second = (-parseFloat(newState.second)).toString();
    newState.displayValue = newState.second;
  } else {
    newState.first = (-parseFloat(newState.first || '0')).toString();
    newState.displayValue = newState.first;
  }

  return newState;
};
