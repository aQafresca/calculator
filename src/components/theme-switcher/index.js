import '@styles/components/_theme.scss';
import { createElement } from '@utils/createElement.js';

export const createThemeSwitcher = () => {
  const container = createElement('div', {
    class: 'switch',
  });

  const labelElement = createElement('label', {
    class: 'switch__label',
    attrs: { for: 'switch' },
  });

  const inputElement = createElement('input', {
    class: 'switch__input',
    attrs: { id: 'switch', type: 'checkbox' },
  });

  const sliderElement = createElement('span', {
    class: 'switch__slider',
  });

  labelElement.append(inputElement, sliderElement);
  container.append(labelElement);

  return container;
};
