import RekompusSource from '../../data/rekompus-source';
import UrlParser from '../../routes/url-parser';
import { createJurusanDetailTemplate } from '../templates/template-creator';

const DetailJurusan = {
  async render() {
    return `
    <div id="loading-container">
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.classList.add('show');
    const kampus = await RekompusSource.detailKampus(url.id);
    const main = document.querySelector('main#content');
    main.innerHTML = createJurusanDetailTemplate(kampus, url.subid);
    loadingContainer.classList.add('show');
    scrollTo({ top: 0 });
  },
};

export default DetailJurusan;
