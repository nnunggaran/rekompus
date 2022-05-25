import '../components/app-bar';
import '../components/foot-bar';

const main = () => {
  const headerEl = document.querySelector('header');
  headerEl.innerHTML = '<app-bar></app-bar>';
  const footerEl = document.querySelector('footer');
  footerEl.innerHTML = '<foot-bar></foot-bar>';
};

export default main;
