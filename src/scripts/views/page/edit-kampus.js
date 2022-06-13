import UrlParser from '../../routes/url-parser';
import RekompusSource from '../../data/rekompus-source';
import { createKampusDetailFormWithSubmit, heroText } from '../templates/template-creator';

const EditKampus = {
  async render() {
    return `
    <section class="hero-text container-fluid">
    </section>
    <section class="container-fluid bg-info" id="updateKampus">
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
    heroTextEl.innerHTML = heroText('Edit Kampus');

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const kampus = await RekompusSource.detailKampus(url.id);
    const kampusContainer = document.getElementById('updateKampus');
    kampusContainer.innerHTML = createKampusDetailFormWithSubmit(kampus);

    loadingContainer.classList.remove('show');
    const idKampus = document.getElementById('idKampus').value;
    const formUpdate = document.getElementById('formUpdateKampus');
    formUpdate.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = {
        name,
        description,
        city,
        akreditasiKampus,
        statusPmb,
        kelasTersedia,
      };
    });
  },
};

export default EditKampus;
