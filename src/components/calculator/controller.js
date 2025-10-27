import {
  handlePercent,
  handleNumberInput,
  handleToggleSign,
  handleOperatorInput,
  handleEqualInput,
} from '@components/calculator/handlers.js';
import { resetCalculatorState } from '@state';

export const handleInput = (state, type, key) => {
  let newState;

  switch (type) {
    case 'clear':
      newState = resetCalculatorState();
      break;

    case 'number':
      newState = handleNumberInput(state, key);
      break;

    case 'operator':
      newState = handleOperatorInput(state, key);
      break;

    case 'equal':
      newState = handleEqualInput(state);
      break;

    case 'toggle-sign':
      newState = handleToggleSign(state);
      break;

    case 'percent':
      newState = handlePercent(state);
      break;

    default:
      newState = state;
      break;
  }

  return newState;
};
