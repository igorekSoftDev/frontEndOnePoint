import Main from './components/Main';
import { toggleAdvancedInfo, sort } from './constants/utils';

window.onload = () => {
  const app = document.createElement('div');
  app.classList.add('app');
  app.setAttribute('data-app', 'app');
  Main(app);
  document.body.prepend(app);
  app.onclick = (event) => {
    toggleAdvancedInfo(event);
  };

  app.onchange = (event) => {
    sort(event, app);
  }
};
