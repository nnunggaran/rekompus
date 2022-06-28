import RekompusSource from '../../data/rekompus-source';
import { jurusanRekomendasi, kampusBerdasarkanLokasi, kampusRekomendasi } from '../templates/home-creator';

const Homepage = {
  async render() {
    return `
    <section class="hero container-fluid row">
      <div class="col-md-6">
          <p class="welcome-text">Selamat Datang di Rekompus</p>
          <h1>Rekomendasi Kampus dan Jurusan Impianmu</h1>
          <p class="desc-text">Temukan Rekomendasi Kampus dan Jurusan Impianmu di Rekompus sekarang juga.<br>
              Daftar sekarang gratis!</p>
          <a href="#kampus-rekomendasi" id="btn-eksplor">
              <button class="btn btn-info text-white">Eksplor</button>
          </a>
      </div>
      <div class="col-md-6">
        <img src="./images/hero-image.png" alt="" class="hero-image">
      </div>
    </section>
    <section id="kampus-rekomendasi" class="container-fluid bg-regular-blue py-5">
    </section>
    <section id="jurusan-rekomendasi" class="container-fluid bg-light py-5">
    </section>
    <section id="lokasi-kampus" class="container-fluid bg-regular-blue py-5">
    </section>
    <div id="loading-container">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    `;
  },

  async afterRender() {
    const loadingContainer = document.getElementById('loading-container');
    scrollTo({ top: 0 });
    loadingContainer.classList.add('show');
    const kampuss = await RekompusSource.listKampus();
    const kampusRekomendasiEl = document.querySelector('#kampus-rekomendasi');
    kampusRekomendasiEl.innerHTML = kampusRekomendasi(kampuss);
    const jurusanRekomendasiEl = document.querySelector('#jurusan-rekomendasi');
    jurusanRekomendasiEl.innerHTML = jurusanRekomendasi(kampuss);
    const lokasiKampusEl = document.querySelector('#lokasi-kampus');
    lokasiKampusEl.innerHTML = kampusBerdasarkanLokasi(kampuss);
    const btnEksplor = document.getElementById('btn-eksplor');
    loadingContainer.classList.remove('show');
    btnEksplor.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: kampusRekomendasiEl.offsetTop - 35 });
    });
  },
};

export default Homepage;
