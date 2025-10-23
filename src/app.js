import './styles/style.scss';
import { calculator } from './components/calculator/index.js';
import { themeSwitcher } from '@components/theme-switcher/index.js';
import { initThemeSwitcher } from '@utils/theme.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (root) {
    const switcher = themeSwitcher();
    root.append(switcher);
    root.append(calculator());
    initThemeSwitcher(switcher);
  }
});
