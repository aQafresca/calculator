import '@styles/components/_calculator.scss';
import { createCalcDisplay } from '../display/index.js';
import { createButtons } from '../buttons/index.js';
import { createElement } from '@utils/createElement.js';

export const createCalculator = () => {
  const container = createElement('div', {
    class: 'calculator',
  });

  const display = createCalcDisplay();
  const buttons = createButtons();

  container.append(display, buttons);

  return container;
};
