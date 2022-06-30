/* eslint-disable array-callback-return */
import RekompusSource from '../../data/rekompus-source';
import UrlParser from '../../routes/url-parser';
import { getCookie } from '../../utils/cookie';
import LikeButtonInitiatorJurusan from '../../utils/like-button-initiator-jurusan';
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
    scrollTo({ top: 0 });
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

    const scrollPembelajaran = document.getElementById('scrollPembelajaran');
    const contentPembelajaran = document.getElementById('yangDipelajari');
    const scrollProspek = document.getElementById('scrollProspek');
    const contentProspek = document.getElementById('prospekKarir');
    const scrollPrice = document.getElementById('scrollPrice');
    const contentPrice = document.getElementById('biaya');

    const jurusanItem = kampus[0].jurusan.filter((item) => {
      if (item.id === url.subid) {
        return item;
      }
    });

    LikeButtonInitiatorJurusan.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      jurusan: {
        id_kampus: kampus[0].id,
        nama_kampus: kampus[0].name,
        pictureId: kampus[0].pictureId,
        city: kampus[0].city,
        statusPmb: kampus[0].statusPmb,
        id: jurusanItem[0].id,
        name: jurusanItem[0].namaJurusan,
        kelas: jurusanItem[0].kelas.map((item) => item),
        jenjang: jurusanItem[0].jenjang,
        akreditasi: jurusanItem[0].akreditasi,
      },
    });

    scrollPembelajaran.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: contentPembelajaran.offsetTop - 20 });
    });

    scrollProspek.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: contentProspek.offsetTop - 20 });
    });

    scrollPrice.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: contentPrice.offsetTop - 20 });
    });
  },
};

export default DetailJurusan;
