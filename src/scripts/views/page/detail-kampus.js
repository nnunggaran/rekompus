import RekompusSource from '../../data/rekompus-source';
import UrlParser from '../../routes/url-parser';
import { createKampusDetailTemplate } from '../templates/template-creator';

const DetailKampus = {
  async render() {
    return `
    <section id="detail-kampus" class="row">
    </section>
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
    const kampusContainer = document.querySelector('#detail-kampus');
    kampusContainer.innerHTML = createKampusDetailTemplate(kampus);
    loadingContainer.classList.remove('show');
    const scrollKampus = document.getElementById('scrollKampus');
    const scrollJurusan = document.getElementById('scrollJurusan');
    const scrollReview = document.getElementById('scrollReview');

    const infoKampus = document.getElementById('info-kampus');
    const jurusanTersedia = document.getElementById('jurusan-tersedia');
    const containerReviews = document.querySelector('.container-reviews');

    scrollTo({ top: 0 });
    scrollKampus.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: infoKampus.offsetTop - 20 });
    });
    scrollJurusan.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: jurusanTersedia.offsetTop - 20 });
    });
    scrollReview.addEventListener('click', (e) => {
      e.preventDefault();
      const mediaQueryLarge = window.matchMedia('(min-width: 760px)');
      const checkMedia = mediaQueryLarge.matches;
      if (checkMedia) {
        window.scrollTo({ top: containerReviews.offsetTop - 50 });
      } else {
        window.scrollTo({
          top: (2 * containerReviews.offsetHeight) + 1200,
        });
      }
    });
  },
};

export default DetailKampus;
