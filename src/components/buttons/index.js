import '@styles/components/_buttons.scss';
import { buttonConfig } from '@components/buttons/buttonConfig.js';
import { createElement } from '@utils/createElement.js';

export const buttons = () => {
  const container = createElement('div', {
    class: 'calculator__buttons',
  });

  buttonConfig.forEach(({ label, type, typeLogic }) => {
    const button = createElement('button', {
      class: label !== '0' ? `btn btn__${type}` : `btn btn__${type}-span`,
      text: label,
      attrs: {
        'data-type-logic': typeLogic,
      },
    });

    container.appendChild(button);
  });

  return container;
};
