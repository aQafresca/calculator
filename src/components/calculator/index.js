import { createCalculatorState } from '@state';
import { view } from '@components/calculator/view.js';
import { handleInput } from '@components/calculator/controller.js';
let state = createCalculatorState();

export const calculator = () => {
  const { container, buttonElement, updateDisplay } = view();

  updateDisplay(state.displayValue);

  buttonElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
      const key = event.target.textContent;
      const type = event.target.dataset.typeLogic;

      const newState = handleInput(state, type, key);

      if (newState !== state) {
        state = newState;

        updateDisplay(state.displayValue);
      }
    }
  });

  return container;
};
