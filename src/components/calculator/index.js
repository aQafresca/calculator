import '@styles/components/_calculator.scss';
import { display } from '../display/index.js';
import { buttons } from '../buttons/index.js';
import { createElement } from '@utils/createElement.js';

export const calculator = () => {
  const container = createElement('div', {
    class: 'calculator',
  });

  const displayElement = display();
  const buttonElement = buttons();

  container.append(displayElement, buttonElement);

  return container;
};
