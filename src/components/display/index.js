import '@styles/components/_display.scss';
import { createElement } from '@utils/createElement.js';

export const display = () => {
  return createElement('input', {
    class: 'display',
    attrs: {
      value: '0',
      readOnly: true,
      name: 'display',
    },
  });
};
