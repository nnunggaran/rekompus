import 'regenerator-runtime';
import 'bootstrap';
import 'sweetalert';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';
import '../sass/main.scss';
import '../sass/responsive.scss';
import '../sass/loading.scss';
import main from './views/main';
import App from './views/app';
import swRegister from './utils/sw-register';

main();

const app = new App({
  button: document.querySelector('.navbar-toggler'),
  drawer: document.querySelector('.navbar-collapse'),
  content: document.querySelector('main#content'),
});

window.addEventListener('hashchange', () => {
  main();
  app.renderPage();
});

window.addEventListener('load', () => {
  main();
  app.renderPage();
  swRegister();
});
