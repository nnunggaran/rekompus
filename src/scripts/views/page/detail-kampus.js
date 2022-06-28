import RekompusSource from '../../data/rekompus-source';
import UrlParser from '../../routes/url-parser';
import { getCookie } from '../../utils/cookie';
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
    scrollTo({ top: 0 });
    const loadingContainer = document.getElementById('loading-container');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
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
    const kampus = await RekompusSource.detailKampus(url.id);
    const kampusContainer = document.querySelector('#detail-kampus');
    kampusContainer.innerHTML = createKampusDetailTemplate(kampus);
    loadingContainer.classList.remove('show');
    const scrollKampus = document.getElementById('scrollKampus');
    const scrollJurusan = document.getElementById('scrollJurusan');
    const scrollReview = document.getElementById('scrollReview');

    const infoKampus = document.getElementById('info-kampus');
    const jurusanTersedia = document.getElementById('jurusan-tersedia');
    const jurusanLength = document.getElementById('jurusan-length');
    const jurusanField = document.getElementById('jurusanField');
    const containerReviews = document.querySelector('.container-reviews');

    const createTemplateJurusan = (univ, jurusan) => {
      let dataJurusan = '';
      const newJurusan = jurusan.forEach((item) => {
        dataJurusan += `
          <div class="col-md-12">
            <div class="card border-orange my-2">
              <div class="card-body d-flex m-0 p-2 scroll-x">
                <div class="group-text">
                  <h5 class="text-heading">${item.jenjang} - ${item.namaJurusan}</h5>
                  <span class="alert alert-info rounded-pill p-1 fs-6">Akreditasi: ${item.akreditasi}</span>
                </div>
                <div class="group-text ps-1 ms-auto">
                  <p class="text-muted">Biaya SPP</p>
                  <h6 class="text-heading">${item.kelas[0].biayaSPP ? item.kelas[0].biayaSPP : '<span class="text-danger">No Data</span>'}</h6>
                </div>
              </div>
              <div class="card-footer bg-primary">
                <a href="/#/kampus/${univ.id}/jurusan/${item.id}">
                  <button class="btn btn-primary fw-bold w-100">Detail</button>
                </a>
              </div>
            </div>
          </div> 
          `;
      });

      return dataJurusan;
    };

    kampus.forEach((univ) => {
      jurusanTersedia.innerHTML += createTemplateJurusan(univ, univ.jurusan);
      jurusanLength.innerText = `${univ.jurusan.length} Jurusan ditampilkan`;
    });

    jurusanField.addEventListener('keyup', async (e) => {
      if (e.target.value.trim() === '') {
        jurusanTersedia.innerHTML = '';
        kampus.forEach((univ) => {
          jurusanTersedia.innerHTML += createTemplateJurusan(univ.jurusan);
        });
      }
      const univData = await kampus;
      const tempJurusan = [];
      jurusanTersedia.innerHTML = '';
      univData.forEach((univ) => {
        univ.jurusan.forEach((prodi) => {
          if (prodi.namaJurusan.toLowerCase().includes(e.target.value.toLowerCase())) {
            tempJurusan.push(prodi);
          }
        });
      });

      if (tempJurusan.length > 0) {
        jurusanLength.innerText = `${tempJurusan.length} Jurusan ditampilkan`;
        jurusanTersedia.innerHTML += createTemplateJurusan(tempJurusan);
      } else {
        jurusanLength.innerText = `${tempJurusan.length} Jurusan ditampilkan`;
        jurusanTersedia.innerHTML = `
        <div class="container-fluid">
          <h2 class="text-center">Tidak ada data!</h2>
          <div class="d-flex">
          <img src="./images/no-data.png" alt="no-data" class="w-75 mx-auto">
          </div>
          
        </div>
      `;
      }
    });

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
          top: (2 * containerReviews.offsetHeight) + 750,
        });
      }
    });
  },
};

export default DetailKampus;
