import RekompusSource from '../../data/rekompus-source';
import UrlParser from '../../routes/url-parser';
import { heroText, createKampusDetailForm } from '../templates/template-creator';

const InfoKampus = {
  async render() {
    return `
    <section class="hero-text container-fluid">
    </section>
    <section class="container-fluid bg-info" id="infoKampus">
    </section>
    <div id="loading-container">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    `;
  },

  async afterRender() {
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.classList.add('show');
    const heroTextEl = document.querySelector('.hero-text');
    heroTextEl.innerHTML = heroText('Info Kampus');

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const kampus = await RekompusSource.detailKampus(url.id);
    const kampusContainer = document.getElementById('infoKampus');

    kampusContainer.innerHTML = createKampusDetailForm(kampus);
    loadingContainer.classList.remove('show');
    scrollTo({ top: 0 });
  },
};

export default InfoKampus;
