import './styles/style.scss';
import { createCalculator } from './components/calculator/index.js';
import { createThemeSwitcher } from '@components/theme-switcher/index.js';
import { initThemeSwitcher } from '@utils/theme.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (root) {
    const themeSwitcher = createThemeSwitcher();
    root.append(themeSwitcher);
    root.append(createCalculator());
    initThemeSwitcher(themeSwitcher);
  }
});
