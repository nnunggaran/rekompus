import RekompusSource from '../../data/rekompus-source';
import UrlParser from '../../routes/url-parser';
import { getCookie } from '../../utils/cookie';
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
    if (getCookie('email').length === 0 && getCookie('jwt').length === 0) {
      swal({
        icon: 'error',
        title: 'Unauthorized!',
        text: 'Harap login terlebih dahulu!',
        timer: 2000,
      }).then(() => {
        window.location.href = '/#/login';
      });
    }
    const main = document.querySelector('main#content');
    const kampus = await RekompusSource.detailKampus(url.id);
    main.innerHTML = createJurusanDetailTemplate(kampus, url.subid);
    // scrollPembelajaran
    // scrollProspek
    // scrollPrice
    scrollTo({ top: 0 });
    const scrollPembelajaran = document.getElementById('scrollPembelajaran');
    const contentPembelajaran = document.getElementById('yangDipelajari');
    scrollPembelajaran.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: contentPembelajaran.offsetTop - 20 });
    });

    const scrollProspek = document.getElementById('scrollProspek');
    const contentProspek = document.getElementById('prospekKarir');
    scrollProspek.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: contentProspek.offsetTop - 20 });
    });

    const scrollPrice = document.getElementById('scrollPrice');
    const contentPrice = document.getElementById('biaya');
    scrollPrice.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: contentPrice.offsetTop - 20 });
    });
  },
};

export default DetailJurusan;
