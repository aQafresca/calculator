import { DATA_ATTRIBUTES, LOCALSTORAGE_KEY } from '@constants';

const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const applyTheme = (theme) => {
  document.documentElement.setAttribute(DATA_ATTRIBUTES.THEME, theme);
};

export const setTheme = (theme, save = true) => {
  applyTheme(theme);
  if (save) localStorage.setItem(LOCALSTORAGE_KEY.THEME, theme);
};

export const getSavedTheme = () => {
  return localStorage.getItem(LOCALSTORAGE_KEY.THEME);
};

export const initThemeSwitcher = (switchElement) => {
  const input = switchElement.querySelector('.switch__input');
  const savedTheme = getSavedTheme();

  if (savedTheme) {
    setTheme(savedTheme, false);
    input.checked = savedTheme === 'dark';
  } else {
    const system = getSystemTheme();
    setTheme(system, false);
    input.checked = system === 'dark';
  }

  input.addEventListener('change', () => {
    const newTheme = input.checked ? 'dark' : 'light';
    setTheme(newTheme);
  });

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      const saved = getSavedTheme();
      if (!saved) {
        const system = e.matches ? 'dark' : 'light';
        setTheme(system, false);
        input.checked = system === 'dark';
      }
    });
};
