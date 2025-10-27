export const createElement = (tag, options = {}) => {
  const element = document.createElement(tag);

  if (options.class) element.classList.add(...options.class.split(' '));
  if (options.text) element.textContent = options.text;
  if (options.attrs) {
    Object.entries(options.attrs).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  return element;
};
