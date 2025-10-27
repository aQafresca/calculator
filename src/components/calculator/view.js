import { createElement } from '@utils/createElement.js';
import { display } from '../display/index.js';
import { buttons } from '../buttons/index.js';
import '@styles/components/_calculator.scss';

export const view = () => {
  const container = createElement('div', { class: 'calculator' });
  const displayElement = display();
  const buttonElement = buttons();

  container.append(displayElement, buttonElement);

  return {
    container,
    displayElement,
    buttonElement,
    updateDisplay(value) {
      displayElement.value = value;
    },
  };
};
